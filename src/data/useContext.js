import { useContext } from "react";
import { StoreContext } from "./ContextProvider";

const useStoreContext = () => {
  return useContext(StoreContext);
};
export default useStoreContext
