$(".element-menu__link").click (function () {
    const thisElement = $(this);

    const linkHref = thisElement.attr('href');
    const hrefElement = $(linkHref);

    $(".element-menu__link.active").removeClass('active');
    thisElement.addClass('active')
})




const options = {
    threshold: 0.3
}
const callback = function(entries) {
    entries.forEach(entry => {
        const sectionMenuLink = document.querySelector(`.element-menu__link[href='#${entry.target.id}']`);
        if (entry.isIntersecting && !hasClass(sectionMenuLink, 'active')) {
            changeActiveMenuElement(sectionMenuLink);
        }
    });
};
const observer = new IntersectionObserver(callback, options);
document.querySelectorAll(".observer-section").forEach(element => {
    observer.observe(element);
});

// Общие функции
/**
 * Меняет активный элемент в пунктах меню
 * @param element Ссылка в меню
 */
function changeActiveMenuElement(element) {
    document.querySelector(".element-menu__link.active").classList.remove('active');
    element.classList.add('active');
}

/**
 * Проверяет наличие класса у элемента
 * @param element
 * @param className
 */
function hasClass(element, className) {
    return element.classList.contains(className);
}

// переключатель языков
const translations = {
    ru: {
        home: 'Домой',
        aboutMe: 'Обо мне',
        achievements: 'Достижения',
        skills: 'Навыки',
        interest: 'Интересы',
        books: 'Книги',
        contactMe: 'Связаться'
    },
    en: {
        home: 'Home',
        aboutMe: 'About Me',
        achievements: 'Achievements',
        skills: 'Skills',
        interest: 'Interests',
        books: 'Books',
        contactMe: 'Contact Me'
    }
};

document.getElementById('lang').addEventListener('change', function() {
    const lang = this.checked ? 'en' : 'ru';
    document.getElementById('menu-home').textContent = translations[lang].home;
    document.getElementById('menu-about-me').textContent = translations[lang].aboutMe;
    document.getElementById('menu-achievements').textContent = translations[lang].achievements;
    document.getElementById('menu-skills').textContent = translations[lang].skills;
    document.getElementById('menu-interest').textContent = translations[lang].interest;
    document.getElementById('menu-books').textContent = translations[lang].books;
    document.getElementById('menu-contact-me').textContent = translations[lang].contactMe;
});