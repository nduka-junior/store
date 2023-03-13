import { createContext, useEffect, useState, useRef } from "react";
import { fetchCategory, fetchProducts } from "./fetchData";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
// CONXTEXT CREATION
export const StoreContext = createContext({
  category: [],
  product: [],
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
  setcategorySelected: () => {},
  getProductData: () => {},
  handleLogout: () => {},
  loading: true,
  authUser: null,
});

//
function ContextProvider({ children }) {
  const [Category, setCategory] = useState([]);
  const [Products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [categorySelected, setcategorySelected] = useState();
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState(null);

  // fetch data
  const requestData = async () => {
    setLoading(true);
    // category
    setCategory(await fetchCategory());

    // products
    setProducts(await fetchProducts(categorySelected));
    setLoading(false);
  };

  const getProductData = (id) => {
    let productData = Products.find((product) => product.id == id);

    if (productData === undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
    }

    return productData;
  };

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getProductQuantity(id);
    console.log(JSON.parse(localStorage.getItem("cartItems")).cartItems);
    addCartItems();
    if (quantity === 0) {
      // product is not in cart
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: 1,
        },
      ]);
      addCartItems();
    } else {
      // product is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to product id of 2
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id == id // if condition
              ? { ...product, quantity: product.quantity + 1 } // if statement is true
              : product // if statement is false
        )
      );
      addCartItems();
    }
  }

  function removeOneFromCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
      addCartItems();
    } else {
      setCartProducts(
        cartProducts.map(
          (product) =>
            product.id === id // if condition
              ? { ...product, quantity: product.quantity - 1 } // if statement is true
              : product // if statement is false
        )
      );
      addCartItems();
    }
  }
  function deleteFromCart(id) {
    // [] if an object meets a condition, add the object to array
    // [product1, product2, product3]
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id !== id;
      })
    );
    addCartItems();
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }
  // AUTHENTICATION
  const authStateChanged = (user) => {
    setLoading(true);
    if (!user) {
      localStorage.setItem("authUser", null);
      localStorage.setItem("cartItems", JSON.stringify([]));
      setLoading(false);
      return;
    }

    localStorage.setItem(
      "authUser",
      JSON.stringify({
        uid: user.uid,
        user,
      })
    );
    setLoading(false);
  };

  // LOGOUT
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //ADD cartItems to firestore
  const addCartItems = async () => {
    const collectionName = authUser.uid;
    const docRef = doc(db, "cartItems", collectionName);

    try {
      await setDoc(docRef, {
        cartItems: cartProducts,
      });
      getCartItems();
    } catch (error) {
      console.log(error);
    }
  };
  //GET cartItems from firestore
  const getCartItems = async () => {
    setLoading(true);
    const collectionName = await authUser.uid;
    const docRef = doc(db, "cartItems", collectionName);
    try {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        localStorage.setItem(
          "cartItems",
          JSON.stringify(docSnap.data().cartItems)
        );
      } else {
        localStorage.setItem("cartItems", JSON.stringify([]));
      }
    } catch (error) {
      console.log(error);
      localStorage.setItem("cartItems", JSON.stringify([]));
    }
    setLoading(false);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    setAuthUser(JSON.parse(localStorage.getItem("authUser")));
    return () => unsubscribe();
  }, []);
  //

  const contextValue = {
    category: Category,
    products: Products,
    items: cartProducts,
    getProductQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalCost,
    setcategorySelected,
    getProductData,
    loading,
    authUser,
    handleLogout,
  };
  const cartItemsAsync = async () => { 
    setLoading(true);
    await getCartItems();
    setCartProducts(JSON.parse(localStorage.getItem("cartItems")));
    setLoading(false);
  }
  useEffect(() => {
    setLoading(true);
 cartItemsAsync();
    setLoading(false);
  }, [authUser]);
  //
  useEffect(() => {
    requestData();
  }, [categorySelected]);

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default ContextProvider;
