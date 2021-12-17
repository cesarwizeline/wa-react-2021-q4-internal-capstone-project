import React from 'react';
import { SliderContent, Slide } from './Slider.styles.js';
import { useBanners } from '../../utils/hooks/useBanners';
export default function Slider() {
  const [imageSelected, featuredBanners] = useBanners();

  const getSlideStyles = (index) => {
    if (index === imageSelected) return ['active', 'slide'];
    return 'slide';
  };

  return (
    <SliderContent>
      {featuredBanners &&
        featuredBanners.map(({ id, data: { main_image } }, index) => {
          return (
            <Slide className={getSlideStyles(index)} key={id}>
              <img className="image" src={main_image.url} alt={id} />
            </Slide>
          );
        })}
    </SliderContent>
  );
}
