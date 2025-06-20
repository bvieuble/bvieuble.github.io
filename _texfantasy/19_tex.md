---
layout: page
title: Plots grid
description: A set of plots spread over a 2x4 grid comparing the norms of two quantities for different matrix/preconditioner properties. 
img: assets/img/texfantasy/tex19-front.png
importance: 1
category: lua
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="/assets/img/texfantasy/tex19.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

{% highlight latex linenos %}
%%% Full, compilable sources including data files are on Github: 
%%% https://github.com/bvieuble/TeXFantasy/tree/main/plots/fig3
%%% Appears in my article ``Mixed precision strategies for preconditioned 
%%% GMRES: a comprehensive analysis''.

% Compiled with LuaLaTeX
% TeX-command-extra-options: "-shell-escape"
\documentclass[convert={outext=.png},border=10pt]{standalone}
\usepackage{fontspec}
\setmainfont{Roboto}
\usepackage{pgfplots}
\pgfplotsset{compat=newest}
\usepackage{luacode}
\usepackage{xcolor}

\definecolor{fg}{RGB}{150,150,150} % Foreground color
\definecolor{purple}{RGB}{116,83,162}
\definecolor{green}{RGB}{100,180,28}

\begin{document}%
\begin{luacode*}
  myutils = require("utils")
  myconfig = require("config")
\end{luacode*}
%
\newcommand{\lefterrmatvec}
{ %
\begin{axis}[
    legend columns = -1,
    legend style={at={(\varlegendx\linewidth,\varlegendy\linewidth)}, 
                  fill=none, draw=fg, anchor=center, font=\footnotesize},
    legend entries={\color{fg}$\|A\widehat{v}_{j}\|_2$; \;, 
                    \color{fg}$\||A||\widehat{v}_{j}|\|_{2}$},
    legend to name = \varlegendname,
    axis x line=left,
    axis y line=middle,
    grid = major,
    scale only axis=true,
    width=\varxsize\linewidth,
    height=\varysize\linewidth,
    grid style={dashed, gray!30},
    ymode=log,
    ymin=1e-18,
    ymax=1e1,
    ytick={1e0, 1e-16},
    yticklabels/.expand once=\varyticklabel,
    y tick label style={font=\small,rotate=90},
    xtick=\empty,
    tick align=outside,
    enlargelimits=false,
    every axis title/.style={at={(0.5,1.2)},font=\normalsize},
    title={\small\vartitle},
    at={(\varcoordx,\varcoordy)},
  ]
  \addplot[\varlinea,color=\varcolora,thick]
    table[x expr=\coordindex,y=\varplota,col sep=comma] {\vardata};
  \addplot[\varlineb,color=\varcolorb,thick]
    table[x expr=\coordindex,y=\varplotb,col sep=comma] {\vardata};
\end{axis}%
}%
%
\begin{tikzpicture}[fg]%
  \begin{luacode*}
    grid = myutils.get_grid(#myconfig.plots, myconfig.gridcols,
                            myconfig.xsize, myconfig.ysize)

    for i = 1, #myconfig.plots
    do
      title    = myconfig.plots[i][2]
      plotdata = myconfig.plots[i][1]
      pathcsv  = "data.csv"
 
      tex.print("\\def\\varplota{"  .. plotdata                     .. "-a}")
      tex.print("\\def\\varplotb{"  .. plotdata                     .. "-b}")
      tex.print("\\def\\vardata{"   .. pathcsv                        .. "}")
      tex.print("\\def\\vartitle{"  .. title                          .. "}")
      tex.print("\\def\\varcoordx{" .. grid.coordx[i]                 .. "}")
      tex.print("\\def\\varcoordy{" .. grid.coordy[i]                 .. "}")
      tex.print("\\def\\varxsize{"  .. myconfig.xsize .. "}")
      tex.print("\\def\\varysize{"  .. myconfig.ysize .. "}")
      tex.print("\\def\\varxlabel{" .. grid.xlabel[i]                 .. "}")
      tex.print("\\def\\varylabel{" .. grid.ylabel[i]                 .. "}")
      tex.print("\\def\\varytick{"  .. grid.ytick[i]                  .. "}")
      tex.print("\\def\\varyticklabel{" .. grid.yticklabel[i]         .. "}")

      tex.print("\\def\\varlinea{"  .. myutils.plotstyle.lines[1]   .. "}")
      tex.print("\\def\\varlineb{"  .. myutils.plotstyle.lines[2]   .. "}")
      tex.print("\\def\\varcolora{" .. myutils.plotstyle.colors[1]  .. "}")
      tex.print("\\def\\varcolorb{" .. myutils.plotstyle.colors[2]  .. "}")
  
      if i == #myconfig.plots then 
        tex.print("\\def\\varlegendx{" .. grid.legendx .. "}")
        tex.print("\\def\\varlegendy{" .. grid.legendy .. "}")
        tex.print("\\def\\varlegendname{plotlegend}")
        tex.print("\\lefterrmatvec")
      else 
        tex.print("\\def\\varlegendname{}")
        tex.print("\\lefterrmatvec")
      end
    end

    tex.print("\\ref{plotlegend}")
  \end{luacode*}
\end{tikzpicture}%
\end{document}
{% endhighlight %}
