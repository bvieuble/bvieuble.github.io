// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications in scientific journals, reports, and thesis.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-texfantasy",
          title: "TexFantasy",
          description: "Gallery of LaTeX figures and tables.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/texfantasy/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "A long-format academic resume is made available in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-cas-anla",
          title: "CAS-ANLA",
          description: "The Chinese Academy of Sciences Workshop on Approximate computing in Numerical Linear Algebra (2025 Edition).",
          section: "Navigation",
          handler: () => {
            window.location.href = "/casanla/";
          },
        },{id: "post-latex-tuto-heatmaps-grid-with-lua",
      
        title: "LaTeX tuto - Heatmaps grid with Lua",
      
      description: "Learn to draw a grid of heatmaps using PGFPlots and Lua.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/tuto-heatmaps/";
        
      },
    },{id: "post-academic-visit-in-china-todo-list",
      
        title: "Academic visit in China (TODO list)",
      
      description: "Everything you need to know about preparing your short academic visit in China. Summary in a form of a TODO list.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/blog/academic_visit_in_china_todo.pdf";
        
      },
    },{id: "post-academic-visit-in-china-3-3",
      
        title: "Academic visit in China (3/3)",
      
      description: "Everything you need to know about preparing your short academic visit in China. Part 3/3 - Once arrived.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/chinavisit3/";
        
      },
    },{id: "post-academic-visit-in-china-2-3",
      
        title: "Academic visit in China (2/3)",
      
      description: "Everything you need to know about preparing your short academic visit in China. Part 2/3 - Internet, payments, and other essentials.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/chinavisit2/";
        
      },
    },{id: "post-academic-visit-in-china-1-3",
      
        title: "Academic visit in China (1/3)",
      
      description: "Everything you need to know about preparing your short academic visit in China. Part 1/3 - Introduction and visa.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/chinavisit1/";
        
      },
    },{id: "news-i-started-my-new-job-as-a-research-associate-at-the-university-of-manchester",
          title: 'I started my new job as a research associate at the University of...',
          description: "",
          section: "News",},{id: "news-i-defended-my-ph-d-thesis-entitled-mixed-precision-iterative-refinement-for-the-solution-of-large-sparse-linear-systems-in-front-of-my-jury-composed-of-sherry-li-julien-langou-erin-carson-emmanuel-agullo-marc-baboulin-and-serge-gratton-many-thanks-for-their-time-and-their-kind-evaluation-you-can-find-the-defense-slides-here-and-the-manuscript-here",
          title: 'I defended my Ph.D. thesis entitled “Mixed precision iterative refinement for the solution...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-give-a-lecture-to-postgrad-students-at-université-paris-saclay-you-can-find-the-slides-here-thank-you-oguz-for-the-invitation",
          title: 'I have been invited to give a lecture to postgrad students at Université...',
          description: "",
          section: "News",},{id: "news-the-siam-ima-student-chapter-conference-in-which-i-am-part-of-the-organizing-committee-has-been-held-successfully-ten-talks-from-students-and-invited-speakers-were-spread-on-one-full-day-you-can-find-the-full-program-on-the-website-here-congrats-to-the-siam-student-chapter-of-the-university-of-manchester-for-the-hard-work",
          title: 'The SIAM-IMA student chapter conference in which I am part of the organizing...',
          description: "",
          section: "News",},{id: "news-i-presented-my-recent-work-about-a-new-backward-error-analysis-for-gmres-at-focm-and-mumps-user-days-we-are-working-hard-to-deliver-a-preprint-on-the-topic-for-everybody-to-read-as-soon-as-possible",
          title: 'I presented my recent work about a new backward error analysis for GMRES...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-organize-with-xiaobo-liu-and-nick-higham-the-minisymposium-approximate-computing-in-numerical-linear-algebra-for-the-biennial-numerical-analysis-conference-in-glasgow-this-year-our-speakers-are-petr-vacek-charles-university-hei-yin-lam-epfl-silviu-ioan-filip-irisa-edouard-timsit-inria-paris-martina-iannacito-university-of-leuven-xiaobo-liu-university-of-manchester",
          title: 'I am delighted to organize with Xiaobo Liu and Nick Higham the minisymposium...',
          description: "",
          section: "News",},{id: "news-i-have-been-awarded-the-leopold-escande-prize-rewarding-the-best-15-phd-theses-of-toulouse-inp",
          title: 'I have been awarded the Leopold Escande Prize rewarding the best 15% PhD...',
          description: "",
          section: "News",},{id: "news-our-preprint-five-precision-gmres-based-iterative-refinement-has-been-accepted-for-publication-in-siam-journal-on-matrix-analysis-and-applications-simax",
          title: 'Our preprint “Five-Precision GMRES-based iterative refinement” has been accepted for publication in SIAM...',
          description: "",
          section: "News",},{id: "news-just-started-my-postdoc-at-the-chinese-academy-of-sciences-academy-of-mathematics-and-systems-science-under-the-supervision-of-professor-xin-liu",
          title: 'Just started my postdoc at the Chinese Academy of Sciences (Academy of Mathematics...',
          description: "",
          section: "News",},{id: "news-i-have-been-invited-to-give-a-lecture-to-postgrad-students-at-université-paris-saclay-the-topic-was-mixed-precision-iterative-refinement-you-can-find-the-slides-here-thank-you-oguz-for-the-invitation",
          title: 'I have been invited to give a lecture to postgrad students at Université...',
          description: "",
          section: "News",},{id: "news-new-preprint-it-s-called-a-modular-framework-for-the-backward-error-analysis-of-gmres-you-can-find-the-full-pdf-version-here",
          title: 'NEW PREPRINT!!! It’s called “A modular framework for the backward error analysis of...',
          description: "",
          section: "News",},{id: "news-i-am-delighted-to-organize-with-oleg-balabanov-the-minisymposium-approximate-computing-techniques-for-orthogonalization-processes-for-the-siam-la24-conference-in-paris-this-year-our-speakers-are-riley-murray-sandia-national-laboratories-martina-iannacito-università-di-bologna-oleg-balabanov-uc-berkeley-and-icsi-and-matthieu-robeyns-université-paris-saclay",
          title: 'I am delighted to organize with Oleg Balabanov the minisymposium “Approximate Computing Techniques...',
          description: "",
          section: "News",},{id: "news-many-thanks-to-eda-oktay-and-petr-vacek-for-the-invitation-to-talk-in-their-minisymposium-approximate-computing-techniques-in-numerical-linear-algebra-hosted-by-the-siam-la24-conference-my-talk-was-entitled-a-backward-error-analysis-framework-for-gmres-the-slides-are-available-here",
          title: 'Many thanks to Eda Oktay and Petr Vacek for the invitation to talk...',
          description: "",
          section: "News",},{id: "news-i-am-extremely-grateful-to-have-been-awarded-the-research-fund-for-international-young-scientists-of-nsfc-national-natural-science-foundation-of-china-for-my-project-entitled-resource-efficient-approximate-computing-gmres-for-the-solution-of-linear-systems-of-equations",
          title: 'I am extremely grateful to have been awarded the Research Fund for International...',
          description: "",
          section: "News",},{id: "news-we-are-looking-for-speakers-for-the-cas-anla-workshop-happening-at-the-academy-of-mathematics-and-systems-science-in-beijing-on-april-23rd-and-24th-2025-you-can-find-the-current-list-of-plenary-speakers-and-more-info-on-the-workshop-on-the-webpage",
          title: 'We are looking for speakers for the CAS-ANLA workshop happening at the Academy...',
          description: "",
          section: "News",},{id: "news-new-blog-post-it-s-called-academic-visit-in-china-and-it-is-a-three-parts-guide-to-help-academics-prepare-their-trip-to-china-for-workshops-conferences-and-other-various-academic-exchanges-you-can-check-out-the-guide-by-clicking-on-the-links-part-1-part-2-and-part-3",
          title: 'NEW BLOG POST!!! It’s called “Academic visit in China”, and it is a...',
          description: "",
          section: "News",},{id: "news-many-thanks-to-eda-oktay-and-kathryn-lund-for-the-invitation-to-talk-in-their-minisymposium-new-perspectives-on-classical-iterative-solvers-in-numerical-linear-algebra-hosted-by-the-gamm25-meeting-in-poznań-poland-my-talk-was-entitled-mixed-precision-preconditioning-strategies-for-gmres-the-slides-are-available-here",
          title: 'Many thanks to Eda Oktay and Kathryn Lund for the invitation to talk...',
          description: "",
          section: "News",},{id: "news-many-thanks-prof-qingna-li-for-the-invitation-to-present-my-work-at-beijing-institute-of-technology-bit-my-talk-was-entitled-backward-error-analysis-framework-for-gmres-and-application-to-mixed-precision-preconditioned-gmres",
          title: 'Many thanks Prof. Qingna Li for the invitation to present my work at...',
          description: "",
          section: "News",},{id: "news-extremely-happy-and-grateful-to-have-been-able-to-organize-and-host-the-cas-anla-workshop-with-my-supervisor-prof-xin-liu-the-workshop-featured-a-total-of-14-plenaries-on-the-topic-of-approximate-computing-numerical-linear-algebra-numerical-optimization-and-machine-learning-you-can-check-out-the-talks-on-the-website-of-the-event-we-hope-our-speakers-and-attendants-enjoyed-the-event-as-much-as-we-did",
          title: 'Extremely happy and grateful to have been able to organize and host the...',
          description: "",
          section: "News",},{id: "news-our-preprint-a-modular-framework-for-the-backward-error-analysis-of-gmres-has-been-accepted-for-publication-in-ima-journal-of-numerical-analysis-imajna",
          title: 'Our preprint “A modular framework for the backward error analysis of GMRES” has...',
          description: "",
          section: "News",},{id: "news-new-preprint-it-s-called-mixed-precision-strategies-for-preconditioned-gmres-a-comprehensive-analysis-you-can-find-the-full-pdf-version-here",
          title: 'NEW PREPRINT!!! It’s called “Mixed precision strategies for preconditioned GMRES: a comprehensive analysis”,...',
          description: "",
          section: "News",},{id: "news-new-latex-tuto-in-this-tuto-we-learn-how-to-draw-efficiently-a-grid-of-heatmaps-using-pgfplots-and-lua-you-can-check-it-out-here",
          title: 'NEW LaTeX tuto!!! In this tuto we learn how to draw efficiently a...',
          description: "",
          section: "News",},{id: "texfantasy-plot-gif",
          title: 'Plot (gif)',
          description: "An animated plot representing the percentage of convergence according to the condition number for different algorithms.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/10_tex/";
            },},{id: "texfantasy-timeline",
          title: 'Timeline',
          description: "A timeline made in Tikz.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/11_tex/";
            },},{id: "texfantasy-pivoting",
          title: 'Pivoting',
          description: "An illustration of partial and static pivoting.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/12_tex/";
            },},{id: "texfantasy-consumption",
          title: 'Consumption',
          description: "An illustration of the memory consumption of iterative refinement.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/13_tex/";
            },},{id: "texfantasy-floating-point",
          title: 'Floating-point',
          description: "An illustration of the different low precision floating point arithmetics available in hardware.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/14_tex/";
            },},{id: "texfantasy-bar-plot-gif",
          title: 'Bar plot (gif)',
          description: "A bar plot representing the execution time and the memory consumption for different threshold parameters.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/15_tex/";
            },},{id: "texfantasy-plots",
          title: 'Plots',
          description: "A plot representing the convergence of mixed precision restarted GMRES for different set of precisions and matrices.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/16_tex/";
            },},{id: "texfantasy-floating-point-copy",
          title: 'Floating-point (copy)',
          description: "An illustration explaining floating-point computation.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/17_tex/";
            },},{id: "texfantasy-heatmaps-grid-tuto",
          title: 'Heatmaps grid (tuto)',
          description: "Heatmap plots spread over a 3x3 grid and representing the number of iterations for different variants of an algorithm.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/18_tex/";
            },},{id: "texfantasy-plots-grid",
          title: 'Plots grid',
          description: "A set of plots spread over a 2x4 grid comparing the norms of two quantities for different matrix/preconditioner properties.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/19_tex/";
            },},{id: "texfantasy-performance-profile",
          title: 'Performance profile',
          description: "A performance profile plot comparing the number of iterations of seven algorithms.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/1_tex/";
            },},{id: "texfantasy-plots",
          title: 'Plots',
          description: "Plots representing the convergence of the left-, right-, and flexible-preconditioned GMRES errors.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/20_tex/";
            },},{id: "texfantasy-bar-plot",
          title: 'Bar plot',
          description: "A bar plot representing the memory consumption of three algorithms over different problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/2_tex/";
            },},{id: "texfantasy-scatter-plot",
          title: 'Scatter plot',
          description: "A scatter plot representing the condition numbers of SuiteSparse matrices after scaling.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/3_tex/";
            },},{id: "texfantasy-scatter-plots-grid",
          title: 'Scatter plots grid',
          description: "A scatter plot displaying the error after convergence of six algorithms on various SuiteSparse problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/4_tex/";
            },},{id: "texfantasy-scatter-plot",
          title: 'Scatter plot',
          description: "A scatter plot displaying the error after convergence of four algorithms on various SuiteSparse problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/5_tex/";
            },},{id: "texfantasy-bar-plot",
          title: 'Bar plot',
          description: "A bar plot representing the execution time of five algorithms over different problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/6_tex/";
            },},{id: "texfantasy-matrix-index",
          title: 'Matrix index',
          description: "A table containing a list of matrices and their properties.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/7_tex/";
            },},{id: "texfantasy-consumption-samples",
          title: 'Consumption samples',
          description: "A table containing execution times and memory consumptions associated to different matrices, alorithms, and parameters.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/8_tex/";
            },},{id: "texfantasy-function-gif",
          title: 'Function (gif)',
          description: "An animated plot representing the convergence of iterative refinement.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/9_tex/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%61%73%74%69%65%6E.%76%69%65%75%62%6C%65@%61%6D%73%73.%61%63.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bvieuble", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/bastien-vieublé-1ba678121", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-8429-7400", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pDyCuKIAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
