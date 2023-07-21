function Menu(e){
    let ol = document.querySelector('nav ol');
    let menu_and_close = document.querySelector('[data-menu_and_close]');
    let menu = document.querySelector('[data-menu]');
    let close = document.querySelector('[data-close]');


    menu.classList.toggle('block');
    menu.classList.toggle('hidden');

    close.classList.toggle('block');
    close.classList.toggle('hidden');

    ol.classList.toggle('opacity-0');
    ol.classList.toggle('hidden');
    
    ol.classList.toggle('flex');


}