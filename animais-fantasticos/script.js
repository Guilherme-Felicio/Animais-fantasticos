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

