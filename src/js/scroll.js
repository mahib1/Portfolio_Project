
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById('menuButton');
    const closeButton = document.getElementById('closeButton');
    const sidebar = document.getElementById('sidebar');
    const sections = document.querySelectorAll('.section');

    menuButton.addEventListener('click', function() {
        sidebar.classList.toggle('visible');
        menuButton.classList.toggle('hidden');
    });

    closeButton.addEventListener('click', function() {
        sidebar.classList.toggle('visible');
        menuButton.classList.toggle('hidden');
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY || window.pageYOffset;

        sections.forEach((section, index) => {
            if (scrollPosition >= section.offsetTop - 100 && scrollPosition < section.offsetTop + section.offsetHeight - 100) {
                sections.forEach(s => s.style.opacity = '0.5');
                section.style.opacity = '1';
            }
        });
    });

    sections.forEach(section => {
        section.addEventListener('wheel', function(event) {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            const currentSectionIndex = [...sections].indexOf(section);
            let nextSectionIndex = currentSectionIndex + delta;

            if (nextSectionIndex < 0) nextSectionIndex = 0;
            if (nextSectionIndex >= sections.length) nextSectionIndex = sections.length - 1;

            sections[nextSectionIndex].scrollIntoView({ behavior: 'smooth' }); 
        });
    });
});

