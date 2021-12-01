import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductApi } from '../utils/hooks/useProductApi';

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {
  ProductDetailPageContent,
  ProductName,
  ProductPrice,
  ProductCarousel,
  ProductDescription,
  ProductActions,
  InStock,
  ProductTags,
  ProductSKU,
  QuantityButton,
  QuantityInput,
  ProductSpecs,
  ProductCategory,
} from './ProductDetailPage.style';
import { ProductButton } from '../components/ProductCard.styles';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const response = useProductApi(productId);
  const [images, setImages] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (!response.isLoading) {
      setImages(
        response.data?.results[0].data?.images.map(({ image }) => ({
          src: image.url,
        }))
      );
    }
  }, [response]);
  const increaseHandler = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const reduceHandler = () => {
    if (quantity > 1) setQuantity((prevQty) => prevQty - 1);
  };
  return (
    <ProductDetailPageContent>
      <ProductCarousel style={{ width: '90%' }}>
        {images && (
          <Carousel
            hasThumbnailsAtMax={false}
            isMaximized={false}
            hasSizeButton={false}
            hasSizeButtonAtMax={false}
            hasIndexBoard={false}
            hasMediaButton={false}
            style={{ width: '900ox' }}
            images={images}
          />
        )}
      </ProductCarousel>

      <div>
        <ProductName>
          {response.data.results && response.data.results[0].data.name}
        </ProductName>
        <ProductPrice>
          {`Price: $`}
          {response.data.results &&
            response.data.results[0].data.price.toFixed(2)}
        </ProductPrice>
        <ProductSKU>
          sku {response.data.results && response.data.results[0].data.sku}
        </ProductSKU>
        <ProductCategory>
          {`Category `}
          {response.data.results && response.data.results[0].data.category.slug}
        </ProductCategory>
        <ProductDescription>
          {response.data.results &&
            response.data.results[0].data.description[0].text}
        </ProductDescription>

        <ProductSpecs>
          {response.data.results &&
            response.data.results[0].data.specs.map((spec, index) => {
              return (
                <li key={index}>{`${spec.spec_name} ${spec.spec_value} `}</li>
              );
            })}
        </ProductSpecs>
        <div>
          {response.data.results &&
            response.data.results[0].tags.map((tag, index) => {
              return <ProductTags key={index}> #{tag}</ProductTags>;
            })}
        </div>
      </div>

      <ProductActions>
        <InStock>In Stock </InStock>
        <div style={{ margin: '20px 0px' }}>
          <QuantityButton onClick={reduceHandler}> - </QuantityButton>
          <QuantityInput readOnly value={quantity} />
          <QuantityButton onClick={increaseHandler}> + </QuantityButton>
        </div>
        <ProductButton> Add to Cart</ProductButton>
      </ProductActions>
    </ProductDetailPageContent>
  );
}