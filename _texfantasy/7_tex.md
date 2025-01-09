---
layout: page
title: matrix index 
description: A table containing a list of matrices and their properties.
img: assets/img/texfantasy/tex18-front.png
importance: 1
category: tables
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex18.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/tables/tab2
%%% Appears in my article ``Combining sparse approximate factorizations with 
%%% mixed-precision iterative refinement''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots, pgfplotstable}
\usepackage{colortbl}
\usepackage{booktabs}
\usepackage{makecell}
\pgfplotsset{compat=newest}

\begin{document}
\pgfplotstableread[col sep=comma]{data.csv}{\data}

\pgfplotstabletypeset[col sep=comma,
                      string type,
                      font=\normalsize,
                      every head row/.style={before row={\toprule}, 
                                             after row={\midrule}},
                      every even row/.style={before row={\rowcolor{gray!30}}},
                      columns={id,name,n,nnz,arith,sym,mpi,ka,ffacto,fsolve},
                      columns/id/.style={column name=ID},
                      columns/name/.style={column name=Name,column type={r}},
                      columns/n/.style={column name=$n$,column type={r}},
                      columns/nnz/.style={column name=NNZ,column type={r}},
                      columns/arith/.style={column name=Arith.,
                                               column type={c}},
                      columns/sym/.style={column name=Sym.,
                                                column type={c}},
                      columns/mpi/.style={column name=MPI,
                                                column type={c}},
                      columns/ka/.style={column name=$\kappa(A)$,
                                                     column type={r}},
                      columns/ffacto/.style={column name=\thead{\normalsize 
                        Fact.\\{\scriptsize(flops)}},
                                             column type={r}},
                      columns/fsolve/.style={column name=\thead{\normalsize 
                        Slv.\\{\scriptsize(flops)}},
                                               column type={r}},
                      every last row/.style={after row=\bottomrule}
                      ]{\data}

\end{document}
{% endhighlight %}
