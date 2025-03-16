<h3 style="text-align: left;font-size:26px !important;">Exploiting low-precision arithmetic in eigensolvers</h3>
{:data-toc-text="Meiyue Shao"}

In recent years mixed-precision algorithms have received increasing attention 
in numerical linear algebra and high performance computing. Modern 
mixed-precision algorithms perform a significant amount of low-precision
arithmetic in order to speed up the computation, while still providing the 
desired solution in working precision. A number of existing works in the 
literature focus on mixed-precision linear solvers---much less is known about 
how to improve eigensolvers. In this talk we discuss several techniques that
can accelerate eigenvalue computations by exploiting low-precision arithmetic. 
These techniques lead to several mixed-precision symmetric eigensolvers, for
both dense and sparse eigenvalue problems. Our mixed-precision algorithms 
outperform existing fixed-precision algorithms without compromising the 
accuracy of the final solution.
