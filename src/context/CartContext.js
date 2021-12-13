import { createContext, useReducer, useEffect } from 'react';
const ACTIONS = {
  ADD: 'ADD',
  EDIT: 'EDIT',
  INCREASE: 'INCREASE',
  DECREASE: 'DECREASE',
  DELETE: 'DELETE',
};

const getTotalPrice = (cart) => {
  return (
    cart.products.length > 0
      ? cart.products.reduce((prev, next) => {
          return prev + next.price * next.quantity;
        }, 0)
      : 0
  ).toFixed(2);
};

const reducer = (cart, actions) => {
  let newCart = { ...cart };
  switch (actions.type) {
    case ACTIONS.ADD:
      newCart.products = [...newCart.products, actions.product];
      newCart.total = getTotalPrice(newCart);
      return newCart;

    case ACTIONS.EDIT:
      newCart.products = newCart.products.map((product) => {
        if (product.id === actions.product.id) {
          return { ...product, quantity: actions.product.quantity };
        }
        return product;
      });
      newCart.total = getTotalPrice(newCart);
      return newCart;

    case ACTIONS.DELETE:
      newCart.products = cart.products.filter(
        (product) => product.id !== actions.productId
      );
      newCart.total = getTotalPrice(newCart);
      return newCart;

    case ACTIONS.INCREASE:
      newCart.products = newCart.products.map((product) => {
        if (product.id === actions.productId) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });
      newCart.total = getTotalPrice(newCart);
      return newCart;

    case ACTIONS.DECREASE:
      newCart.products = newCart.products.map((product) => {
        if (product.id === actions.productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      newCart.total = getTotalPrice(newCart);
      return newCart;

    default:
      return newCart;
  }
};

const initializer = (key) => {
  if (!localStorage.getItem(key)) return { products: [], total: 0 };
  return JSON.parse(localStorage.getItem(key));
};

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, dispatchCart] = useReducer(reducer, initializer('cart'));

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product, quantity) => {
    const newProduct = {
      id: product.id,
      name: product.data.name,
      price: product.data.price,
      image: product.data.mainimage.url,
      stock: product.data.stock,
      quantity: quantity,
    };
    const productInCart = cart.products.find((prod) => prod.id === product.id);
    const productObject = {
      type: ACTIONS.ADD,
      product: newProduct,
    };
    if (productInCart) productObject.type = ACTIONS.EDIT;

    dispatchCart(productObject);
  };
  const increase = (productId) => {
    const product = cart.products.find((prod) => prod.id === productId);

    if (product.stock >= product.quantity) return;

    const productObject = {
      type: ACTIONS.INCREASE,
      productId,
    };
    dispatchCart(productObject);
  };
  const decrease = (productId) => {
    const productObject = {
      type: ACTIONS.DECREASE,
      productId,
    };
    dispatchCart(productObject);
  };

  const removeProduct = (productId) => {
    const productObject = {
      type: ACTIONS.DELETE,
      productId,
    };
    dispatchCart(productObject);
  };

  const context = {
    addProduct,
    cart,
    removeProduct,
    increase,
    decrease,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
export default CartContext;
