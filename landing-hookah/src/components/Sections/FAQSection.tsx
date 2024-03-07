import useTranslation from 'next-translate/useTranslation';
import { DIR_COMMON } from '../../../constants';

function FAQSection() {
  const { t } = useTranslation(DIR_COMMON);
  return (
    <section className="faq">
      <div className="container">
        <h2 className="faq--title section_title title_h2">{t('questions-title').toUpperCase()}</h2>

        <div className="faq--content">
          <h3 className="faq--question title_h3">{t('question-1')}</h3>
          <p className="faq--answer text_p1">{t('answer-1')}</p>
          <h3 className="faq--question title_h3">{t('question-2')}</h3>
          <p className="faq--answer text_p1">{t('answer-2')}</p>
          <h3 className="faq--question title_h3">{t('question-3')}</h3>
          <p className="faq--answer text_p1">{t('answer-3')}</p>
          <h3 className="faq--question title_h3">{t('question-4')}</h3>
          <p className="faq--answer text_p1">{t('answer-4')}</p>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
