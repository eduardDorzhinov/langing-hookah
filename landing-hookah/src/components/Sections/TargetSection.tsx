import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';

function TargetSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="target">
      <div className="container">
        <h2 className="target--title section_title title_h2">{t('target-title').toUpperCase()}</h2>

        <ul
          className="target--list"
          dangerouslySetInnerHTML={{
            __html: t('target-html').toUpperCase(),
          }}
        />
      </div>
    </section>
  );
}

export default TargetSection;
