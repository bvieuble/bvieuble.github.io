---
layout: page
title: Scatter plot
description: A scatter plot displaying the error after convergence of four algorithms on various SuiteSparse problems. 
img: assets/img/texfantasy/tex5-front.png
importance: 1
category: plots
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex5.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/scatter_plots/fig3
%%% Appears in my article ``Combining sparse approximate factorizations with 
%%% mixed-precision iterative refinement''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}
\usepackage{pgfplots, pgfplotstable}
\usepackage{makecell}
\pgfplotsset{compat=newest}

\input{color_theme.tex}

\pgfplotstableread[col sep=comma]{data.csv}{\data}

\begin{document}

\begin{tikzpicture}
    \begin{axis}
    [
        legend style={at={(0.4,0.95)},font=\small},
        grid = major,
        width=1.\linewidth,
        height=0.6\linewidth,
        grid style={dashed, gray!50},
        extra x ticks={2E+7,1E+10},
        extra x tick labels={\thead{\small fwd cond\\\small LU-IR3},
                             \thead{\small fwd cond\\\small LU-GMRES-IR5}},
        extra x tick style={grid=none,tick pos=right,ticklabel pos=right,
                            tick label style={yshift=-7},font=\tiny},
        xmin= 8e0, xmax= 2e14, xmode = log,
        ymin= 1e-17, ymax= 1e0, ymode=log,
        xtick={1e2,1e4,1e6,1e8,1e10,1e12},
        xticklabels={1e2,1e4,1e6,1e8,1e10,1e12},
        xlabel=K(A),
        x label style={at={(axis description cs:1.0,0)},rotate=0},
        ytick={1e-17,1e-9,1e-1},
        yticklabels={1e-17,1e-9,1e-1},
        y label style={at={(axis description cs:0,1.05)},rotate=-90},
        ylabel={fwd},
        yticklabel style={rotate=0},
        tick align=outside,
        every tick label/.append style={font=\normalsize},
        enlargelimits=false
    ]

        \addplot[mygreen-mild,only marks,mark size=3pt] 
                 table[x=ka,y=fwddlu] {\data};

        \addplot[scatter,mypurple-mild,only marks,mark=*,mark size=3pt,
                 nodes near coords,
                 point meta=explicit symbolic,
                 visualization depends on={\thisrow{angle} \as \angle},
                 visualization depends on={\thisrow{xshift} \as \xshift},
                 visualization depends on={\thisrow{yshift} \as \yshift},
                 every node near coord/.append style={color=black,
                                                      rotate=\angle,
                                                      xshift=\xshift,
                                                      yshift=\yshift,
                                                      font=\normalsize}] 
                  table[x=ka,y=fwdddd,meta=id] {\data};

        \addplot[myblue-mild,only marks,mark size=3pt]
                 table[x=ka,y=fwdsdq] {\data};

        \addplot[myred-mild,only marks,mark size=3pt] 
                 table[x=ka,y=fwdsdqdd] {\data};

        \draw[dashed,thick] (axis cs:2E+7,0) -- (axis cs:2E+7,1E-18);
        \draw[dashed,thick] (axis cs:1E+10,0) -- (axis cs:1E+10,1E-18);

        \legend{DMUMPS,
                {LU, $u_f=u_r$=\textsc{d}},
                {LU, $u_f$=\textsc{s}, $u_r$=\textsc{q}},
                {GMRES, $u_f$=\textsc{s}, $u_r$=\textsc{q}}}
    \end{axis}
\end{tikzpicture}

\end{document}
{% endhighlight %}
