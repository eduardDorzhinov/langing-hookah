import Image from 'next/image';
import hp from '../../../public/img/logo57.jpg';
import classNames from 'classnames';

function DelimiterLogo({ classes }: { classes?: string }) {
  return (
    <div className={classNames('logo-hp', classes)}>
      <Image src={hp} alt={'hookah-place'} width={57} height={57} />
    </div>
  );
}

export default DelimiterLogo;
