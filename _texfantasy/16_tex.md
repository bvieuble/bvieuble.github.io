---
layout: page
title: Plots
description: A plot representing the convergence of mixed precision restarted GMRES for different set of precisions and matrices.
img: assets/img/texfantasy/tex14-front.png
importance: 1
category: plots
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex14.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/plots/fig2
%%% Appears in my thesis ``Mixed precision iterative refinement for the 
%%% solution of large sparse linear systems''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots, pgfplotstable}
\pgfplotsset{compat=newest}

\input{color_theme.tex}

\pgfplotstableread[col sep=comma]{data/1138_bus.csv}{\dataa}
\pgfplotstableread[col sep=comma]{data/bcsstk19.csv}{\datab}
\pgfplotstableread[col sep=comma]{data/Vehicle_10NN.csv}{\datac}
\pgfplotstableread[col sep=comma]{data/pores_3.csv}{\datad}

\begin{document}

\begin{tikzpicture} 
    \begin{axis}
    [
        legend style={at={(.9,.85)}, font=\normalsize},
        axis x line=left,
        axis y line=middle,
        grid = major,
        grid style={dashed, gray!30},
        width=1.\linewidth,
        height=0.375\linewidth,
        xmin= 0,
        xtick={0, 20, 40, 60, 80, 100, 120},
        xticklabels={0, 20, 40, 60, 80, 100, 120},
        x tick label style={font=\normalsize},
        ymin= 1e-17,
        ymax= 5e1,
        ymode=log,
        y tick label style={rotate=0,font=\normalsize},
        ytick={1e0, 1e-8, 1e-16},
        yticklabels={1e0, 1e8, 1e16},
        y tick label style={font=\normalsize},
        y label style={at={(axis description cs:-0.1,0.5)},rotate=90,
                           anchor=south},
        ylabel=Forward error,
        title style={yshift=-.2cm},
        title={1138\_bus ($1138\times 1138$) - ILUT($10^{-6}$)},
        at={(0, 0)}
    ]

        \addplot[mark=none,color=myblue,thick]
            table[x=it,y=ddqsdd] 
            {\dataa};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myblue,forget 
                 plot, thick]
            table[x=it,y=ddqsdd-rstrt] 
            {\dataa};

        \addplot[mark=none,color=myred,thick]
            table[x=it,y=ddqssd] 
            {\dataa};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myred,forget plot,
                 thick]
            table[x=it,y=ddqssd-rstrt] 
            {\dataa};

        \addplot[mark=none,color=mygreen,thick]
            table[x=it,y=ddqsss] 
            {\dataa};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=mygreen,forget 
                 plot,thick]
            table[x=it,y=ddqsss-rstrt] 
            {\dataa};

        \legend{\textsc{sdd}, \textsc{ssd}, \textsc{sss}}
    \end{axis}

    \begin{axis}
    [
        legend style={at={(.9,.85)}, font=\normalsize},
        axis x line=left,
        axis y line=middle,
        grid = major,
        grid style={dashed, gray!30},
        width=1.\linewidth,
        height=0.375\linewidth,
        xmin= 0,
        xtick={0, 5, 10, 15, 20, 25, 30, 35, 40, 45},
        xticklabels={0, 5, 10, 15, 20, 25, 30, 35, 40, 45},
        x tick label style={font=\normalsize},
        ymin= 1e-17,
        ymax= 5e1,
        ymode=log,
        y tick label style={rotate=0,font=\normalsize},
        ytick={1e0, 1e-8, 1e-16},
        yticklabels={1e0, 1e8, 1e16},
        y tick label style={font=\normalsize},
        y label style={at={(axis description cs:-0.1,0.5)},rotate=90,
                       anchor=south},
        ylabel=Forward error,
        title style={yshift=-.2cm},
        title={bcsstk19 ($817\times 817$) - LU},
        at={(0, -70)}
    ]

        \addplot[mark=none,color=myblue,thick]
            table[x=it,y=ddqsdd] 
            {\datab};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myblue,forget 
                 plot,thick]
            table[x=it,y=ddqsdd-rstrt] 
            {\datab};

        \addplot[mark=none,color=myred,thick]
            table[x=it,y=ddqssd] 
            {\datab};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myred,forget plot,
                 thick]
            table[x=it,y=ddqssd-rstrt] 
            {\datab};

        \addplot[mark=none,color=mygreen,thick]
            table[x=it,y=ddqsss] 
            {\datab};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=mygreen,forget 
                 plot,thick]
            table[x=it,y=ddqsss-rstrt] 
            {\datab};

        \legend{\textsc{sdd}, \textsc{ssd}, \textsc{sss}}
    \end{axis}

    \begin{axis}
    [
        legend style={at={(.9,.85)}, font=\normalsize},
        axis x line=left,
        axis y line=middle,
        grid = major,
        grid style={dashed, gray!30},
        width=1.\linewidth,
        height=0.375\linewidth,
        xmin= 0,
        xtick={0,2,4,6,8,10,12,14,16,18,20},
        xticklabels={0,2,4,6,8,10,12,14,16,18,20},
        x tick label style={font=\normalsize},
        ymin= 1e-17,
        ymax= 5e1,
        ymode=log,
        y tick label style={rotate=0,font=\normalsize},
        ytick={1e0, 1e-8, 1e-16},
        yticklabels={1e0, 1e8, 1e16},
        y tick label style={font=\normalsize},
        y label style={at={(axis description cs:-0.1,0.5)},rotate=90,
                       anchor=south},
        ylabel=Forward error,
        title style={yshift=-.2cm},
        title={pores\_3 ($532\times 532$) - ILUT($10^{-6}$)},
        at={(0, -140)}
    ]

        \addplot[mark=none,color=myblue,thick]
            table[x=it,y=ddqhss] 
            {\datac};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myblue,forget 
                 plot,thick]
            table[x=it,y=ddqhss-rstrt] 
            {\datac};

        \addplot[mark=none,color=myred,thick]
            table[x=it,y=ddqhhs] 
            {\datac};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myred,forget plot,
                 thick]
            table[x=it,y=ddqhhs-rstrt] 
            {\datac};

        \addplot[mark=none,color=mygreen,thick]
            table[x=it,y=ddqhhh] 
            {\datac};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=mygreen,forget 
                 plot,thick]
            table[x=it,y=ddqhhh-rstrt] 
            {\datac};

        \legend{\textsc{hss}, \textsc{hhs}, \textsc{hhh}}
    \end{axis}

    \begin{axis}
    [
        legend style={at={(.9,.85)}, font=\normalsize},
        axis x line=left,
        axis y line=middle,
        grid = major,
        grid style={dashed, gray!30},
        width=1.\linewidth,
        height=0.375\linewidth,
        xmin= 0,
        xtick={0,10,20,30,40,50,60,70,80},
        xticklabels={0,10,20,30,40,50,60,70,80},
        xlabel=\#it,
        x tick label style={font=\normalsize},
        ymin= 1e-17,
        ymax= 5e1,
        ymode=log,
        y tick label style={rotate=0,font=\normalsize},
        ytick={1e0, 1e-8, 1e-16},
        yticklabels={1e0, 1e8, 1e16},
        y tick label style={font=\normalsize},
        y label style={at={(axis description cs:-0.1,0.5)},rotate=90,
                       anchor=south},
        ylabel=Forward error,
        title style={yshift=-.2cm},
        title={pores\_3 ($532\times 532$) - ILUT($10^{-6}$)},
        at={(0, -210)}
    ]

        \addplot[mark=none,color=myblue,thick]
            table[x=it,y=ddqhss] 
            {\datad};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myblue,forget 
                 plot,thick]
            table[x=it,y=ddqhss-rstrt] 
            {\datad};

        \addplot[mark=none,color=myred,thick]
            table[x=it,y=ddqhhs] 
            {\datad};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=myred,forget plot,
                 thick]
            table[x=it,y=ddqhhs-rstrt] 
            {\datad};

        \addplot[mark=none,color=mygreen,thick]
            table[x=it,y=ddqhhh] 
            {\datad};

        \addplot[mark=x,only marks,mark size=4pt,thick,color=mygreen,forget 
                 plot,thick]
            table[x=it,y=ddqhhh-rstrt] 
            {\datad};

        \legend{\textsc{hss}, \textsc{hhs}, \textsc{hhh}}
    \end{axis}
\end{tikzpicture}

\end{document}
{% endhighlight %}
