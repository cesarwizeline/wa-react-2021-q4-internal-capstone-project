import React, { useContext } from 'react';
import {
  Form,
  CheckoutPageContent,
  CheckoutActions,
  ProductsSIde,
} from './CheckoutPage.styles';
import { Button } from '../../utils/main.styles';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../context/CartContext';
import {
  TableProducts,
  ProductsRow,
  RowElement,
} from '../ShoppingCartPage/ShoppingCartPage.styles';
import { Title } from '../../utils/main.styles';
import InputText from '../../components/InputText';
const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  return (
    <CheckoutPageContent>
      <ProductsSIde>
        <Title> Checkout </Title>
        <Form>
          <InputText title="Name" />
          <InputText title="Email" />
          <InputText title="post/zip" />
          <InputText type="textarea" title="Order Notes" />
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
        <CheckoutActions>
          <Button className={'success'}> Place order </Button>
          <Button onClick={() => navigate('/cart')}> Go back to cart </Button>
        </CheckoutActions>
      </ProductsSIde>
    </CheckoutPageContent>
  );
};

export default CheckoutPage;
