import Link from 'next/link';
import Head from 'next/head';
import Button from '@material-ui/core/Button';

const linkStyle = {
  marginRight: 15,
  backgroundColor: "#fff",
};

const Header = () => {
  return (<div>
    <Head>
      <link rel="shortcut icon" href="/static/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
    </Head>
    <Link href="/">
      <Button>Home</Button>
    </Link>
  </div>);
};


export default Header;
