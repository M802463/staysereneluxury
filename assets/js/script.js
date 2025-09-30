document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    let smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
    });

    function navbar() {
        let navbar = document.getElementById('header')
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            if (scrollTop > lastScroll) {
                // gsap.to('#header', {
                //     y: "-100%",
                //     duration: 1,
                //     ease: "power2.out"
                // })
                navbar.classList.add("active");
            } else {
                // gsap.to('#header', {
                //     y: "0%",
                //     duration: .5,
                //     ease: "power2.out"
                // })
                navbar.classList.remove("active");
            }

            lastScroll = scrollTop;
        })

        let menuItem = document.querySelectorAll(".menu-list ul li")

        menuItem.forEach(item => {
            let link = item.querySelector("a");
            let dropdown = item.querySelector("ul");

            if (dropdown) {
                gsap.set(dropdown, {
                    height: 0,
                    overflow: "hidden",
                })


                let flag = false;
                link.addEventListener("click", (e) => {
                    e.preventDefault();
                    item.classList.toggle("active");
                    if (item.classList.contains("active")) {
                        gsap.to(dropdown, {
                            height: dropdown.scrollHeight,
                            duration: 1,
                            ease: "power2.out",
                        })
                    } else {
                        gsap.to(dropdown, {
                            height: 0,
                            duration: 1,
                            ease: "power2.inout",
                        })
                    }
                })
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
                ease: "power4.out"
            })
            gsap.to(".side-nav", {
                x: "0%",
                delay: .1,
                duration: 1,
                ease: "power2.out"
            })
            gsap.set("body", {
                overflow: "hidden",
                delay: .9,
            })
        })

        menuClose.addEventListener("click", () => {
            gsap.to("#side-bar", {
                x: "-100%",
                duration: .8,
                ease: "power2.out",
                delay: .2,
            })
            gsap.to(".side-nav", {
                x: "-100%",
                duration: .5,
                ease: "power4.out"
            })
            gsap.set("body", {
                delay: 1,
                overflow: "auto",
            })
        })
    }

    const timeElement = document.getElementById("time");

    function updateClock() {
        setInterval(updateClock, 1000)
        const now = new Date();

        const time = new Intl.DateTimeFormat("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
            timeZone: "Asia/Kolkata"
        }).format(now)

        timeElement.textContent = time;
    }

    updateClock()
    setInterval(updateClock, 1000)

    navMenu()
    navbar()

});