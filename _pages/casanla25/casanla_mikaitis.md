<h3 id="mikaitis" style="text-align: left;font-size:26px !important;">Error Analysis of Matrix Multiplication with Narrow Range Floating-Point Arithmetic <div style="font-size:12px !important;">joint work with T. Mary</div></h3>
{:data-toc-text="Mantas Mikaitis"}

High-performance computing hardware now supports many different floating-point 
formats, from 64 bits to only 4 bits. While the effects of reducing precision 
in numerical linear algebra computations have been extensively studied, some of
these low precision formats also possess a very narrow range of representable 
values, meaning underflow and overflow are very likely. The goal of this 
article is to analyze the consequences of this narrow range on the accuracy of
matrix multiplication. We describe a simple scaling that can prevent overflow
while minimizing underflow. We carry out an error analysis to bound the 
underflow errors and show that they should remain dominated by the rounding 
errors in most practical scenarios. We also show that this conclusion remains 
true when multiword arithmetic is used. We perform extensive numerical 
experiments that confirm that the narrow range of low precision arithmetics 
should not significantly affect the accuracy of matrix multiplication—provided
a suitable scaling is used.

Link to the article: [Error analysis of matrix multiplication with narrow
range floating-point arithmetic](https://hal.science/hal-04671474v2/document).
