// handle window sizing

let hamburger = document.querySelector('.hamburger-icon')
let navLinks = document.getElementById('nav-links')

function handleResize() {
	if(window.innerWidth <= 600) {
		hamburger.style.display = 'flex'
		navLinks.classList.add('hidden')
	}
	else {
		hamburger.style.display = 'none'
		navLinks.classList.remove('hidden')
	}
}

handleResize()
window.onresize = handleResize


// hamburger menu

function handleHamburgerClick() {
	navLinks.classList.toggle('nav-links-mobile')
	navLinks.classList.toggle('hidden')
}

hamburger.onclick = handleHamburgerClick


// linking nav and buttons to sections

let activeLink = document.getElementById('link-to-hero')
let sections = [document.getElementById('hero'), document.getElementById('services'), document.getElementById('prices'), document.getElementById('contacts')]

let links = [document.getElementById('link-to-hero'), document.getElementById('link-to-services'), document.getElementById('link-to-prices'), document.getElementById('link-to-contacts'), document.getElementById('cta-contacts'), document.getElementById('cta-prices')]
let linkDestinations = [document.getElementById('hero'), document.getElementById('services'), document.getElementById('prices'), document.getElementById('contacts'), document.getElementById('contacts'), document.getElementById('prices')]

links.forEach(function(link, i) {
	link.onclick = function() {
		if (hamburger.style.display === 'flex') {
			navLinks.classList.remove('nav-links-mobile')
			navLinks.classList.add('hidden')
		}

		linkDestinations[i].scrollIntoView({ behavior: 'smooth' })
	}
})

// navigation scroll behavior

let nav = document.querySelector('nav')
let navTrigger = document.getElementById('nav-trigger')

let observer = new IntersectionObserver(function(entries) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting) {
			nav.classList.remove('floating-nav')
			hamburger.classList.remove('hamburger-icon-second-color')
		}
		else {
			nav.classList.add('floating-nav')
			hamburger.classList.add('hamburger-icon-second-color')
		}
	})
})

observer.observe(navTrigger)


// nav links active class change on scroll

function changeActiveLink(link) {
	activeLink.classList.remove('active')
	link.classList.add('active')
	activeLink = link
}

sections.forEach(function(section, i) {
	let observer = new IntersectionObserver(function(entries) {
		entries.forEach(function(entry) {
			if (entry.isIntersecting)
				changeActiveLink(links[i])
		})
	}, { threshold: 0.5 })

	observer.observe(section)
})