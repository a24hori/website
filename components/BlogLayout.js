import Head from 'next/head'
import Link from 'next/link'
import posts from '../posts'

const globalStyles = `

  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 20px;
  }
  h1,h2,h3,h4,h5 {
    font-family: 'Noto Sans JP', sans-serif;
  }
  p {
    font-family: 'Noto Serif JP', serif;
  }
  a {
    color: #00c;
    text-decoration: none;
  }
  a:hover {
    color: #33f;
  }

  code {
    text-align: center;
    font-family: monospace;
  }
  
  .contentContainer {
    max-width: 800px;
    margin: 0 auto;
  }

  .siteTitle {
    font-size: 30px;
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .siteTitle a {
    color: #000;
    text-decoration: none;
  }
  .siteTitle a:hover {
    color: #666;
  }


`

const SiteTitle = ({ isHomepage }) => {
  const title = "Atsushi Hori's website"
  return (
    <div className='siteTitle'>
      <Link href='/'><a>{title}</a></Link>
    </div>
  )
}

export default ({ pathname, children }) => {
  const post = posts.find(post => post.urlPath === pathname)
  const title = post ? post.title : "A24H's website"
  return (
    <div>
      <Head>
        <title>{title}</title>
        <style>{globalStyles}</style>
        <link href="https://fonts.googleapis.com/css?family=Noto+Sans+JP:300|Noto+Serif+JP:300&display=swap" rel="stylesheet"></link>
        <meta name="keywords" content={posts.keywords} />
      </Head>
      <div className='contentContainer'>
        <SiteTitle isHomepage={pathname === '/'} />
        {children}
      </div>
    </div>
  )
}
