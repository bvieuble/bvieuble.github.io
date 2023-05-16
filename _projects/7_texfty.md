---
layout: page
title: matrix index table
description: A table containing a list of matrices and their properties.
img: assets/img/tab2.png
importance: 1
category: tables
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tab2.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}

% Full code on github: https://github.com/bvieuble/TeXFantasy
% Appears my the article ``Combining sparse approximate factorizations with mixed-precision iterative refinement''.
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
{% endhighlight %}
