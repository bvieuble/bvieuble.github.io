<h3 id="giraud" style="text-align: right;font-size:26px !important;">A journey through some numerical linear algebra algorithms with variable accuracy <div style="font-size:12px !important;">joint work with E. Agullo, O. Coulaud, M. Iannacito. M. Issa, G. Marait, M. Rozloznik</div></h3>
{:data-toc-text="Luc Giraud"}

In this talk, we will explore the numerical behavior of widely used numerical 
linear algebra methods when the errors introduced by the underlying hardware 
and working arithmetic are decoupled from those associated with the data 
representation of mathematical objects—primarily matrices and vectors—computed 
by the algorithms, a concept we refer to as variable accuracy.

We will present experimental results in fundamental contexts, including basis 
orthogonalization using Modified Gram-Schmidt variants, the solution of linear
systems with GMRES, and eigenproblem solutions via the FEAST method.

Additionally, we will discuss the numerical quality of the computed results 
under variable accuracy and draw connections with well-established results in
finite precision arithmetic.

Finally, we will showcase applications in low-rank tensor computations using 
the Tensor Train format, along with ongoing perturbation analysis to justify 
the observed experimental behavior.

<LeftMouse>
