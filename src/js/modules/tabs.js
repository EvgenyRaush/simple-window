const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        contents.forEach((item) => {
            item.style.display = 'none';
        });
        tab.forEach((item) => {
             item.classList.remove(activeClass);
        });
    }
    
    function showTabContent(i = 0) {
        contents[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    
    hideTabContent();
    showTabContent();
    
    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target &&
        (target.classList.contains(tabSelector.replace(/\./, "")) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        
        }
    });
};

export default tabs;