---
layout: page
title: Floating-point
description: An illustration of the different low precision floating point arithmetics available in hardware.
img: assets/img/texfantasy/tex12-front.png
importance: 1
category: illustrations 
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex12.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/illustrations/fig5
%%% Appears in my thesis ``Mixed precision iterative refinement for the 
%%% solution of large sparse linear systems''.

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz}

\input{color_theme.tex}

\begin{document}

\begin{tikzpicture}[scale=0.3]
    \begin{scope}[shift={(0,0)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (9,2);
        \fill[myred-light] (9,0) rectangle (32,2);
        \draw[thin] (0,0) grid[ystep=2] (32,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (8.95,2.6) -- (8.95,2.1); 
        \draw[thin] (9.05,2.1) -- (9.05,2.6) -- (32,2.6) -- (32,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (5,3.9){exponent \\ (8 bits)}; 
        \node[align=center] at (20.5,3.9){signif. \\ (23 bits)}; 
        \normalsize
        \node at (16,-1){fp32}; 
        \footnotesize
        \node at (16,-2.5){Range $10^{\pm 38}$, $u=6\times10^{-8}$};
    \end{scope}

    \begin{scope}[shift={(-5,-10)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (6,2);
        \fill[myred-light] (6,0) rectangle (16,2);
        \draw[thin] (0,0) grid[ystep=2] (16,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (5.95,2.6) -- (5.95,2.1); 
        \draw[thin] (6.05,2.1) -- (6.05,2.6) -- (16,2.6) -- (16,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (3.5,3.9){exponent \\ (5 bits)}; 
        \node[align=center] at (11,3.9){signif. \\ (10 bits)}; 
        \normalsize
        \node at (8,-1){fp16}; 
        \footnotesize
        \node at (8,-2.5){Range $10^{\pm 5}$, $u=5\times10^{-4}$};
    \end{scope}

    \begin{scope}[shift={(20,-10)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (9,2);
        \fill[myred-light] (9,0) rectangle (16,2);
        \draw[thin] (0,0) grid[ystep=2] (16,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (8.95,2.6) -- (8.95,2.1); 
        \draw[thin] (9.05,2.1) -- (9.05,2.6) -- (16,2.6) -- (16,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (5,3.9){exponent \\ (8 bits)}; 
        \node[align=center] at (12.5,3.9){signif. \\ (7 bits)}; 
        \normalsize
        \node at (8,-1){bfloat16}; 
        \footnotesize
        \node at (8,-2.5){Range $10^{\pm 38}$, $u=4\times10^{-3}$};
    \end{scope}

    \begin{scope}[shift={(-7,-20)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (9,2);
        \fill[myred-light] (9,0) rectangle (19,2);
        \draw[thin] (0,0) grid[ystep=2] (19,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (8.95,2.6) -- (8.95,2.1); 
        \draw[thin] (9.05,2.1) -- (9.05,2.6) -- (19,2.6) -- (19,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (5,3.9){exponent \\ (8 bits)}; 
        \node[align=center] at (14,3.9){signif. \\ (10 bits)}; 
        \normalsize
        \node at (9.5,-1){tfloat32}; 
        \footnotesize
        \node at (9.5,-2.5){Range $10^{\pm 38}$, $u=5\times10^{-4}$};
    \end{scope}

    \begin{scope}[shift={(17,-20)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (5,2);
        \fill[myred-light] (5,0) rectangle (8,2);
        \draw[thin] (0,0) grid[ystep=2] (8,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (4.95,2.6) -- (4.95,2.1); 
        \draw[thin] (5.05,2.1) -- (5.05,2.6) -- (8,2.6) -- (8,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (3,3.9){exponent \\ (4 bits)}; 
        \node[align=center] at (6.5,3.9){signif. \\ (3 bits)}; 
        \normalsize
        \node at (4,-1){fp8 (E4M3)}; 
        \footnotesize
        \node at (4,-2.5){Range $10^{\pm 2}$, $u=6\times10^{-2}$};
    \end{scope}

    \begin{scope}[shift={(30,-20)}]
        \fill[myblue-light] (0,0) rectangle (1,2);
        \fill[mygreen-light] (1,0) rectangle (6,2);
        \fill[myred-light] (6,0) rectangle (8,2);
        \draw[thin] (0,0) grid[ystep=2] (8,2);
        \draw[thin] (0.5,2.1) -- (0.5,2.6); 
        \draw[thin] (1,2.1) -- (1,2.6) -- (5.95,2.6) -- (5.95,2.1); 
        \draw[thin] (6.05,2.1) -- (6.05,2.6) -- (8,2.6) -- (8,2.1); 
        \footnotesize
        \node at (0.5,3.25){sign}; 
        \node[align=center] at (3,3.9){exponent \\ (5 bits)}; 
        \node[align=center] at (6.5,3.9){signif. \\ (2 bits)}; 
        \normalsize
        \node at (4,-1){fp8 (E5M2)}; 
        \footnotesize
        \node at (4,-2.5){Range $10^{\pm 5}$, $u=1\times10^{-1}$};
    \end{scope}
\end{tikzpicture}

\end{document}
{% endhighlight %}
