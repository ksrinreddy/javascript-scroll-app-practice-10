// set footer date dynamically
const date = document.querySelector("#date");

date.innerHTML = new Date().getFullYear();

// toggle nav links
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //   linksContainer.classList.toggle("show-links");
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight);
  const containerHeight = linksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed navbar
const navbar = document.getElementById("navbar");
const scrollTop = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  // console.log(scrollHeight);
  const navbarHeight = navbar.getBoundingClientRect().height;
  // console.log(navbarHeight);
  if (scrollHeight > navbarHeight) {
    navbar.classList.add("fixed-navbar");
  } else {
    navbar.classList.remove("fixed-navbar");
  }
  // show scroll-top button
  if (scrollHeight > 500) {
    scrollTop.classList.add("show-top-btn");
  } else {
    scrollTop.classList.remove("show-top-btn");
  }
});

// smooth scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);

    // calculate the heights
    const navbarHeight = navbar.getBoundingClientRect().height;
    console.log(navbarHeight);
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-navbar");

    let position = element.offsetTop - navbarHeight;
    console.log(position);
    if (!fixedNav) {
      position = position - navbarHeight;
    }
    if (navbarHeight > 82) {
      position = position + containerHeight;
    }
    // scroll to specific spot
    window.scrollTo({
      left: 0,
      top: position,
    });
    // close links container after clicking any link
    linksContainer.style.height = 0;
  });
});
