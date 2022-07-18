import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

export default () => {
	return (
		<Layout>
			<Head>
				<title>Atsushi Hori's website | Top</title>
				<meta name="keywords" content="A24H,mathematical optimization,operations research,optmath,Atsushi Hori" />
			</Head>
			<h2>ウェブサイトリンク変更のお知らせ</h2>
			<p>堀篤史のウェブサイトは<a href="https://a24hori.github.io/">https://a24hori.github.io/</a>に移行しました。</p>
			<p>お手数をおかけしますが、上記リンクで飛んでいただきますようお願いいたします（リダイレクトしません）。</p>
		
			<h2>Notice: Website link changes</h2>
			<p>Atsushi Hori's website has been moved to<a href="https://a24hori.github.io/">https://a24hori.github.io/</a></p>
			<p>Sorry for the inconvenience (no redirect).</p>
		  </Layout>
	);
};
