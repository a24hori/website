import Link from 'next/link';
import Head from 'next/head';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15,
  backgroundColor: "#fff",
};

const Header = () => (
  <div>
    <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
    </Head>
    <Link href="/">
      <Button>Home</Button>
    </Link>
    <Link href="/about">
      <Button>About</Button>
    </Link>
    <Link href="/optmath">
      <Button>OptMath</Button>
    </Link>
    <Link href="/blog">
      <Button>Blog</Button>
    </Link>
    <a href="https://github.com/Keith-Campbell">
      <Button>Github</Button>
    </a>
  </div>
);


export default Header;
