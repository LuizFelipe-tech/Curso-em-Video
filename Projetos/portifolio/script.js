var html = document.querySelector('#html');
var imghtml = document.querySelector('#imghtml');
var control = 0;
var closeB = document.createElement('img');
var p = document.createElement('p')
closeB.setAttribute('src', 'image/fechar.png')
html.addEventListener('click',() => clicarHTML(html, imghtml, p));
function clicarHTML(x, y, z) {
    if (control == 0) {
        x.style.transitionDuration = '2s';
        x.style.width = '500px';
        x.style.height = '250px';
        x.style.position = 'absolute';
        x.style.top = '50%';
        x.style.left = '50%';
        x.style.transform = 'translateX(-50%)';
        y.style.display = 'block';
        y.style.margin = 'auto';
        control = 1;
        x.appendChild(closeB);
        closeB.style.width = '40px';
        closeB.style.width = '40px';
        closeB.style.position = 'relative';
        closeB.style.left = '90%';
        closeB.style.bottom = '40%';
        closeB.addEventListener('click', fechar);
        control++
        switch(x){
            case html:
                html.appendChild(p)
                p.innerHTML = 'Tenho amplo domínio de HTML, o que me permite criar e estruturar páginas web de maneira eficiente, organizando textos, imagens e outros elementos de mídia. Sou capaz de desenvolver layouts responsivos que se adaptam a diferentes dispositivos, criar formulários interativos para coleta de dados, otimizar o conteúdo para SEO com tags adequadas, e integrar o HTML com CSS e JavaScript para estilizar e adicionar funcionalidades dinâmicas às páginas. Isso me permite desenvolver sites funcionais, acessíveis e prontos para interações com os usuários.'
        }
    }
}
function fechar(){
    if(control > 0)
    html.style.width = '100px'
    html.style.height = '100px'
    html.style.left = '5%'
    html.style.top = '95%'
    html.style.transform = ''
    html.removeChild(closeB)
    control--
}