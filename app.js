const containerOfBody = document.querySelector(".container");
const leftSideOfNavbar = document.querySelector(".left-nav");
const centerSideOfNavbar = document.querySelector(".center-nav");
const instagramLogo = document.querySelector(".fa-instagram");
const darkModeLogo = document.querySelector(".fa-sun");
const informationAboutDeveloper = document.querySelector(".information-developer");
const techStack = document.querySelector(".tech-stack");
const logoOfHtml = document.querySelector(".html-logo");
const logoOfCss = document.querySelector(".css-logo");
const logoOfJavascript = document.querySelector(".javascript-logo");
const logoOfReact = document.querySelector(".react-logo");
const logoOfBootstrap = document.querySelector(".bootstrap-logo");
const logoOfScss = document.querySelector(".scss-logo");
const logoOfGit = document.querySelector(".git-logo");
const logoOfVisualStudio = document.querySelector(".visual-logo");
const logoOfGitHub = document.querySelector(".github-logo");
const creatingProjects = document.querySelector(".project");
const brokerApp = document.querySelector(".borker-app");
const calculator = document.querySelector(".calculator");
const currencyConverter = document.querySelector(".currency-converter");
const toDoList = document.querySelector(".to-do-list");
const bookInformation = document.querySelector(".book-information");
const watchProject = document.querySelector(".watch-project");
const contactWithDeveloper = document.querySelector(".connection");
const linkForInformation = document.querySelector(".link-information");
const buttonDarkMode = document.querySelector(".dark-mode");
const iconSunFromMoon = document.querySelector(".fa-regular");
const line = document.querySelector(".line");
const downloadCvButton=document.querySelector(".download-cv")
const preloader = document.querySelector(".preloader");
const hamburgerIconButton = document.querySelector(".hamburger-icon")
const listOfNavbar = document.querySelector(".center-nav")
const logoOfNavbar = document.querySelector(".right-nav")
const listOfMenu=document.querySelector(".list")






hamburgerIconButton.addEventListener("click", () => {
  listOfNavbar.classList.toggle("active")
  logoOfNavbar.classList.toggle("active")
  hamburgerIconButton.classList.toggle("active")
  listOfMenu.classList.toggle("active")
})





window.addEventListener("load", () => {
  preloader.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});

buttonDarkMode.addEventListener("click", (e) => {
  e.preventDefault();
  containerOfBody.classList.toggle("toggle-dark");
  leftSideOfNavbar.classList.toggle("toggle-dark");
  centerSideOfNavbar.classList.toggle("toggle-dark");
  instagramLogo.classList.toggle("toggle-dark");
  informationAboutDeveloper.classList.toggle("toggle-dark");
  techStack.classList.toggle("toggle-dark");
  logoOfHtml.classList.toggle("toggle-dark");
  logoOfCss.classList.toggle("toggle-dark");
  logoOfGit.classList.toggle("toggle-dark");
  logoOfGitHub.classList.toggle("toggle-dark");
  logoOfJavascript.classList.toggle("toggle-dark");
  logoOfScss.classList.toggle("toggle-dark");
  logoOfVisualStudio.classList.toggle("toggle-dark");
  logoOfBootstrap.classList.toggle("toggle-dark");
  logoOfReact.classList.toggle("toggle-dark");
  creatingProjects.classList.toggle("toggle-dark");
  brokerApp.classList.toggle("toggle-dark");
  calculator.classList.toggle("toggle-dark");
  currencyConverter.classList.toggle("toggle-dark");
  toDoList.classList.toggle("toggle-dark");
  bookInformation.classList.toggle("toggle-dark");
  watchProject.classList.toggle("toggle-dark");
  contactWithDeveloper.classList.toggle("toggle-dark");
  linkForInformation.classList.toggle("toggle-dark");
  line.classList.toggle("toggle-dark");
  iconSunFromMoon.classList.toggle("fa-moon");
  buttonDarkMode.classList.toggle("toggle-dark");
  preloader.classList.toggle("toggle-dark");
  downloadCvButton.classList.toggle("toggle-dark")
  listOfNavbar.classList.toggle("toggle-dark")
  logoOfNavbar.classList.toggle("toggle-dark")
  listOfMenu.classList.toggle("toggle-dark")
});
