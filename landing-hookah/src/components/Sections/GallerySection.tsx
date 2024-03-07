import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

import photo4 from '../../../public/img/photo4.jpg';
import photo5 from '../../../public/img/photo5.jpg';
import photo6 from '../../../public/img/photo6.jpg';

const PHOTOS = [photo4, photo5, photo6];

function GallerySection() {
  return (
    <section className="gallery">
      <div className="container">
        <Carousel
          emulateTouch
          infiniteLoop
          showStatus={false}
          autoPlay
          interval={4000}
          showThumbs={false}
        >
          {PHOTOS.map((photo, index) => (
            <div key={index} className="gallery--photo-wrap">
              <Image
                src={photo}
                className="gallery--photo"
                style={{ objectFit: 'cover' }}
                alt={`${photo.toString()} + ${index}`}
                fill
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default GallerySection;
