import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

export default () => {
	return (
		<Layout>
			<Head>
				<title>A24H | About</title>
			</Head>
			<h3>About</h3>
			<ul>
				<li><b>Name</b>: A24H</li>
				<li><b>Location</b>: Kyoto (2020-)</li>
				<li><b>Research Interests</b>: Mathematical Optimization, Algorithm for Machine Learning, Equilibrium Model (Variational Inequality)</li>
			</ul>
		  </Layout>
	);
};