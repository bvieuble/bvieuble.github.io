<h3 style="text-align: right;font-size:26px !important;">Learning-based Multilevel Solvers for Large-Scale Linear Systems</h3>
{:data-toc-text="Chensong Zhang"}

This talk presents our efforts on developing learning-based solvers for 
large-scale linear systems arising from discretized PDEs. Our approach bridges 
traditional multilevel solvers with machine learning, automating solver design
to enhance efficiency and scalability. The method generalizes across grid
sizes, coefficients, and right-hand-side terms, enabling offline training and 
efficient generalization, with convolutional neural networks (CNNs) serving as
the basic computational kernels. It utilizes multilevel hierarchy for rapid 
convergence and cross-level weight sharing to adapt flexibly to varying grid 
sizes. The proposed solver achieves speedup over classical geometric multigrid 
methods for convection-diffusion PDEs in preliminary numerical experiments. We 
further extend this framework by introducing a Fourier neural network (FNN) to
accelerate source influence propagation in Helmholtz equations within 
heterogeneous media. Supervised experiments demonstrate superior accuracy and
efficiency compared to other neural operators, while unsupervised scalability
tests reveal significant speedups over other AI solvers, achieving near-optimal
convergence for wave numbers up to $$k \approx 2000$$. Ablation studies 
validate the effectiveness of the multigrid hierarchy and the novel FNN 
architecture.
