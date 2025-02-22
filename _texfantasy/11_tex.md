---
layout: page
title: Timeline
description: A timeline made in Tikz.
img: assets/img/texfantasy/tex9-front.png
importance: 1
category: illustrations 
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex9.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/illustrations/fig1
%%% Appears in my lecture ``Mixed precision iterative refinement'' (2023).

% Compiled with XeLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{tikz} 
\usetikzlibrary{calc,arrows.meta}

\input{color_theme.tex}

\begin{document}

\tikzstyle{descript} = [text=black,align=center, minimum height=1.8cm, 
                        align=center, outer sep=0pt,font=\footnotesize]
\tikzstyle{activity} = [align=center,outer sep=1pt]

\begin{tikzpicture}[very thick, black, x=0.7cm]\small

    %% Coordinates
    \coordinate (O) at (-1.5,0);
    \coordinate (P1) at (4,0);
    \coordinate (P2) at (10,0);
    \coordinate (P3) at (13,0);
    \coordinate (F) at (15,0);
    \coordinate (E1) at (-0.5,0);
    \coordinate (E2) at (2.7,0);
    \coordinate (E3) at (5.5,0);
    \coordinate (E4) at (11.2,0);
    \coordinate (E5) at (13.5,0);

    %% Filled regions
    \fill[color=myblue-light] rectangle ($(O)+(1,0)$) -- (P1) -- ($(P1)+(0,1)$)
    -- ($(O)+(1,1)$); 
    \fill[color=mypurple-light] rectangle (P1) -- (P2) -- ($(P2)+(0,1)$) -- 
        ($(P1)+(0,1)$); % Work
    \fill[color=myorange-light] rectangle (P2) -- (P3) -- ($(P3)+(0,1)$) -- 
        ($(P2)+(0,1)$); % Current work
    \shade[left color=myred-mild] ($(P3)$) rectangle ($(F)+(0,1)$);

    %% Text inside filled regions
    \draw ($(P1)+(-2.5,0.5)$) node[activity,myblue] {\textbf{Extra precision}};
    \draw ($(P2)+(-3,0.5)$) node[activity,mypurple] {\textbf{Fixed precision}};
    \draw ($(P3)+(-1.5,0.5)$)  node[activity,myorange] 
        {\textbf{Low precision}};

    %% Description
    \node[descript,fill=myblue-light!70,text=myblue,rounded corners] (D1) at 
        ($(P1)+(-3.5,-2.5)$) {
      \textbf{Better accuracy}\\
      \scriptsize \color{black}Extra precision \\[-4pt] \scriptsize 
        \color{black}for the computation \\[-4pt] \scriptsize \color{black}of 
        the residual.\\[-4pt]};

    \node[descript,fill=mypurple-light!70,text=mypurple,rounded corners] (D2) 
        at ($(P2)+(-5,-2.5)$) {
      \textbf{Recover stability}\\
      \scriptsize \color{black}Residual, correction \\[-4pt] \scriptsize 
      \color{black}equation, and update, \\[-4pt] \scriptsize \color{black}all 
      computed \\[-4pt] \scriptsize \color{black}in working precision.};

    \node[descript,fill=myorange-light!70,text=myorange,rounded corners] (D3) 
        at ($(P3)+(-3.5,-2.5)$) {
      \textbf{Get performance}\\
      \scriptsize \color{black}Solver run \\[-4pt] 
        \scriptsize \color{black}in low precision \\[-4pt] \scriptsize 
        \color{black}for the correction \\[-4pt] \scriptsize 
        \color{black}equation.};

    \node[descript,fill=myred-light!70,text=myred,rounded corners] (D4) at 
        ($(F)+(-1.5,-2.5)$) {
      \textbf{All in one}\\
      \scriptsize \color{black}Extra precision \\[-4pt] \scriptsize 
      \color{black}on the residual \\[-4pt] \scriptsize \color{black}and low on 
      the \\[-4pt] \scriptsize \color{black}solver.
        };
      
    %% Events
    \draw[<-,thick,color=black,dashed] ($(E1)+(0,0.1)$) -- ($(E1)+(0,1.5)$) 
    node [above=0pt,align=center,black] {\scriptsize \textbf{1948} \\ 
    \scriptsize First \\[-4pt]\scriptsize appearance.};
    \draw[<-,thick,color=black,dashed] ($(E2)+(0,0.1)$) -- ($(E2)+(0,1.5)$) 
    node [above=0pt,align=center,black] {\scriptsize \textbf{1963} \\ 
    \scriptsize First analysis. \\[-4pt]};
    \draw[<-,thick,color=black,dashed] ($(E3)+(0,0.1)$) -- ($(E3)+(0,1.5)$) 
    node [above=0pt,align=center,black] {\scriptsize \textbf{1977} \\ 
    \scriptsize Analysis in \\[-4pt] \scriptsize fixed precision.};
    \draw[<-,thick,color=black,dashed] ($(E4)+(0,0.1)$) -- ($(E4)+(0,1.5)$) 
    node [above=0pt,align=center,black] {\scriptsize \textbf{2006} \\ 
    \scriptsize Low precision \\[-4pt] \scriptsize factorization.};
    \draw[<-,thick,color=black,dashed] ($(E5)+(0,0.1)$) -- ($(E5)+(0,1.5)$) 
    node [above=0pt,align=center,black] {\scriptsize \textbf{2018} \\ 
    \scriptsize Generalized \\[-4pt] \scriptsize analysis.};

    %% Arrows
    \path[->,color=myblue] ($(P1)+(-3,-0.1)$) edge [out=-90, in=90]  
      ($(D1)+(0,1)$);
    \path[->,color=mypurple] ($(P2)+(-3,-0.1)$) edge [out=-90, in=90]  
      ($(D2)+(0,1)$);
    \path[->,color=myorange]($(P3)+(-2,-0.1)$)  edge [out=-70, in=90]  
      ($(D3)+(0,1)$);
    \path[->,color=myred]($(F)+(-1.5,-0.1)$)  edge [out=-140, in=90]  
      ($(D4)+(0,1)$);
    \draw[->] (O) -- (F);

    %% Ticks
    \foreach \x in {0,2,...,14}
    \draw(\x,3pt) -- (\x,-3pt);

    %% Labels
    \foreach \i \j in
    {0/1950,2/1960,4/1970,6/1980,8/1990,10/2000,12/2010,14/2020}{
      \draw (\i,0) node[below=3pt] {\j} ;
    }

\end{tikzpicture}

\end{document}
{% endhighlight %}
