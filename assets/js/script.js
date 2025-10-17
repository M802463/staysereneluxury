document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  let smoother = ScrollSmoother.create({
    wrapper: "#smooth-wrapper",
    content: "#smooth-content",
    smooth: 2,
    effects: true,
  });
  
  // scroll to top

  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    const btn = document.getElementById("backToTopBtn");
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    if (winScroll > 20) {
      btn.style.display = "flex";
    } else {
      btn.style.display = "none";
    }

    if (height > 0) {
      btn.style.setProperty('--scroll-progress', scrolled + '%');
    }
  }

  // 4. Back to Top Functionality
  document.getElementById("backToTopBtn").onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For others
  }

  // light box
  $(document).ready(function () {
    $('.gallery > div.bg').each(function () {
      var link = $(this).css('background-image');
      link = link.replace(/(url\(|\)|")/g, ''); // Extract clean image URL

      // Create an <img> tag and insert it inside the <a> tag
      var imgTag = $('<img>').attr('src', link).attr('alt', 'Gallery Image');

      // Wrap <div class="bg"> with <a> and append <img> inside <a>
      $(this).wrap('<a href="" data-fancybox="gallery"></a>').after(imgTag);

      // Set <a> href to image link
      $(this).parent('a').attr('href', link);

      // Optionally, remove the background image to avoid duplication
      $(this).css('background-image', 'none');
    });

    $("[data-fancybox]").fancybox({
      loop: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close"
      ]
    });
  });


  // bg video
  const playButtonEl = document.getElementById('unique-play-button');
  const mediaContainerEl = document.getElementById('unique-media-container');
  const initialImageEl = document.getElementById('unique-initial-image');
  const overlayEl = document.getElementById('unique-content-overlay');

  const uniqueVideoId = '2JHmypmyICc';

  const uniqueVideoURL = `https://www.youtube.com/embed/${uniqueVideoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${uniqueVideoId}&rel=0`;

  const handleVideoPlay = () => {
    const videoIframe = document.createElement('iframe');
    videoIframe.setAttribute('src', uniqueVideoURL);
    videoIframe.setAttribute('frameborder', '0');
    videoIframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen');
    videoIframe.setAttribute('allowfullscreen', 'true');
    videoIframe.setAttribute('id', 'unique-video-iframe');

    videoIframe.style.display = 'block';

    initialImageEl.style.opacity = '0';

    overlayEl.classList.add('unique-hidden-overlay');

    setTimeout(() => {
      if (mediaContainerEl.contains(initialImageEl)) {
        mediaContainerEl.removeChild(initialImageEl);
      }
      mediaContainerEl.appendChild(videoIframe);
    }, 500);
  };

  playButtonEl.addEventListener('click', handleVideoPlay);

  function navbar() {
    let navbar = document.getElementById("header");
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      let scrollTop =
        document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop;

      if (scrollTop > 200) {
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

  // ek baar turant show kar do
  updateClock();

  // fir har 1 second me update karo
  setInterval(updateClock, 1000);

  navMenu();
  navbar();

  function initializePackageSlider() {
    const select = (selector, parent = document) => Array.from(parent.querySelectorAll(selector));

    select(".th-slider").forEach(function (sliderElement) {
      const t = sliderElement;

      let n = {};
      const optionsAttr = t.getAttribute("data-slider-options");
      if (optionsAttr) {
        try {
          n = JSON.parse(optionsAttr.replace(/"true"/g, 'true').replace(/"false"/g, 'false'));
        } catch (e) {
          console.error("Could not parse data-slider-options:", e);
        }
      }

      const a = t.closest(".package-list-area")?.querySelector(".slider-prev");
      const s = t.closest(".package-list-area")?.querySelector(".slider-next");
      const l = t.closest(".package-list-area")?.querySelector(".slider-pagination");

      const c = n.paginationType ? n.paginationType : "bullets";

      // --- FIX 1: Autoplay settings moved to initialization, removed from default Swiper config ---
      const autoplaySettings = {
        delay: 6000,
        disableOnInteraction: false
      };

      // Check if autoplay is explicitly set to false in data-slider-options (default is ON)
      const autoplay = n.autoplay === false ? false : autoplaySettings;

      const u = {
        slidesPerView: 1,
        spaceBetween: n.spaceBetween ? n.spaceBetween : 24,
        loop: n.loop !== false,
        speed: n.speed ? n.speed : 800,

        // Autoplay is still included, but the immediate start might fail, 
        // so we will manually start it using the 'init' event.
        autoplay: autoplay,

        breakpoints: n.breakpoints,

        navigation: {
          nextEl: s,
          prevEl: a
        },

        pagination: {
          el: l,
          type: c,
          clickable: true,
        },

        mousewheel: false,

        // --- FIX 2: Manually start autoplay on initialization ---
        on: {
          init: function (swiper) {
            // Check if autoplay is enabled in the settings before starting
            if (autoplay !== false) {
              swiper.autoplay.start();
            }
          },
          // (Retained) For ensuring autoplay resumes after user interaction (drag/swipe)
          touchEnd: function (swiper) {
            setTimeout(function () {
              if (autoplay !== false && swiper.autoplay.running === false) {
                swiper.autoplay.start();
              }
            }, 500);
          },
          // (Retained) For ensuring autoplay resumes after button click
          transitionEnd: function (swiper) {
            if (autoplay !== false && swiper.autoplay.running === false) {
              swiper.autoplay.start();
            }
          }
        }
      };

      const p = new Swiper(t, u);

    });
  }

  if (typeof Swiper !== 'undefined') {
    initializePackageSlider();
  } else {
    console.warn("Swiper library not found. Slider not initialized.");
  }


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

  const bannerSlidesArray = Array.from(
    document.querySelectorAll(".banner-swiper .banner-slide")
  ).map((slide) => slide.style.backgroundImage);
  let bannerAutoSlideInterval = 4000;
  let bannerAutoSlideTimer;

  function hideAllBannerContent() {
    document.querySelectorAll(".banner-content").forEach((el) => {
      el.classList.remove("active");
      el.style.opacity = 0;
      el.style.transform = "translateY(60px)";
    });
  }

  function animateBannerContent(swiperInstance) {
    const activeIndex = swiperInstance.activeIndex;
    const active = document
      .querySelectorAll(".banner-swiper .banner-slide")
    [activeIndex].querySelector(".banner-content");
    if (active) {
      active.classList.remove("active");
      void active.offsetWidth;
      setTimeout(() => {
        active.classList.add("active");
        active.style.opacity = 1;
        active.style.transform = "translateY(0)";
      }, 50);
    }
  }

  function updateBannerNavThumbs(swiperInstance) {
    const prevThumb = document.querySelector(".banner-button-prev .nav-thumb");
    const nextThumb = document.querySelector(".banner-button-next .nav-thumb");
    const totalSlides = bannerSlidesArray.length;
    const activeIndex = swiperInstance.realIndex;
    const prevIndex = (activeIndex - 1 + totalSlides) % totalSlides;
    const nextIndex = (activeIndex + 1) % totalSlides;
    prevThumb.style.backgroundImage = bannerSlidesArray[prevIndex];
    nextThumb.style.backgroundImage = bannerSlidesArray[nextIndex];
  }

  function startBannerAutoSlide(swiperInstance) {
    clearInterval(bannerAutoSlideTimer);
    bannerAutoSlideTimer = setInterval(() => {
      swiperInstance.slideNext(800);
    }, bannerAutoSlideInterval);
  }

  const bannerSwiper = new Swiper(".banner-swiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 1500,
    loop: true,
    allowTouchMove: false,
    autoplay: false,
    navigation: {
      nextEl: ".banner-button-next",
      prevEl: ".banner-button-prev",
    },
    on: {
      init() {
        animateBannerContent(this);
        updateBannerNavThumbs(this);
        startBannerAutoSlide(this);
      },
      slideChangeTransitionStart() {
        hideAllBannerContent();
      },
      slideChangeTransitionEnd() {
        animateBannerContent(this);
        updateBannerNavThumbs(this);
      },
    },
  });

  const bannerContentHideDuration = 500;

  document
    .querySelector(".banner-button-prev")
    .addEventListener("click", () => {
      hideAllBannerContent();
      setTimeout(() => {
        bannerSwiper.slidePrev(800);
        startBannerAutoSlide(bannerSwiper);
        updateBannerNavThumbs(bannerSwiper);
      }, bannerContentHideDuration);
    });

  document
    .querySelector(".banner-button-next")
    .addEventListener("click", () => {
      hideAllBannerContent();
      setTimeout(() => {
        bannerSwiper.slideNext(800);
        startBannerAutoSlide(bannerSwiper);
        updateBannerNavThumbs(bannerSwiper);
      }, bannerContentHideDuration);
    });

  // Function to update progress bar
  function updateProgressBar(swiper) {
    const progressFill = document.querySelector(".progress-fill");
    if (!progressFill) return;

    const totalSlides = swiper.slides.length;
    const activeIndex = swiper.realIndex;
    const progress = ((activeIndex + 1) / totalSlides) * 100;

    progressFill.style.width = progress + "%";
  }

  // Initialize testimonial swiper with progress bar - SINGLE INITIALIZATION
  const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    on: {
      init: function () {
        updateProgressBar(this);
        updateSlideStyles(this);
      },
      slideChange: function () {
        updateProgressBar(this);
        updateSlideStyles(this);
      },
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  function updateSlideStyles(swiper) {
    swiper.slides.forEach((slide, index) => {
      slide.classList.remove("slide-active", "slide-prev", "slide-next");

      if (index === swiper.activeIndex) {
        slide.classList.add("slide-active");
      } else if (
        index === swiper.activeIndex - 1 ||
        (swiper.activeIndex === 0 && index === swiper.slides.length - 1)
      ) {
        slide.classList.add("slide-prev");
      } else if (
        index === swiper.activeIndex + 1 ||
        (swiper.activeIndex === swiper.slides.length - 1 && index === 0)
      ) {
        slide.classList.add("slide-next");
      }
    });
  }
});

// Default image URL for the hotel lobby
  // Variable name unchanged as it's a constant value
  const DEFAULT_BG_URL = 'https://unsplash.com/photos/a-white-coupe-car-in-a-lobby-l1O9BqV3mSg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzE4NzEyNjg1fA&force=true&w=1920';

  // --- 1. Background Change Handler (Smooth Fade) ---
  // Function name and parameters unchanged (good practice)
  function changeDynamicBackground(newBgUrl, dynamicBg, isDefault = false) {
    const targetUrl = isDefault ? DEFAULT_BG_URL : newBgUrl;
    // Extracts the inner URL for reliable comparison
    const currentBg = dynamicBg.style.backgroundImage.slice(5, -2);

    if (currentBg !== targetUrl) {
      // Fade out
      dynamicBg.style.opacity = 0;

      // Change the source and fade back in
      setTimeout(() => {
        dynamicBg.style.backgroundImage = `url('${targetUrl}')`;
        dynamicBg.style.opacity = 1;
      }, 500);
    }
  }

  // --- 2. Get Active Slide Background URL ---
  // Function name unchanged (good practice)
  function getActiveSlideBgUrl(swiper) {
    // swiper.slides is reliable
    const activeSlide = swiper.slides[swiper.activeIndex];
    return activeSlide ? activeSlide.getAttribute('data-bg-image') : DEFAULT_BG_URL;
  }

  // --- 3. Set Background to Active Slide ---
  // Function name unchanged (good practice)
  function setActiveSlideBackground(swiper, dynamicBg) {
    const newBgUrl = getActiveSlideBgUrl(swiper);
    changeDynamicBackground(newBgUrl, dynamicBg);
  }

    // Changed variable name and selector to the new class
    const facilitySliderEl = document.querySelector('.facility-slider');
    const dynamicBg = document.getElementById('dynamicBg');

    // Set the initial default background
    dynamicBg.style.backgroundImage = `url('${DEFAULT_BG_URL}')`;

    const swiperOptions = {
      // ... core options ...
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      centeredSlides: false,
      speed: 1000,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      // IMPORTANT: Swiper needs to know the custom class names for the wrapper and slides to apply internal styles and functionality correctly.
      wrapperClass: 'facility-wrapper',
      slideClass: 'facility-slide',

      navigation: {
        // Updated selectors for custom arrows
        nextEl: facilitySliderEl.querySelector('.facility-next-arrow'),
        prevEl: facilitySliderEl.querySelector('.facility-prev-arrow')
      },
      pagination: {
        // Updated element selector to the new custom class
        el: facilitySliderEl.querySelector('.facility-pagination'),
        type: 'progressbar',
        clickable: true
      },
      breakpoints: {
        0: { slidesPerView: 2, spaceBetween: 15 },
        576: { slidesPerView: 3, spaceBetween: 20 },
        992: { slidesPerView: 4, spaceBetween: 30 },
        1200: { slidesPerView: 5, spaceBetween: 30 },
        1400: { slidesPerView: 6, spaceBetween: 30 }
      },
      on: {
        init: function (swiper) {
          apply3DEffect(swiper);
          setActiveSlideBackground(swiper, dynamicBg);
        },
        slideChange: function (swiper) {
          apply3DEffect(swiper);
          setActiveSlideBackground(swiper, dynamicBg);
        },
        progress: function (swiper) {
          apply3DEffect(swiper);
        }
      }
    };

    // Changed variable name
    const facilitySwiper = new Swiper(facilitySliderEl, swiperOptions);

    // ----------------------------------------
    // --- HOVER BACKGROUND LOGIC (Refactored) ---
    // ----------------------------------------

    // Mouse over: Change BG to the hovered slide's image
    // Used the new facilitySliderEl variable
    facilitySliderEl.addEventListener('mouseover', function (e) {
      // Changed selector to the new slide class
      const hoveredSlide = e.target.closest('.facility-slide');
      if (hoveredSlide) {
        const hoverBgUrl = hoveredSlide.getAttribute('data-bg-image');
        if (hoverBgUrl) {
          changeDynamicBackground(hoverBgUrl, dynamicBg);
        }
      }
    });

    // Mouse leave: Revert BG back to the current active (centered) slide's image
    // Used the new facilitySliderEl and facilitySwiper variables
    facilitySliderEl.addEventListener('mouseleave', () => {
      const activeBgUrl = getActiveSlideBgUrl(facilitySwiper);
      changeDynamicBackground(activeBgUrl, dynamicBg);
    });

    // ----------------------------------------
    // --- GSAP 3D Transform Effect (Unchanged logic) ---
    // ----------------------------------------
    function apply3DEffect(swiper) {
      // Iterates over swiper.slides (internal Swiper array, not tied to a class name)
      swiper.slides.forEach(slide => {
        const slideProgress = slide.progress;
        let rotate = slideProgress * 40;
        let scale = 1 - Math.abs(slideProgress * 0.15);
        let translateY = Math.abs(slideProgress * 50);

        gsap.to(slide, {
          duration: 0.5,
          transform: `scale(${scale}) rotateZ(${rotate}deg) translateY(${translateY}px)`,
          opacity: 1 - Math.abs(slideProgress * 0.3),
          ease: "power1.out"
        });
      });
    }

    // --- GSAP Parallax Effect (Unchanged) ---
    gsap.to(".dynamic-background", {
      backgroundPositionY: "50%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hotel-area",
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    });

    // --- Video Modal Functionality (Variable names changed for uniqueness) ---
    const videoPlayButton = document.querySelector('.popup-video');
    const videoModalBox = document.getElementById('videoModal');
    const videoCloseModal = document.getElementById('closeModal');
    const videoIframe = document.getElementById('youtubeIframe');

    function getYouTubeEmbedUrl(url) {
      let videoId = '';
      try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes('youtube.com')) {
          videoId = urlObj.searchParams.get('v');
        } else if (urlObj.hostname.includes('youtu.be')) {
          videoId = urlObj.pathname.substring(1);
        }
      } catch (e) { /* Invalid URL */ }

      return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : '';
    }

    videoPlayButton.addEventListener('click', function (e) {
      e.preventDefault();
      const videoUrl = this.href;
      const embedUrl = getYouTubeEmbedUrl(videoUrl);

      if (embedUrl) {
        videoIframe.src = embedUrl;
        videoModalBox.classList.add('active');
      }
    });

    videoCloseModal.addEventListener('click', function () {
      videoIframe.src = '';
      videoModalBox.classList.remove('active');
    });

    videoModalBox.addEventListener('click', function (e) {
      if (e.target === videoModalBox) {
        videoIframe.src = '';
        videoModalBox.classList.remove('active');
      }
    });

// --- Global State & Element References ---
let adultCount = 1;
let childCount = 0;

const villaDropdown = document.getElementById('villaDropdown');
const villaSelect = villaDropdown.querySelector(".select-selected");
const villaOptions = villaDropdown.querySelector(".select-items");
const villaInput = document.getElementById('villaInput');

const guestSelect = document.querySelector("#guestSelect .select-selected");
const guestDropdown = document.getElementById("guestDropdown");
const adultsInput = document.getElementById('adultsInput');
const childrenInput = document.getElementById('childrenInput');

const searchBtn = document.getElementById("searchBtn");

// --- Utility Functions ---
function updateGuestSelectText() {
  const adultsText = `${adultCount} Adult${adultCount > 1 ? "s" : ""}`;
  const childrenText = `${childCount} Child${childCount > 1 ? "ren" : ""}`;
  guestSelect.textContent = `${adultsText}, ${childrenText}`;

  // Update hidden inputs for form submission
  adultsInput.value = adultCount;
  childrenInput.value = childCount;
}

function updateGuestControls() {
  // Disable Minus button logic
  document.querySelector('.minus[data-type="adult"]').disabled = adultCount <= 1;
  document.querySelector('.minus[data-type="child"]').disabled = childCount <= 0;
}


// --- 1. Flatpickr Initialization ---
flatpickr("#dateRange", {
  mode: "range",
  dateFormat: "d/m/Y",
  minDate: "today",
  onOpen: function () {
    document.getElementById("dateRange").style.borderColor = '#800000f2';
  },
  onClose: function () {
    document.getElementById("dateRange").style.borderColor = '#800000f2';
  }
});

// --- 2. Villa Dropdown Logic ---
villaSelect.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllDropdowns(villaDropdown);
  villaOptions.style.display = villaOptions.style.display === "block" ? "none" : "block";
});

villaOptions.querySelectorAll("div").forEach((opt) => {
  opt.addEventListener("click", () => {
    const selectedValue = opt.getAttribute('data-value');
    villaSelect.textContent = selectedValue;
    villaInput.value = selectedValue; // <--- Updates hidden input
    villaOptions.style.display = "none";
  });
});

// --- 3. Guests Dropdown Logic ---
updateGuestSelectText();
updateGuestControls();

guestSelect.addEventListener("click", (e) => {
  e.stopPropagation();
  closeAllDropdowns(guestDropdown.closest('.custom-select'));
  guestDropdown.style.display = guestDropdown.style.display === "block" ? "none" : "block";
});

// Guest counter logic (buttons)
document.querySelectorAll(".guest-controls button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const type = btn.getAttribute("data-type");
    let count = (type === "adult" ? adultCount : childCount);

    const action = btn.classList.contains("plus") ? 1 : -1;
    count += action;

    if (type === "adult") {
      adultCount = Math.max(1, count);
      document.getElementById("adultCount").textContent = adultCount;
    } else if (type === "child") {
      childCount = Math.max(0, count);
      document.getElementById("childCount").textContent = childCount;
    }

    updateGuestSelectText(); // Updates display text and hidden inputs
    updateGuestControls();
  });
});

// --- 4. Global Dropdown Closer ---
function closeAllDropdowns(exceptElement) {
  if (exceptElement !== villaDropdown) {
    villaOptions.style.display = "none";
  }
  if (exceptElement !== guestDropdown.closest('.custom-select')) {
    guestDropdown.style.display = "none";
  }
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".custom-select")) {
    closeAllDropdowns();
  }
});

// --- 5. Form Submission Logic (Optional Custom Redirection) ---
const villaPages = {
  "Villa Sunshine": "villa-sunshine.html",
  "Villa Paradise": "villa-paradise.html",
  "Villa Oceanview": "villa-oceanview.html",
  "Villa Serenity": "villa-serenity.html",
};

document.getElementById("villaBookingForm").addEventListener("submit", (e) => {

  const villa = villaInput.value;
  const dates = document.getElementById("dateRange").value.trim();

  if (!dates || villa === "Select Villa" || villa === "") {
    e.preventDefault(); // Stop standard form submission
    alert("Please select a Villa and Dates.");
    return;
  }

  // If you want to redirect to a specific page based on the villa (as in previous logic):
  const baseUrl = villaPages[villa];
  if (baseUrl) {
    e.preventDefault(); // Stop standard form submission

    // Construct query parameters from hidden inputs and date range
    const params = new URLSearchParams();
    params.append('dates', dates);
    params.append('adults', adultsInput.value);
    params.append('children', childrenInput.value);

    const url = `${baseUrl}?${params.toString()}`;

    console.log("Custom Redirect URL:", url);
    alert(`Redirecting (Custom Logic): ${url}`);
  }



});
