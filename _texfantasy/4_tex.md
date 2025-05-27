---
layout: page
title: Scatter plots grid
description: A scatter plot displaying the error after convergence of six algorithms on various SuiteSparse problems. 
img: assets/img/texfantasy/tex4-front.png
importance: 1
category: plots
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex4.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/scatter_plots/fig2
%%% Appears in my thesis ``Mixed precision iterative refinement for the 
%%% solution of large sparse linear systems''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots,pgfplotstable}
\pgfplotsset{compat=newest}

\input{color_theme.tex}

\begin{document}
\pgfplotstableset{col sep=comma}

\begin{tikzpicture}
    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={,,},
        xlabel={},
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        ylabel=Forward error,
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title={LU},
        at={(0, 0)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=lu-h] {data.csv};
    \end{axis}

    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={,,},
        xlabel={},
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={,,},
        ylabel={},
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title=\textsc{hhs},
        at={(0.5\linewidth, 0)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=hdqhs] {data.csv};
    \end{axis}

    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={,,},
        xlabel={},
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        ylabel=Forward error,
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title=\textsc{hss},
        at={(0, -0.3\linewidth)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=hdqss] {data.csv};
    \end{axis}

    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={,,},
        xlabel={},
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={,,},
        ylabel={},
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title=\textsc{hsd},
        at={(0.5\linewidth, -0.3\linewidth)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=hdqsd] {data.csv};
    \end{axis}

    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={1e0, 1e4, 1e8, 1e12, 1e16},
        xlabel=K(A),
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        ylabel=Forward error,
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title=\textsc{hdd},
        at={(0, -0.6\linewidth)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=hdqdd] {data.csv};
    \end{axis}

    \begin{axis}
    [
        axis x line=left,
        axis y line=middle,
        width=0.5\linewidth,
        height=0.3\linewidth,
        grid = major,
        grid style={dashed, gray!50},
        xmin= 1, xmax= 1e20, xmode=log,
        xtick={1e0, 1e4, 1e8, 1e12, 1e16},
        xticklabels={1e0, 1e4, 1e8, 1e12, 1e16},
        xlabel=K(A),
        ymin= 0., ymax= 2., ymode=log,
        y label style={at={(axis description cs:-0.27,0.5)},rotate=90,
                       anchor=south},
        ytick={1e0, 1e-4, 1e-8, 1e-12, 1e-16},
        yticklabels={,,},
        ylabel={},
        tick align=outside,
        enlargelimits=false,
        colormap={whiteblue}{color={myblue} color=(myred)},
        title=\textsc{hdq}, 
        at={(0.5\linewidth, -0.6\linewidth)}
    ]

        \addplot[scatter,mark=*,solid,
                 every mark/.append style={solid, fill=myred, 
                                           fill opacity=0.2},
                 color=myred,only marks,very thick] 
             table[x=ka,y=hdqdq] {data.csv};
    \end{axis}
\end{tikzpicture}

\end{document}
{% endhighlight %}
