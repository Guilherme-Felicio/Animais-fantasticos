function initNavTab(){
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if(tabMenu.length && tabContent.length){
        tabMenu.forEach((itemMenu, index) =>{
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
        
        function activeTab(index){
            tabContent.forEach((item) => {
                item.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }
    }
}


function initAccording(){
    const accordionList = document.querySelectorAll('.js-accordion dt');

    function activeAccordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item, index) => {
        item.addEventListener('click', activeAccordion);
    });

}

initAccording();
initNavTab();
function InitScrollSuave(){
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

InitScrollSuave();

function initAnimaScroll(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
        const windowMetade = window.innerHeight * 0.7;
        function animaScroll(){
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isVisible = (sectionTop - windowMetade) < 0;
                if(isVisible){
                    section.classList.add('ativo');
                }
            }); 
        }
    }
    animaScroll();
    window.addEventListener('scroll', animaScroll);
}

initAnimaScroll();


