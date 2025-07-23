// side bar start

function openNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '0';
    } else {
        console.error('error:side panel not found');
    }
}

function closeNav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '-320px';
    } else {
        console.error('error:side panel not found');
    }
}

//  searchbar

function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';

    } else {
        console.error('error: search panel not found');
    }

}

function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar');
    if (searchpanel) {
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderTopRightRadius = '100%';

    } else {
        console.error('error: search panel not found');
    }

}

// portfolio gallary tab

function open_img(evt, cityName){
    let i, tabcontent, tablinks;

    // hide all tab content
    tabcontent = document.getElementsByClassName('tabcontent');
    for(i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }



    // remove active class from all tab links
    tablinks = document.getElementsByClassName('tablinks');
    for(i = 0; i < tablinks.length; i++){
        tablinks[i].classList.remove("active");
    }

    // show the selected tab content and mark the corresponding tab link as active
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.classList.add('active');
}

// responsive team slider
$('.team-slider').slick({
    arrows: false,
    dots: true,
    inifinite: false,
    autoplay: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    resposive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            sliderToScroll: 1,
            inifinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1,
        }   
    }
]
})

//faq section

document.addEventListener('DOMContentLoaded', function(){
    let accordionButtons = document.querySelectorAll('.accordion-button');
    let acoimg = document.querySelectorAll('.accordion-button img');

    accordionButtons.forEach(function(button, index){
        button.addEventListener('click', function(){
            let collapse = this.parentElement.nextElementSibling;

            // close all the other accordion items
            accordionButtons.forEach(function(otherButton, otherindex){
                if(otherButton !==button){
                    let otherCollapse = otherButton.parentElement.nextElementSibling;
                    otherCollapse.style.maxHeight = null;

                    // reset thje image source and rotation for other accordion items
                    acoimg[otherindex].src ='images/icon/plus.png';
                    acoimg[otherindex].style.transform ='rotate(0deg)';
                    otherButton.style.backgroundColor = "#fff"
                }
            });

            // toggle the clicked according item 
            if(collapse.style.maxHeight){
                collapse.style.maxHeight = null;
                // reset the image source, rotation, and backround color when collapsing
                acoimg[index].src = "images/icon/plus.png";
                acoimg[index].style.transform ="rotate(90deg)";
                button.style.backgroundColor = '';
            }else{
                collapse.style.maxHeight = collapse.scrollHeight + "px"
                // change the image source, set rotation, and background color when expanding
                acoimg[index].src = "images/icon/menus.png";
                acoimg[index].style.transform ="rotate(180deg)"
                button.style.backgroundColor = "#c1b0b5"
            }
        });
    });
});


// foooter validation start


const fom = document.getElementById('footer-form');
const footerMessage = document.getElementById('footer-message');

fom.addEventListener('submit', (event)=> {
    event.preventDefault();
    footerMessage.innerHTML = '~ Form Submitted success fully';
    footerMessage.style.display = 'flex';
    fom.reset();
    setTimeout(() => {
        footerMessage.style.display = 'none'
    }, 3000);
})



// button back to top

window.onscroll = function(){
    scrollFunction()
}

function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        document.getElementById('backToTopBtn').style.display = 'block';
    } else {
        document.getElementById('backToTopBtn').style.display = 'none';
    }
}

function scrollToTop(){
    const scrollToTopBtn = document.documentElement || document.body;
    scrollToTopBtn.scrollIntoView({
        bahavior: 'smooth'
    })
}




// responsive logoipsum slider
$('.sliderlogo').slick({
    arrows: false,
    dots: false,
    inifinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    resposive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            inifinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,
        }
    },
    ]
})




