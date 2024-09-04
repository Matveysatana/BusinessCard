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


// Блог

function showContent(section) {

    const sections = document.querySelectorAll('main > div, .header');
    sections.forEach(sec => sec.style.display = 'none');

    const activeSection = document.getElementById(section);
    if (activeSection) {
        activeSection.style.display = 'block';
    }

    if (section === 'main' || section === 'home') {
        document.querySelector('.header').style.display = 'block';
        document.getElementById('main').style.display = 'block';
    }
    if (section === 'blog') {
        document.getElementById('blog').style.display = 'block';
    }
};

function addActive () {
   const linkBlog = document.getElementById("blog_link");

    linkBlog.addEventListener('click', function() {
    linkBlog.classList.add('active')
   })
}

