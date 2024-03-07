import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';

function PositivesSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="positives">
      <div className="container">
        <h2 className="positives--title section_title title_h2">{t('dignities-title').toUpperCase()}</h2>
        <ul
          className="positives--list"
          dangerouslySetInnerHTML={{
            __html: t('dignities-html').toUpperCase(),
          }}
        />
      </div>
    </section>
  );
}

export default PositivesSection;
