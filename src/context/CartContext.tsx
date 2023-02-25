import {
  createContext,
  createElement,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";

const initialState = {};

const cartContext = createContext(initialState);

type ChildrenType = { children: ReactNode };
const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
  return <cartContext.Provider value={}>{children}</cartContext.Provider>;
};
