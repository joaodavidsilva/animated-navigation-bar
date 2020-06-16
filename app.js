function navigationListeners() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav  a');

    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            const id = this.getAttribute('id');
            const navActive = document.querySelector(`a[href="#${id}"]`);
            
            navActive.classList.add('active');
        });

        section.addEventListener('mouseleave', function() {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
        })
    });

    navLinks.forEach(navLink => {
        navLink.addEventListener('mouseenter', function() {
            navLink.classList.add('active');
        });

        navLink.addEventListener('mouseleave', function() {
            navLink.classList.remove('active');
        });
    });
}

navigationListeners();