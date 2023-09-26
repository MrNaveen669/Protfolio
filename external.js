// scroll section
let sections = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let header = document.querySelector('header');
    sections.forEach(sec => {
        let top = window.scrolly;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // action navbar links
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href=' + id + ']').classList.add('active');
            })
        }

    })


    header.classList.toggle('sticky', window.scrolly > 100);
}