<h3 id="zou" style="text-align: right;font-size:26px !important;">Stability of modified Gram-Schmidt and its low-synchronization variants</h3>
{:data-toc-text="Qinmeng Zou"}

Modified Gram-Schmidt (MGS) is a traditional QR factorization process that are
widely used in solving linear systems and least squares problems. For example,
the generalized minimal residual method (GMRES) usually employs QR 
factorization to orthogonalize the basis of Krylov subspace. This talk 
discusses a class of low-synchronization MGS algorithms, denoted as MGS-LTS,
which can date back to Bjorck's work in 1967. We give a stability analysis of 
MGS-LTS, proving that the loss of orthogonality of its basic form as well as
the block and normalization lagging variants is proportional to the condition 
number. We also discuss the probabilistic tools and investigate the causes of 
instability of the Cholesky-based block variant. Finally, we show numerical
experiments for the mixed-precision low-synchronization GMRES algorithm with 
sparse approximate inverse preconditioning.
