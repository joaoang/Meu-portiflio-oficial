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

function htmlBotao() {
    document.getElementById('visor1').innerHTML = "";
    document.getElementById('visor2').innerHTML = "";
    document.getElementById('visor3').innerHTML = "";
    document.getElementById('visor4').innerHTML = "";
    document.getElementById('visor1').innerHTML = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da página.";
}

function cssBotao() {
    document.getElementById('visor1').innerHTML = "";
    document.getElementById('visor2').innerHTML = "";
    document.getElementById('visor3').innerHTML = "";
    document.getElementById('visor4').innerHTML = "";
    document.getElementById('visor2').innerHTML = "O CSS tem a tarefa de separar o conteúdo do site de sua apresentação visual, alterando elementos como cor do texto, fonte e espaçamento entre blocos, assim como todo o aspecto estético de uma página.";
}

function jsBotao() {
    document.getElementById('visor1').innerHTML = "";
    document.getElementById('visor2').innerHTML = "";
    document.getElementById('visor3').innerHTML = "";
    document.getElementById('visor4').innerHTML = "";
    document.getElementById('visor3').innerHTML = "A linguagem de programação Javascript permite ao desenvolvedor implementar diversos itens de alto nível de complexidade em páginas web, como animações, mapas, gráficos ou informações. Ela é também uma das linguagens mais ultilizadas no mundo.";
}

function reactBotao() {
    document.getElementById('visor1').innerHTML = "";
    document.getElementById('visor2').innerHTML = "";
    document.getElementById('visor3').innerHTML = "";
    document.getElementById('visor4').innerHTML = "";
    document.getElementById('visor4').innerHTML = "React é um framework JavaScript criado pelo Facebook (atual Meta) que é usado para criar interfaces de usuário (UI) em aplicativos web. Ele é popular por ser fácil de usar, altamente flexível e escalável, e é usado por muitas empresas de tecnologia, incluindo o Facebook, Instagram e Airbnb.";
}