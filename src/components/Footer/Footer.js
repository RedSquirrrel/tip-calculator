import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      Challenge by
      <a
        className='footer__link'
        href='https://www.frontendmentor.io?ref=challenge'
        target='_blank'
        rel='noreferrer noopener'
      >
        {' '}
        <span>Frontend Mentor </span>
      </a>{' '}
      Coded by
      <a
        className='footer__link'
        href='https://github.com/RedSquirrrel/tip-calculator'
        target='_blank'
        rel='noreferrer noopener'
      >
        {' '}
        <span>@RedSquirrel </span>
      </a>
    </div>
  );
};

export default Footer;
