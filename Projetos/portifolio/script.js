var divHtml = document.querySelector('#html');
var imgHtml = document.querySelector('#imghtml');
var control = 1;
var closeButton = document.createElement('img');
var paragraph = document.createElement('p')
closeButton.setAttribute('src', 'image/fechar.png')
divHtml.addEventListener('click',() => clicarHTML(divHtml, imgHtml));
function clicarHTML(x, y) {
    if (control == true) {
        setTimeout(function() {
            x.appendChild(paragraph);
            paragraph.style.position = 'relative';
            paragraph.style.top = '-20%';
            console.log('Inserção parágrafo')
            paragraph.innerHTML = 'Tenho amplo domínio de HTML, o que me permite criar e estruturar páginas web de maneira eficiente, organizando textos, imagens e outros elementos de mídia. Sou capaz de desenvolver layouts responsivos que se adaptam a diferentes dispositivos, criar formulários interativos para coleta de dados, otimizar o conteúdo para SEO com tags adequadas, e integrar o HTML com CSS e JavaScript para estilizar e adicionar funcionalidades dinâmicas às páginas. Isso me permite desenvolver sites funcionais, acessíveis e prontos para interações com os usuários.';
        }, 1500);
        x.style.transitionDuration = '2s';
        x.style.width = '500px';
        x.style.height = '250px';
        x.style.position = 'absolute';
        x.style.top = '50%';
        x.style.left = '50%';
        x.style.transform = 'translateX(-50%)';
        y.style.display = 'block';
        y.style.margin = 'auto';
        x.appendChild(closeButton);
        closeButton.style.width = '40px';
        closeButton.style.width = '40px';
        closeButton.style.position = 'relative';
        closeButton.style.left = '90%';
        closeButton.style.bottom = '40%';
        closeButton.addEventListener('click', fechar);
        console.log(control)
        control = false
        console.log(control)                      
    }
}
function fechar(click){
    click.stopPropagation()
    divHtml.removeChild(paragraph)
    divHtml.style.width = '100px'
    divHtml.style.height = '100px'
    divHtml.style.top = '95%'
    divHtml.style.left = '10%'
    imgHtml.style.display = ''
    divHtml.removeChild(closeButton)
    control = true
}
