import Link from 'next/link';

const linkStyle = {
    textAlign: 'center',
    marginRight: 15
  };
  
  const Footer = () => (
    <div style={linkStyle}>
      <Link href="/optmath">
        <a>Back</a>
      </Link>
    </div>
  );
  
  export default Footer;