---
layout: page
title: Performance profile
description: A performance profile figure comparing the number of iterations of seven algorithms.
img: assets/img/fig1-front.png
importance: 1
category: figures
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/fig1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>


{% raw %}
```latex
% Full code on github: https://github.com/bvieuble/TeXFantasy
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
        x tick label style={/pgf/number format/fixed,
                            /pgf/number format/fixed zerofill,
                            /pgf/number format/precision=1},
        axis y line=middle,
        ymin= 0.,
        ymax= 1.,
        y label style={at={(axis description cs:-0.06,0.5)},rotate=90,anchor=south},
        ylabel=$\phi$,
        y tick label style={/pgf/number format/fixed,
                            /pgf/number format/fixed zerofill,
                            /pgf/number format/precision=1},
        ytick={0.2, 0.4, 0.6, 0.8, 1},
        yticklabels={0.2, 0.4, 0.6, 0.8, 1},
        grid = major,
        grid style={dashed, gray!30},
    ]

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=myorange, fill opacity=0.2},
                 color=myorange,
                 very thick
                 ] 
             table[x=val-7,y=perc-7] {\data};

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=mygreen, fill opacity=0.2},
                 color=mygreen,
                 very thick
                 ] 
             table[x=val-6,y=perc-6] {\data};

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=myyellow, fill opacity=0.2},
                 color=myyellow,
                 very thick
                 ] 
             table[x=val-5,y=perc-5] {\data};

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=myblue, fill opacity=0.2},
                 color=myblue,
                 very thick
                 ] 
             table[x=val-4,y=perc-4] {\data};

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=mypurple, fill opacity=0.2},
                 color=mypurple,
                 very thick,
                 ] 
             table[x=val-3,y=perc-3] {\data};

        \addplot[const plot mark mid,
                 solid,
                 every mark/.append style={solid, fill=myred, fill opacity=0.2},
                 color=myred,
                 very thick,
                 ] 
             table[x=val-2,y=perc-2] {\data};

        \addplot[const plot mark mid,
                 dashed,
                 every mark/.append style={solid, fill=myblue, fill opacity=0.2},
                 color=myblue,
                 very thick,
                 ] 
             table[x=val-1,y=perc-1] {\data};

        \legend{BDQ, BDD, BSD, BSS, BBD, BBS, LU: $u_f=$ B}
    \end{axis}
\end{tikzpicture}
```
{% endraw %}

