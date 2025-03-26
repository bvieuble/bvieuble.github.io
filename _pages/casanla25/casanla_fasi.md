<h3 id="fasi" style="text-align: right;font-size:26px !important;">Analysis of Floating-Point Matrix Products Computed via Low-Precision Integer Arithmetic</h3>
{:data-toc-text="Massimiliano Fasi"}

Matrix multiplication is arguably a fundamental kernel in scientific computing,
and efficient implementations underpin the performance of many numerical 
algorithms for linear algebra. The Ozaki scheme is a method that computes 
matrix–matrix products by recasting them as sequences of error-free 
transformations. First developed in 2008 in the context of summation, this 
technique has recently seen a resurgence of interest, because it is
particularly well suited to the mixed-precision matrix-multiplication units 
available on modern hardware accelerators (such as GPUs, TPUs, or NPUs). The
latest generations of these accelerators are particularly efficient at
computing products between matrices of low-precision integers. In scientific 
application, integers are typically not sufficient, but, in the last couple of
years, variants of the Ozaki scheme that rewrite *floating-point* matrix 
multiplications in terms of *integer* matrix products have been proposed. We
analyse the error incurred by these integer variants of the Ozaki scheme, and 
we characterise cases in which these methods can fail.
