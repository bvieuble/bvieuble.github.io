<h3 id="tisseur" style="text-align: left;font-size:26px !important;">Computing accurate eigenvalues using a mixed-precision Jacobi algorithm <div style="font-size:12px !important;">joint work with N. J. Higham, M. Webb, and Z. Zhou</div></h3>
{:data-toc-text="Françoise Tisseur"}

Efforts on developing mixed precision algorithms
in the numerical linear algebra and high performance computing
communities have mainly focussed on linear systems and least squares problems.
Eigenvalue problems are considerably more challenging to solve and have a larger
solution space that cannot be computed in a finite number of steps

In this talk we present a mixed-precision preconditioned Jacobi algorithm, which uses low
precision to compute the preconditioner, applies it in high precision
(amounting to two matrix-matrix multiplications)
and solves the eigenproblem using the
Jacobi algorithm in working precision. Our analysis yields meaningfully smaller
relative forward error bounds for the computed eigenvalues compared with those
of the standard Jacobi algorithm. We further prove that, after preconditioning,
if the off-diagonal entries of the preconditioned matrix are sufficiently small
relative to its smallest diagonal entry, the relative forward error bound is
independent of the condition number of the original matrix. We present two
constructions for the preconditioner that exploit low precision, along with
their error analyses. Our numerical experiments confirm our theoretical results. 
