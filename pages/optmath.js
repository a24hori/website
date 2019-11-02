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
        </a></Link>
      </p>
    </div>
  )
}

export default () => {
    return (
        <Layout>
            <Head>
                <title>A24H | OptMath (Optimization Mathematics)</title>
            </Head>
            <h3>OptMath</h3>
            {posts.map((post, i) => (
            <PostPreview key={i} post={post} prefetch={i < 3} />
            ))}
        </Layout>
    )
}