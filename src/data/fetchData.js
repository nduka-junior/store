import axios from "axios";

export const fetchCategory = () => {
  return axios
    .get("https://fakestoreapi.com/products/categories")
    .then(({ data }) => {
      return data;
    });
};

export const fetchProducts = (category) => {
  console.log( category);
  const checkCategory = category ? `/category/${category}` : "";
  return axios
    .get(`https://fakestoreapi.com/products${checkCategory}`)
    .then(({ data }) => {
      return data;
    });
};
