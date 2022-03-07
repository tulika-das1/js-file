window.addEventListener('load', ()=>{
    const responsiveMenuBtn = document.querySelector('.responsive-menu-btn');
    const responsiveMenu = document.querySelector('.responsive-menu');
    responsiveMenuBtn.addEventListener('click', (event)=>{
        event.preventDefault();
        responsiveMenu.classList.remove('hide');
    });
    const responsiveMenuCloseBtn = document.querySelector('.responsive-menu .header #close');
    responsiveMenuCloseBtn.addEventListener('click', ()=>{
        responsiveMenu.classList.add('hide');
    });
});

//# sourceMappingURL=navBar.83b7aec6.js.map
