function menuShow() {
    
    var menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        console.log('removido')
    } 
    
    else {
        menuMobile.classList.add('open');
        console.log('adicionado')
    }
}