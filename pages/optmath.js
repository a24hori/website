import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';
import posts from '../posts';

const PostPreview = ({ post, prefetch }) => {
  return (
    <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <p>
        <Link href={post.urlPath} prefetch={prefetch}><a>
          {post.title}
        </a>
        </Link>
      </p>
    </div>
  )
}

export default () => {
    return (
      <Layout>
        <head>
          <title>Atsushi Hori's website | OptMath (Optimization Mathematics)</title>
        </head>
        <h3>OptMath (Optimization Mathematics)</h3>
        <p>最適化数学に関する備忘録（間違いや疑問点があれば，以下のメールアドレス（★→@）までご連絡いただけると幸いです）．</p>
        <pre>atsh.handelssohn★gmail.com</pre>
        {posts.map((post, i) => (
          <PostPreview key={i} post={post} prefetch={i < 3} />
        ))}
      </Layout>
    )
}