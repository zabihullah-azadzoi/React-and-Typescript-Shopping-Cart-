import { createContext, ReactElement, ReactNode, useState } from "react";

import { products as productsList } from "../data/products.json";

type ProductType = { id: number; name: string; price: number };
export type ProductPropsType = { product: ProductType };

export type InitialStateType = { products: ProductType[] };
const initialState: InitialStateType = { products: productsList };

export const productContext = createContext(initialState);

const ProductContextProvider = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const [products, setProducts] = useState<InitialStateType>(initialState);

  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
