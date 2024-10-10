var divHtml = document.querySelector('#html');
var imgHtml = document.querySelector('#imghtml');
var paragraphHtml = document.querySelector('#paragraphHtml')
var divCss = document.querySelector('#css')
var imgCss = document.querySelector('cssimg')
var paragraphCss = document.querySelector('paragraphCss')
var closeButton = document.querySelector('#closeButton');
var isHtmlContracted = true;

divHtml.classList.add('contractedHtml')
imgHtml.classList.add('imgHtmlCOntracted')
closeButton.classList.add('HiddenCloseButton')
paragraphHtml.classList.add('hiddenParagraph')

divHtml.addEventListener('click',() => clickHappened(divHtml, imgHtml, paragraphHtml));
divCss.addEventListener('click', ()=> clickHappened(divCss, imgCss, paragraphCss))

function clickHappened(element, imgElement, paragraphElement) {
    function fechar(click){
        click.stopPropagation()
        closeButton.classList.remove('ShowedCloseButton')
        closeButton.classList.add('HiddenCloseButton')
        element.classList.remove('expanded')
        element.classList.add('expandedToContractedHtml')
        setTimeout(function(){
            element.classList.remove('expandedToContractedHtml')
            element.classList.add('contractedHtml')
        }, 2001)
        imgElement.classList.add('imgExpandedToContracted')
        imgElement.classList.remove('HtmlExpanded')
        paragraphElement.classList.remove('showParagraph')
        paragraphElement.classList.add('hiddenParagraph')
        isHtmlContracted = true
    }

    if (isHtmlContracted == true) {

        setTimeout(function() {
            paragraphElement.classList.remove('hiddenParagraph')
            paragraphElement.classList.add('showParagraph')
            closeButton.classList.remove('HiddenCloseButton')
            closeButton.classList.add('ShowedCloseButton')
            closeButton.addEventListener('click', fechar)
            switch(element){
                case divHtml:
                    paragraphElement.innerHTML = 'Tenho amplo domínio de HTML, o que me permite criar e estruturar páginas web de maneira eficiente, organizando textos, imagens e outros elementos de mídia. Sou capaz de desenvolver layouts responsivos que se adaptam a diferentes dispositivos, criar formulários interativos para coleta de dados, otimizar o conteúdo para SEO com tags adequadas, e integrar o HTML com CSS e JavaScript para estilizar e adicionar funcionalidades dinâmicas às páginas. Isso me permite desenvolver sites funcionais, acessíveis e prontos para interações com os usuários.';
            }
        }, 1500);

        element.classList.remove('contractedHtml')
        element.classList.add('expanded')
        imgElement.classList.remove('contractedHtml')
        imgElement.classList.add('imgHtmlExpanded')
        isHtmlContracted = false                      
    }
}
