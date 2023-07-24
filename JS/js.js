/*sticky navbar*/ 

/*scroll sections active link in navbar*/ 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () =>
{
    sections.forEach(sec =>
    /*when we move the cursor to another section in navbar . for that effect */
        {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height)
            {
                navLinks.forEach(links =>
                {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };
        });


    /* when scrolling header bar colour changes*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);

};

