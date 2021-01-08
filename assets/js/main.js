const showMenu = (toggleId, navID) => {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navID)

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    // removes any 'active' class name on any of the navLinks
    navLink.forEach(n => n.classList.remove('active'))
    // adds a 'active' class name of the CLICKED navlink
    this.classList.add('active')

    // on menu item selection, navbar then disapears to the right again
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.home__title', {})
sr.reveal('.button', {delay: 200})
sr.reveal('.home__img', {delay: 400})
sr.reveal('.home__social-icon', {interval: 200})
sr.reveal('.about__img', {})
sr.reveal('.about__subtitle', {delay: 400})
sr.reveal('.about__text', {delay: 300})
sr.reveal('skills__subtitle', {})
sr.reveal('.skills__text',{})
sr.reveal('skills__data', {interval: 200})
sr.reveal('.skills__img', {delay: 600})
sr.reveal('.work__img', {interval: 200})
sr.reveal('.contact__subtitle', {delay: 150})
sr.reveal('.contact__input', {interval: 300})