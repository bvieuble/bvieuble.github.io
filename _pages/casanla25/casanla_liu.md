<h3 id="liu" style="text-align: left;font-size:26px !important;">Block-Wise Mixed Precision Sparse Solvers</h3>
{:data-toc-text="Weifeng Liu"}

Sparse direct and iterative solvers play a crucial role in scientific computing
and engineering applications. Mixed precision computing, which integrates 
double, single, and half precision arithmetic, provides an effective approach 
to reducing computational costs while hopefully preserving solution accuracy. 
This talk will present our two recent advancements in mixed precision-enhanced 
open-source solvers: the sparse direct solver PanguLU (Fu et al., SC '23) and 
the sparse iterative solver Mille-feuille (Yang et al., SC '24). Both solvers 
employ block-wise mixed precision strategies on GPUs, and exhibit obvious 
performance improvements over their original FP64-precision counterparts.
