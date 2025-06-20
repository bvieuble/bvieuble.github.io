---
layout: page
title: Plots
description: Plots representing the convergence of the left-, right-, and flexible-preconditioned GMRES errors. 
img: assets/img/texfantasy/tex20-front.png
importance: 1
category: lua
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex20.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/plots/fig4
%%% Appears in my article ``Mixed precision strategies for preconditioned 
%%% GMRES: a comprehensive analysis''.

% Compiled with LuaLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{fontspec}
\setmainfont{Roboto}
\usepackage{pgfplots}
\pgfplotsset{compat=newest}
\usepackage{amsmath}
\usepackage{luacode}

\input{color_theme.tex}
\pgfplotsset{filter discard warning=false}

\begin{document}
%
\begin{luacode*}
  myutils = require("utils")
  myconfig = require("config")
\end{luacode*}
%
\newcommand{\cvgsparse}
{ %
  \begin{axis}[
      legend columns = -1,
      legend style={at={(\varlegendx\linewidth,\varlegendy\linewidth)}, 
                    anchor=center, font=\small,fill=none, draw=fg,
                    /tikz/every even column/.append style={column sep=0.25cm},
                    },
      legend to name = plotlegend,
      axis x line=left,
      axis y line=middle,
      grid = major,
      grid style={dashed},
      width=\varxsize\linewidth,
      height=\varysize\linewidth,
      scale only axis=true,
      xmin= 0,
      xmax=\varmaxit,
      x tick label style={font=\small},
      xlabel=\varxlabel,
      ymin= 1e-17,
      ymax= 1e2,
      ymode=log,
      ytick={1e0, 1e-8, 1e-16},
      y tick label style={font=\small,rotate=90},
      yticklabels/.expand once = \varyticklabel,
      y label style={at={(axis description cs:-0.15,1.1)},rotate=0,font=\small},
      xlabel=\textbf{\varxlabel},
      ylabel=\varylabel,
      title style={yshift=-.2cm},
      title = {\small\vartitle},
      at={(\varcoordx,\varcoordy)},
    ]%
    \varplots
  \end{axis}
}%
%
\newcommand{\varplotline}[3]
{ %
  \addplot[mark=none,#1,color=#2,thick, forget plot] table[x=it, y=#3, 
           col sep=comma] {\varpathcsv};
}%
%
\newcommand{\varplotmark}[3]
{ %
  \addplot[mark=#1,only marks,mark size=2.5pt,color=#2,thick, forget plot] 
    table[x=it, y=#3, col sep=comma] {\varpathcsv};
}%
%
\newcommand{\varplotlegend}[3]
{ %
  \addplot[mark=#1, #2, mark size=2.5pt, mark options=solid, 
           color=#3,thick] coordinates {(0.0, 1.0)};
}%
%
\begin{tikzpicture}[fg]
  \begin{luacode*} 
      grid = myutils.get_grid(myconfig.title, myconfig.xsize, myconfig.ysize)

      left_right_flex = {myconfig.left, myconfig.right, myconfig.flexible}

      for j = 1, #left_right_flex
      do
        kind = left_right_flex[j]

        pathcsv = "./data/" .. myconfig.matrix .. "/" .. kind.csv 
            
        line_plots = ""
        mark_plots = ""
        legend_plots = ""
        legend     = "\\legend{"

        for i = 1, #myconfig.plots
        do
            local line, mark, color = myutils.get_style()
            line_plots = line_plots .. 
                "\\varplotline{" .. line .. "}" ..
                "{" .. color .. "}" ..
                "{" .. myconfig.plots[i] .. "} "

            mark_plots = mark_plots .. 
                "\\varplotmark{" .. mark .. "}" ..
                "{" .. color .. "}" ..
                "{" .. myconfig.plots[i] .. "-rstrt" .. "} "

            legend_plots = legend_plots .. 
                "\\varplotlegend{" .. mark .. "}" ..
                "{" .. line .. "}" .. "{" .. color .. "} " 

            legend = legend .. "\\textsc{" .. myconfig.plots[i] ..
                "}" .. ", "
        end
        legend     = legend .. "}"

        if myconfig.header then
            tex.print("\\def\\vartitle{"   .. grid.title[j] .. "}")
        else
            tex.print("\\def\\vartitle{ {} }")
        end

        tex.print("\\def\\varxsize{"   .. myconfig.xsize .. "}")
        tex.print("\\def\\varysize{"   .. myconfig.ysize .. "}")
        tex.print("\\def\\varmaxit{"   .. myconfig.maxit .. "}")
        tex.print("\\def\\varcoordx{"  .. grid.coordx[j]            .. "}")
        tex.print("\\def\\varcoordy{"  .. grid.coordy[j]            .. "}")
        tex.print("\\def\\varytick{"   .. grid.ytick[j]             .. "}")
        tex.print("\\def\\varxlabel{"  .. grid.xlabel[j]            .. "}")
        tex.print("\\def\\varylabel{"  .. grid.ylabel[j]            .. "}")
        tex.print("\\def\\varyticklabel{" .. grid.yticklabel[j]     .. "}")
        tex.print("\\def\\varpathcsv{" .. pathcsv                   .. "}")
        tex.print("\\def\\varplots{ "  .. line_plots .. mark_plots .. 
                  legend_plots .. legend .." }")
        tex.print("\\cvgsparse")
      end

      if myconfig.header then
        tex.print("\\def\\varlegendx{" .. grid.legendx .. "}")
        tex.print("\\def\\varlegendy{" .. grid.legendy .. "}")
        tex.print("\\ref{plotlegend}")
      end
  \end{luacode*}
\end{tikzpicture}%
\end{document}
{% endhighlight %}
