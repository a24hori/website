import Link from 'next/link';
import Head from 'next/head';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/blog">
        <a style={linkStyle}>Blog</a>
    </Link>
    <Link href="https://twitter.com/keithca47562610">
        <a style={linkStyle}>Twitter</a>
    </Link>
  </div>
);


export default Header;