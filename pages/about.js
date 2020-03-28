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
				<li><b>氏名</b>: 堀 篤史</li>
				<li><b>所属</b>: 京都大学大学院（情報学研究科数理工学専攻）博士課程在学中</li>
				<li><b>研究対象</b>: 数理最適化（変分不等式問題，相補性問題，均衡制約をもつ均衡問題（EPEC））</li>
				<li><b>研究成果</b>:
					<ol>
						<li><u>Hori, A.</u>, Fukushima, M. Gauss–Seidel Method for Multi-leader–follower Games. Journal of Optimization Theory and Applications 180, 651–670 (2019). <a href="https://doi.org/10.1007/s10957-018-1391-5">https://doi.org/10.1007/s10957-018-1391-5</a></li>
					</ol>
				</li>
				<li><b>表彰歴</b>:
					<ol>
						<li>2018年度日本オペレーションズ・リサーチ学会学生論文賞 受賞</li>
					</ol>
				</li>
			</ul>
		  </Layout>
	);
};
