---
layout: page
title: consumption
description: An illustration of the memory consumption of iterative refinement.
img: assets/img/texfantasy/tex11-front.png
importance: 1
category: illustrations 
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex11.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/illustrations/fig4
%%% Appears in my thesis ``Mixed precision iterative refinement for the 
%%% solution of large sparse linear systems''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usetikzlibrary{positioning,patterns,patterns.meta}

\input{color_theme.tex}

\begin{document}

\tikzdeclarepattern{
  name=hatch,
  parameters={\hatchsize,\hatchangle,\hatchlinewidth},
  bounding box={(-.1pt,-.1pt) and (\hatchsize+.1pt,\hatchsize+.1pt)},
  tile size={(\hatchsize,\hatchsize)},
  tile transformation={rotate=\hatchangle},
  defaults={
    hatch size/.store in=\hatchsize,hatch size=5pt,
    hatch angle/.store in=\hatchangle,hatch angle=0,
    hatch linewidth/.store in=\hatchlinewidth,hatch linewidth=.4pt,
  },
  code={
      \draw[line width=\hatchlinewidth] (0,0) -- (\hatchsize,\hatchsize);
  }
}

\begin{tikzpicture}
    \node[] (step1) at (-0.5,0.25) {1 :};
    \node[] (step2) at (-0.5,-0.75) {2 :};

    \node[draw,fill=myred-light,anchor=south,thick] (ufcol) at (3,1) {};
    \node[left = 0.2cm of ufcol] {$\mbox{LU}_f$};
    \node[draw,pattern={hatch[hatch size=4pt, hatch linewidth=0.75pt, 
        hatch angle=10]},pattern color=myblue2,anchor=south,thick] (upcol) at 
        (6,1) {};
    \node[left = 0.2cm of upcol] {$\mbox{LU}_p$};
    \node[draw,fill=myblue-light,anchor=south,thick] (activecol) at (9,1) {};
    \node[left = 0.2cm of activecol] {Active};

    \draw[draw=none,thick,fill=myred-light] (0,0) rectangle ++(5,0.5);
    \draw[draw=none,thick,fill=myblue-light] (5,0) rectangle ++(4,0.5);
    \draw[draw=none,thick,fill=white,opacity=0.99,pattern={hatch[hatch 
        size=10pt, hatch linewidth=0.75pt, hatch angle=10]},pattern 
        color=myblue2] (0,0) rectangle ++(10,0.5);
    \draw[draw=none,thick] (10,0) rectangle ++(2,0.5);
    \draw[draw=black,thick,fill=none] (0,0) rectangle ++(12,0.5);


    \draw[draw=none,thick,fill=myred-light] (0,-1) rectangle ++(4,0.5);
    \draw[draw=none,thick,fill=myblue-light] (4,-1) rectangle ++(6,0.5);
    \draw[draw=none,pattern={hatch[hatch size=10pt, hatch linewidth=0.75pt, 
        hatch angle=10]},pattern color=myblue2] (0,-1) rectangle ++(8,0.5);
    \draw[draw=none,thick] (10,-1) rectangle ++(2,0.5);
    \draw[thick,fill=none,draw=black] (0,-1) rectangle ++(12,0.5);
\end{tikzpicture}

\end{document}
{% endhighlight %}
