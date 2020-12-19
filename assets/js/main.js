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

