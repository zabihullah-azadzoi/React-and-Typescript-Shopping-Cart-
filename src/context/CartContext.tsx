import {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
  useEffect,
  useState,
} from "react";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type InitialStateType = { cart: ProductType[] };
const initialState = { cart: [] };

type ProviderInitialStateType = {
  cart: ProductType[];
  totalPrice: number;
  totalItems: number;
  addToCartHandler: (product: ProductType) => void;
  removeFromCartHandler: (product: ProductType) => void;
  increaseQuantityHandler: (product: ProductType) => void;
  submitCartHandler: () => void;
};

const providerInitialState: ProviderInitialStateType = {
  cart: [],
  totalPrice: 0,
  totalItems: 0,
  addToCartHandler: () => {},
  removeFromCartHandler: () => {},
  increaseQuantityHandler: () => {},
  submitCartHandler: () => {},
};

const ACTION_TYPES = {
  ADD: "ADD_CART",
  REMOVE: "REMOVE_CART",
  INCREASE: "INCREASE_QUANTITY",
  SUBMIT: "SUBMIT_CART",
};

type ActionType = { type: string; payload?: ProductType };

const reducer = (
  state: InitialStateType,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case ACTION_TYPES.ADD:
      if (!action.payload) throw new Error("No data is provided!");

      const existingProduct = state.cart.find(
        (product) => product.id === action.payload?.id
      );
      if (existingProduct) return { ...state, cart: state.cart };

      const cartClone = [...state.cart];
      cartClone.push(action.payload);
      return { ...state, cart: cartClone };

    case ACTION_TYPES.REMOVE:
      const { id } = action.payload!;
      if (!id)
        throw new Error("No ID is provided to remove product from Cart!");

      let cart = [...state.cart];
      cart = cart.filter((product) => product.id !== id);
      return { ...state, cart: cart };

    case ACTION_TYPES.INCREASE:
      const { id: quantityItemId, quantity } = action.payload!;
      if (!quantityItemId)
        throw new Error(
          "No ID is provided to increase quantity of product in Cart!"
        );

      let cartToUpdate = [...state.cart];
      const productToUpdate = cartToUpdate.find(
        (product) => product.id === quantityItemId
      );
      if (!productToUpdate)
        throw new Error("no product found to increase quantity!");
      productToUpdate.quantity = quantity;

      return { ...state, cart: cartToUpdate };

    case ACTION_TYPES.SUBMIT:
      return { cart: [] };

    default:
      throw new Error("something bad happened!");
  }
};

export const cartContext = createContext(providerInitialState);

type ChildrenType = { children: ReactNode };
const CartContextProvider = ({ children }: ChildrenType): ReactElement => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const addToCartHandler = (product: ProductType): void => {
    dispatch({
      type: ACTION_TYPES.ADD,
      payload: product,
    });
  };

  const removeFromCartHandler = (product: ProductType): void => {
    dispatch({
      type: ACTION_TYPES.REMOVE,
      payload: product,
    });
  };

  const increaseQuantityHandler = (product: ProductType): void => {
    dispatch({
      type: ACTION_TYPES.INCREASE,
      payload: product,
    });
  };
  const submitCartHandler = (): void => {
    dispatch({
      type: ACTION_TYPES.SUBMIT,
    });
  };

  useEffect(() => {
    const totalPrice = state.cart.reduce((prevItem, nextItem) => {
      return prevItem + nextItem.price * nextItem.quantity;
    }, 0);
    const totalItems = state.cart.reduce((prevItem, nextItem) => {
      return prevItem + nextItem.quantity;
    }, 0);
    setTotalItems(totalItems);
    setTotalPrice(totalPrice);
  }, [state]);

  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        totalItems,
        totalPrice,
        addToCartHandler,
        removeFromCartHandler,
        increaseQuantityHandler,
        submitCartHandler,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
