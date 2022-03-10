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
			<h3>About me:</h3>
			<ul>
				<li><b>氏名</b>: 堀 篤史</li>
				<li><b>所属</b>: 京都大学大学院（情報学研究科数理工学専攻）博士後期課程在籍中</li>
				<li><b>研究対象</b>: 連続最適化の理論（特に変分不等式問題をはじめとするクラスの均衡問題に興味），組み合わせ最適化の実社会への応用（スケジューリングやロット最適化など）</li>
				<li><b>研究成果</b>:
					<ol>
						<li><u>Hori, A.</u>, Yamakawa, Y., and Yamashita, N., Distributionally Robust Expected Residual Minimization for Stochastic Variational Inequality Problems. Submitted. <a href="https://arxiv.org/abs/2111.07500">https://arxiv.org/abs/2111.07500</a></li>
						<li><u>Hori, A.</u>and Fukushima, M., Gauss–Seidel method for multi-leader–follower games. <i>Journal of Optimization Theory and Applications</i> <b>180</b>, 651–670 (2019). <a href="https://doi.org/10.1007/s10957-018-1391-5">https://doi.org/10.1007/s10957-018-1391-5</a></li>
					</ol>
				</li>
				<li><b>研究発表</b>:
					<ol>
						<li><u>堀篤史</u>，2段階分布的ロバストCournot--Nash均衡問題と均衡解の存在性，<a href='http://wakate.jsiam.org/?p=68'>日本応用数理学会 若手の会 第7回学生研究発表会</a>，オンライン開催，2022年3月．</li>
						<li><u>堀篤史</u>，山川雄也，山下信雄，確率変分不等式問題に対する分布的ロバスト期待残差最小化，<a href='https://orsj.org/kansai/2021/10/05/2021%e5%b9%b4%e5%ba%a6%e9%96%a2%e8%a5%bf%e6%94%af%e9%83%a8ssor/'>日本OR学会関西支部SSOR2021</a>，オンライン開催，2021年10月．（<b>優秀発表賞受賞</b>）</li>
						<li><u>Hori, A.</u>, Yamakawa, Y., and Yamashita, N., Distributionally Robust Expected Residual Minimization for Stochastic Variational Inequality Problems. <a href='https://www.siam.org/conferences/cm/conference/op21'><i>SIAM Conference on Optimization (OP21)</i></a>, Virtual (CP2 Advances in Robust and Distributionally Robust Optimization), July, 2021.</li>
						<li><u>堀篤史</u>，山川雄也，山下信雄，確率変分不等式問題に対する分布的ロバスト期待残差最小化，<a href='https://www.orsj.or.jp/nc/2021s/'>日本OR学会2021年春季研究発表会</a>，東京工業大学（オンライン），2021年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel法，<a href='http://www.orsj.or.jp/~nc2018s/'>日本OR学会2018年春季研究発表会</a>，東海大学，2018年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel型ペナルティ法，<a href='https://www.orsj.or.jp/~nc2017s/'>日本OR学会2017年春季研究発表会</a>，沖縄県市町村自治会館，2017年3月．</li>
						<li><u>堀篤史</u>，福島雅夫，マルチリーダー・フォロワーゲームに対するGauss–Seidel型ペナルティ法，<a href='http://www.orsj.or.jp/chubu/?p=2708'>第44回日本OR学会中部支部研究発表会</a>，ウインクあいち愛知県立大学サテライトキャンパス，2017年3月．（<b>学生論文賞優秀賞受賞</b>）</li>
						<li><u>Hori, A.</u> and Fukushima, M., Gauss–Seidel method for multi-leader–follower games.<a href='http://www.iccopt2016.tokyo/'><i>The Fifth International Conference on Continuous Optimization (ICCOPT 2016)</i></a>, National Graduate Institute for Policy Studies, Tokyo, Japan, August, 2016. (poster)</li>
					</ol>
				</li>
				<li><b>表彰歴</b>:
					<ol>
						<li>日本オペレーションズ・リサーチ学会関西支部 SSOR2021 優秀発表賞 受賞</li>
						<li><a href='http://www.orsj.or.jp/whatisor/award6.html'>2018年度日本オペレーションズ・リサーチ学会学生論文賞 受賞</a></li>
						<li><a href='http://www.orsj.or.jp/chubu/?p=2708'>第44回日本OR学会中部支部研究発表会 学生論文賞優秀賞 受賞</a></li>
					</ol>
				</li>
			</ul>
		  </Layout>
	);
};
