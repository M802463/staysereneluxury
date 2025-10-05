document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });

  function navbar() {
    let navbar = document.getElementById("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (scrollTop > 155) {
        // yeh tabhi chalega jab 400px se upar scroll karoge
        if (scrollTop > lastScroll) {
          // scroll down
          navbar.classList.add("active");
        } else {
          // scroll up
          navbar.classList.remove("active");
        }
      } else {
        // 400px ke andar rahe to hamesha normal state
        navbar.classList.remove("active");
      }

      lastScroll = scrollTop;
    });

    let menuItem = document.querySelectorAll(".menu-list ul li");

    menuItem.forEach((item) => {
      let link = item.querySelector("a");
      let dropdown = item.querySelector("ul");

      if (dropdown) {
        gsap.set(dropdown, {
          height: 0,
          overflow: "hidden",
        });

        let flag = false;
        link.addEventListener("click", (e) => {
          e.preventDefault();
          item.classList.toggle("active");
          if (item.classList.contains("active")) {
            gsap.to(dropdown, {
              height: dropdown.scrollHeight,
              duration: 1,
              ease: "power2.out",
            });
          } else {
            gsap.to(dropdown, {
              height: 0,
              duration: 1,
              ease: "power2.inout",
            });
          }
        });
      } else {
      }
    });
  }

  function navMenu() {
    let menuOpen = document.querySelector(".menu");
    let menuClose = document.querySelector(".menu-close");
    // let sideMenu = document.getElementById("#side-bar");
    menuOpen.addEventListener("click", () => {
      gsap.to("#side-bar", {
        x: "0%",
        duration: 1,
        ease: "power4.out",
      });
      gsap.to(".side-nav", {
        x: "0%",
        delay: 0.1,
        duration: 1,
        ease: "power2.out",
      });
      gsap.set("body", {
        overflow: "hidden",
        delay: 0.9,
      });
    });

    menuClose.addEventListener("click", () => {
      gsap.to("#side-bar", {
        x: "-100%",
        duration: 0.8,
        ease: "power2.out",
        delay: 0.2,
      });
      gsap.to(".side-nav", {
        x: "-100%",
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.set("body", {
        delay: 1,
        overflow: "auto",
      });
    });
  }

  const timeElement = document.getElementById("time");

  function updateClock() {
    setInterval(updateClock, 1000);
    const now = new Date();

    const time = new Intl.DateTimeFormat("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Kolkata",
    }).format(now);

    timeElement.textContent = time;
  }

  updateClock();
  setInterval(updateClock, 1000);

  navMenu();
  navbar();

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3, // show 3 cards at a time
    spaceBetween: 30, // space between cards
    loop: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // mobile
      },
      768: {
        slidesPerView: 2, // tablet
      },
      1024: {
        slidesPerView: 3, // desktop
      },
    },
  });
});
