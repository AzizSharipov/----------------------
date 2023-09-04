const navLinkActive = document.querySelectorAll(".navbar-links");
const navbarDropdown = document.querySelector("#nav-dropdown")
const navbarToggle = document.querySelector("#navbar-toggler")
const allSections = document.querySelectorAll("section");
const navbarScroll = document.querySelector("nav");
const questions = document.querySelectorAll(".questions");
const carouselIndicator = document.querySelectorAll(".carousel-indicator")


navbarToggle.addEventListener("click", () => {
    navbarScroll.classList.toggle("navbar-dropped")
    if (navbarDropdown.style.maxHeight) {
        navbarDropdown.style.maxHeight = null;
        navbarToggle.classList.toggle("active-navbar-toggle")
    } else {
        navbarDropdown.style.maxHeight = navbarDropdown.scrollHeight + "px";
        navbarToggle.classList.toggle("active-navbar-toggle")
    }
})

navLinkActive.forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(".active-nav-link")?.classList.remove("active-nav-link");
        link.classList.add("active-nav-link")
    })
})


window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        navbarScroll.classList.add("navbar-scroll");
    } else{
        navbarScroll.classList.remove("navbar-scroll");
    }
});

window.addEventListener("scroll", () => {
    let currentSection = "";
    allSections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 300) {
            currentSection = section.getAttribute("id");
        }
    })
    
    navLinkActive.forEach(link => {
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active-nav-link")
        } else {
            link.classList.remove("active-nav-link")
        }
    })
})

questions.forEach(question => {
    question.addEventListener("click", function () {
        question.classList.toggle("not-active");
        question.classList.toggle("active");
        let answer = this.nextElementSibling
        answer.classList.toggle("border-dark-subtle")
        answer.classList.toggle("border-success")
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.classList.toggle("border-2")
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"
            answer.classList.toggle("border-2")
        }
        
    })
})

const indicator1 = document.querySelector("#carousel-btn1");
const indicator2 = document.querySelector("#carousel-btn2");
const indicator3 = document.querySelector("#carousel-btn3");

indicator1.addEventListener("click", () => {
    carousel.scrollTo(0, 0)
    indicator1.classList.add("indicator-active");
    indicator2.classList.remove("indicator-active");
    indicator3.classList.remove("indicator-active");
})

indicator2.addEventListener("click", () => {
    carousel.scrollTo(carousel.clientWidth, 0)
    indicator2.classList.add("indicator-active");
    indicator1.classList.remove("indicator-active");
    indicator3.classList.remove("indicator-active");
})
 
indicator3.addEventListener("click", () => {
    carousel.scrollTo(carousel.clientWidth*2, 0)
    indicator3.classList.add("indicator-active");
    indicator1.classList.remove("indicator-active");
    indicator2.classList.remove("indicator-active");
})



window.addEventListener("resize", () => {
    if (window.innerWidth > 1200) {
        if (navbarDropdown.style.maxHeight) {
            navbarDropdown.style.maxHeight = null;
            navbarToggle.classList.toggle("active-navbar-toggle")
            navbarScroll.classList.toggle("navbar-dropped")
        }
    }
})