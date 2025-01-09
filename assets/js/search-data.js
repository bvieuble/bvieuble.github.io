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
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
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
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
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
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "texfantasy-plot-gif",
          title: 'plot (gif)',
          description: "An animated plot representing the percentage of convergence according to the condition number for different algorithms.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/10_tex/";
            },},{id: "texfantasy-performance-profile",
          title: 'Performance profile',
          description: "A performance profile plot comparing the number of iterations of seven algorithms.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/1_tex/";
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
            },},{id: "texfantasy-scatter-plot",
          title: 'Scatter plot',
          description: "A scatter plot displaying the error after convergence of six algorithms on various SuiteSparse problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/4_tex/";
            },},{id: "texfantasy-scatter-plot",
          title: 'Scatter plot',
          description: "A scatter plot displaying the error after convergence of four algorithms on various SuiteSparse problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/5_tex/";
            },},{id: "texfantasy-bar-plot",
          title: 'bar plot',
          description: "A bar plot representing the execution time of five algorithms over different problems.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/6_tex/";
            },},{id: "texfantasy-matrix-index",
          title: 'matrix index',
          description: "A table containing a list of matrices and their properties.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/7_tex/";
            },},{id: "texfantasy-consumption-samples",
          title: 'consumption samples',
          description: "A table containing execution times and memory consumptions associated to different matrices, alorithms, and parameters.",
          section: "Texfantasy",handler: () => {
              window.location.href = "/texfantasy/8_tex/";
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
