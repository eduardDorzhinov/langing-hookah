import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';
import Image from 'next/image';

import product1 from '../../../public/img/product1.jpg';
import product2 from '../../../public/img/product2.jpg';
import product3 from '../../../public/img/product3.jpg';

const PRODUCTS = [product1, product2, product3];

function ProductSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="product">
      <div className="container">
        <h2 className="product--title section_title title_h2">{t('product-title').toUpperCase()}</h2>
        <div className="product--content">
          {PRODUCTS.map((photo, index) => (
            <div key={photo.toString() + index} className="product-card">
              <Image
                src={photo}
                alt="product"
                sizes="(max-width: 1400px) 23vw, (max-width: 500px) 300px"
                fill
              />
              <p className="title_h3">{t(`product-${index + 1}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
