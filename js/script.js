document.addEventListener("DOMContentLoaded", () => {
  /* =========================================================
     MENU
  ========================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const open = mainNav.classList.toggle("open");

      menuToggle.setAttribute("aria-expanded", String(open));
      menuToggle.setAttribute(
        "aria-label",
        open ? "Fechar menu" : "Abrir menu"
      );

      document.body.classList.toggle("menu-open", open);
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");

        document.body.classList.remove("menu-open");
      });
    });
  }


  /* =========================================================
     REDUCE MOTION
  ========================================================= */

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;


  /* =========================================================
     GSAP
  ========================================================= */

  if (
    typeof gsap !== "undefined" &&
    typeof ScrollTrigger !== "undefined" &&
    !reduceMotion
  ) {
    gsap.registerPlugin(ScrollTrigger);


    /* =======================================================
       HERO
    ======================================================= */

    const heroTl = gsap.timeline({
      defaults: {
        ease: "power3.out",
      },
    });

    heroTl
      .to(".hero-line", {
        y: 0,
        opacity: 1,
        duration: 1.05,
        stagger: 0.12,
        delay: 0.18,
      })

      .from(
        ".hero-eyebrow, .hero-index",
        {
          y: 18,
          opacity: 0,
          duration: 0.65,
          stagger: 0.05,
        },
        "-=.55"
      )

      .from(
        ".hero-text, .hero-actions, .hero-note",
        {
          y: 18,
          opacity: 0,
          duration: 0.7,
          stagger: 0.08,
        },
        "-=.38"
      )

      .from(
        ".portrait-frame",
        {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.25,
        },
        "-=1.0"
      )

      .from(
        ".portrait-shadow",
        {
          opacity: 0,
          x: 35,
          duration: 0.8,
        },
        "-=.85"
      )

      .from(
        ".portrait-meta, .portrait-tag",
        {
          y: 14,
          opacity: 0,
          duration: 0.6,
          stagger: 0.08,
        },
        "-=.55"
      );


    /* =======================================================
       ELEMENTOS DE SEÇÃO
       
       IMPORTANTE:
       .service-item e .principle foram excluídos daqui
       porque possuem animações dedicadas em lote (stagger).
       Assim os elementos não recebem duas animações concorrentes.
    ======================================================= */

    gsap.utils.toArray(".reveal-up:not(.hero *)").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 28,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: "power3.out",

          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });


    gsap.utils.toArray(".reveal:not(.service-item):not(.principle)").forEach((el) => {
      gsap.fromTo(
        el,
        {
          y: 34,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.85,
          ease: "power3.out",

          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });


    /* =======================================================
       SERVICE CARDS
       
       Os cards possuem apenas UMA animação em grupo.
    ======================================================= */

    gsap.from(".service-item", {
      y: 20,
      autoAlpha: 0,
      duration: 0.75,
      stagger: 0.07,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".service-list",
        start: "top 82%",
        once: true,
      },
    });


    /* =======================================================
       PRINCÍPIOS (O JEITO DE CUIDAR)
       
       Animação única em cascata para todos os itens da seção.
    ======================================================= */

    gsap.from(".principle", {
      x: 25,
      autoAlpha: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".principles",
        start: "top 85%",
        once: true,
      },
    });


    /* =======================================================
       PARALLAX — FOTO PRINCIPAL
       
       Mantido exatamente como estava.
    ======================================================= */

    gsap.to(".portrait", {
      yPercent: 3,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });


    /* =======================================================
       PARALLAX — ARCO DO HERO
    ======================================================= */

    gsap.to(".hero-arch-a", {
      rotation: 12,
      scale: 1.04,
      ease: "none",

      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });


    /* =======================================================
       PARALLAX — ABOUT
    ======================================================= */

    gsap.to(".about-image-wrap img", {
      yPercent: -3,
      scale: 1.035,
      ease: "none",

      scrollTrigger: {
        trigger: ".about",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });


    /* =======================================================
       HEADER AO ROLAR
    ======================================================= */

    ScrollTrigger.create({
      start: "top -80",

      onEnter: () => {
        document.body.classList.add("scrolled");
      },

      onLeaveBack: () => {
        document.body.classList.remove("scrolled");
      },
    });

    /* =======================================================
       RELOAD & IMAGES REFRESH
       Recalcula todas as posições do ScrollTrigger assim
       que imagens e fontes terminarem de carregar.
    ======================================================= */
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
  }


  /* =========================================================
     FALLBACK
  ========================================================= */

  else {
    document
      .querySelectorAll(".reveal, .reveal-up, .hero-line, .principle, .service-item")
      .forEach((el) => {
        el.classList.add("is-visible");

        el.style.visibility = "visible";
        el.style.opacity = "1";
        el.style.transform = "none";
      });
  }


  /* =========================================================
     NAVEGAÇÃO INTERNA SUAVE
  ========================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((anchor) => {
      anchor.addEventListener("click", (event) => {
        const target = document.querySelector(
          anchor.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      });
    });


  /* =========================================================
     FAQ
  ========================================================= */

  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("toggle", () => {
      if (!item.open) return;

      faqItems.forEach((other) => {
        if (other !== item) {
          other.open = false;
        }
      });
    });
  });
});