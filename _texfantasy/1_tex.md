---
layout: page
title: Performance profile
description: A performance profile plot comparing the number of iterations of seven algorithms. 
img: /assets/img/texfantasy/tex1-front.png
importance: 1
category: plots
---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/perf_profiles/fig1
%%% Appears in my article ``Five-Precision GMRES-based iterative refinement''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots, pgfplotstable}
\pgfplotsset{compat=newest}

\input{color_theme.tex}

\pgfplotstableread[col sep=comma]{data.csv}{\data}

\begin{document}
\begin{tikzpicture}
    \begin{axis}
    [
        legend style={at={(0.95,0.53)}, font=\scriptsize},
        width=1.\linewidth,
        height=0.6\linewidth,
        axis x line=left,
        xmin=1,
        xmax=20,
        xmode=log,
        xlabel=$\alpha$,
        xtick={2, 4, 6, 8, 10},
        xticklabels={2, 4, 6, 8, 10},
        axis y line=middle,
        ymin= 0.,
        ymax= 1.,
        y label style={at={(axis description cs:-0.06,0.5)},rotate=90,
                           anchor=south},
        ylabel=$\phi$,
        ytick={0.2, 0.4, 0.6, 0.8, 1},
        yticklabels={0.2, 0.4, 0.6, 0.8, 1},
        grid = major,
        grid style={dashed, mygray},
    ]

        \addplot[const plot mark mid,solid,color=myorange,very thick] 
             table[x=val-7,y=perc-7] {\data};

        \addplot[const plot mark mid,solid,color=mygreen,very thick] 
             table[x=val-6,y=perc-6] {\data};

        \addplot[const plot mark mid,solid,color=myyellow,very thick] 
             table[x=val-5,y=perc-5] {\data};

        \addplot[const plot mark mid,solid,color=myblue,very thick] 
             table[x=val-4,y=perc-4] {\data};

        \addplot[const plot mark mid,solid,color=mypurple,very thick] 
             table[x=val-3,y=perc-3] {\data};

        \addplot[const plot mark mid,solid,color=myred,very thick] 
             table[x=val-2,y=perc-2] {\data};

        \addplot[const plot mark mid,dashed,color=myblue,very thick] 
             table[x=val-1,y=perc-1] {\data};

        \legend{BDQ, BDD, BSD, BSS, BBD, BBS, LU: $u_f=$ B}
    \end{axis}
\end{tikzpicture}
\end{document}
{% endhighlight %}
