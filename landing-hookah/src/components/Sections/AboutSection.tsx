import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';

function AboutSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="about" id="product">
      <div className="container">
        <h2 className="about--title title_h1">
          {t('about-title')}
        </h2>
        <p
          className="about--text text_p1"
          dangerouslySetInnerHTML={{ __html: t('about-text') }}
        />
      </div>
    </section>
  );
}

export default AboutSection;
