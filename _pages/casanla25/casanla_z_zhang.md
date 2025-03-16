<h3 id="zzhang" style="text-align: right;font-size:26px !important;">Solving 10,000-Dimensional Optimization Problems Using Inaccurate Function Values: An Old Algorithm</h3>
{:data-toc-text="Zaikun Zhang"}

We reintroduce a derivative-free subspace optimization framework 
originating from Chapter 5 of \[Z. Zhang, On Derivative-Free Optimization 
Methods, PhD thesis, Chinese Academy of Sciences, Beijing, 2012 (supervisor
Ya-xiang Yuan)\]. At each iteration, the framework defines a low-dimensional 
subspace based on an approximate gradient, and then solves a subproblem in this
subspace to generate a new iterate.  We sketch the global convergence and 
worst-case complexity analysis of the framework, elaborate on its 
implementation, and present some numerical results on problems with dimensions 
as high as 10,000.

The same framework was presented by Zhang during ICCOPT 2013 in Lisbon under 
the title "A Derivative-Free Optimization Algorithm with Low-Dimensional 
Subspace Techniques for Large-Scale Problems", although it remained nearly 
unknown to the community until very recently. An algorithm following this 
framework named NEWUOAs was implemented by Zhang in MATLAB in 2011 
([link to code](https://github.com/newuoas/newuoas)), ported to Modula-3 in 2016 by M. 
Nystroem, a Principal Engineer at the Intel Corporation, and made available in 
the open-source package CM3 
([link to package](https://github.com/modula3/cm3/blob/master/caltech-other/newuoa/src/NewUOAs.m3)). 
NEWUOAs has been used by Intel in the design of chips, including its flagship
product Atom P5900.

More information about the framework can be found in the paper \[Z. Zhang, 
Scalable Derivative-Free Optimization Algorithms With Low-Dimensional Subspace 
Techniques, arXiv:2501.04536, 2025].
