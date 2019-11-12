---
title: "線形相補性問題に対する数値解法"
date: 2019-10-19T13:41:33+09:00
author: "a24"
categories: ["optimization", "complementarity problem", "equilibrium model" ]
description: ""
image: ""
tags: ["optimization", "complementarity problem"]
draft: true
---

# はじめに
本記事では，線形相補性問題（Linear Complementarity Problem: LCP）と呼ばれる均衡問題のクラスの問題について深掘りしていく．

取り扱う線形相補性問題$\mathrm{LCP}(M,q)$は以下のように定義される．

$$
0\leq Mx+q \perp x\geq 0
$$

<!--more-->

ここで，$M\in\mathrm{R}^{n\times n}$，$q\in\mathrm{R}^n$とする．記号$\perp$は直交する意味で$0\leq a \perp b\geq 0\Leftrightarrow a\geq 0,\ b\geq 0,\ a^\top b =0\Leftrightarrow a_i\geq 0,\ b_i\geq 0,\ a_ib_i=0\ (i=1,...,n)$となる．

均衡問題にはLCP以外にもそれを包括する非線形相補性問題（Nonlinear Complementarity Problem: NCP）やそれをさらに包括する変分不等式問題（Variational Inequality: VI）があるが，それらとの関係性は[Qiitaの記事](https://qiita.com/keith_campbell/items/bc2ea5118a3211af6a14)を参考

話を戻すと，LCPが現れる最も身近な例としては二次計画問題

<div>
$$
\begin{align}
\begin{array}{cl}
\mbox{minimize} & x^\top M x + q^\top x + l\\
\mbox{subject to} & x\geq 0
\end{array}
\end{align}
$$
</div>

に対するKarush-Kuhn-Tucker条件，すなわち最適性の必要条件である．

