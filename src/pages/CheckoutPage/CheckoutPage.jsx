import React, { useContext } from 'react';
import {
  InputText,
  TextArea,
  Form,
  CheckoutPageContent,
} from './CheckoutPage.styles';
import { Button } from '../../utils/main.styles';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import {
  TableProducts,
  ProductsRow,
  RowElement,
} from '../ShoppingCartPage/ShoppingCartPage.styles';
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <CheckoutPageContent>
      <Form>
        Name
        <br />
        <InputText />
        <br />
        Email
        <br />
        <InputText />
        <br />
        post/zip
        <br />
        <InputText />
        <br />
        Order Notes
        <br />
        <TextArea></TextArea>
      </Form>
      <TableProducts>
        <ProductsRow>
          <RowElement>&nbsp;</RowElement>
          <RowElement>&nbsp;</RowElement>
          <RowElement>Name</RowElement>
          <RowElement>Quantity</RowElement>
          <RowElement>Price</RowElement>
        </ProductsRow>

        {cart.products.map((product) => {
          return (
            <ProductsRow key={product.id}>
              <RowElement></RowElement>
              <RowElement>
                <img
                  style={{ width: '120px' }}
                  src={product.image}
                  alt={product.name}
                />
              </RowElement>
              <RowElement>{product.name} </RowElement>
              <RowElement>{product.quantity}</RowElement>
              <RowElement> $ {` ${product.price.toFixed(2)}`} </RowElement>
            </ProductsRow>
          );
        })}
      </TableProducts>
      <div>
        <Button className={'success'}> Place order </Button>
        <Button onClick={() => navigate('/cart')}> Go back to cart </Button>
      </div>
    </CheckoutPageContent>
  );
};

export default CheckoutPage;
