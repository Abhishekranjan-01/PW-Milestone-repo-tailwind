const nav_links = document.querySelector('[data-nav_links]');



// For Hamburger Functionality
function Menu(e){
 e.name === 'menu' ? (e.name = 'close',
 nav_links.classList.add('opacity-100'),
 nav_links.classList.add('flex'),
 nav_links.classList.remove('hidden'))
 :
 (e.name = 'menu',
 nav_links.classList.add('hidden'),
 nav_links.classList.remove('flex'),
 nav_links.classList.remove('opacity-100')
 );

}
