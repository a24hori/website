import Link from 'next/link';
import Layout from '../components/Layout';
import Head from 'next/head';

export default () => {
	return (
		<Layout>
			<Head>
				<title>Atsushi Hori | About</title>
			</Head>
			<h3>About</h3>
			<ul>
				<li><b>Name</b>: Atsushi Hori</li>
				<li><b>Affiliation</b>: Kyoto University (Department of Applied Mathematics and Physics)</li>
				<li><b>Research Interests</b>: Mathematical Optimization, Equilibrium Model (Variational Inequality, Complementarity Problems, Equilirium Problems with Equilibrium Constraints (EPEC))</li>
			</ul>
		  </Layout>
	);
};