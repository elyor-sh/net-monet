function testWebP(callback) {

    let webP = new Image();
    webP.onload = webP.onerror = function() {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


let burger = document.querySelector('.header__menu-burger');
let menuBody = document.querySelector('.header__menu-body');
if (burger) {
    burger.addEventListener("click", function() {
        burger.classList.toggle('_pressed');

        if (burger.classList.contains('_pressed')) {
            menuBody.classList.add('_active');
            document.body.classList.add('_lock');
        } else {
            menuBody.classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    })
}


const simpleSlider = new Swiper('.simple__slider', {
    pagination: {
        el: '.swiper-pagination',
        checkable: true,
    },

    spaceBetween: 15,
    simulateTouch: true,
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        480: {
            slidesPerView: 1.8,
        },
        620: {
            slidesPerView: 2.4,
        },
        768: {
            slidesPerView: 3,
            simulateTouch: false,
        },

    }

});
const adaptationSlider = new Swiper('.adaptation__slider', {
    pagination: {
        el: '.adaptation-pagination',
        checkable: true,
    },

    spaceBetween: 15,
    simulateTouch: true,
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1.3,
        },
        480: {
            slidesPerView: 1.8,
        },
        620: {
            slidesPerView: 2.4,
        },
        768: {
            slidesPerView: 3,
            simulateTouch: false,
        },

    }

});

[...document.querySelectorAll('.question__plus')].forEach(item => {
    item.addEventListener("click", function() {
        this.classList.toggle('_pressed');
        let questionBox = this.closest('.question__box');
        if (this.classList.contains('_pressed')) {
            questionBox.classList.add('_active');
            questionBox.querySelector('.question__dropdown-text').classList.add('_more');
            this.innerHTML = '-';
        } else {
            questionBox.classList.remove('_active');
            questionBox.querySelector('.question__dropdown-text').classList.remove('_more');
            this.innerHTML = '+';
        }
    })
})