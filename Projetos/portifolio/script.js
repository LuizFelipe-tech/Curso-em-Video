//Initial variable settings||Declaração inicial de variáveis
var divHtml = document.querySelector('#html');
var imgHtml = document.querySelector('#imghtml');
var paragraphHtml = document.querySelector('#paragraphHtml')
var divCss = document.querySelector('#css')
var imgCss = document.querySelector('cssimg')
var paragraphCss = document.querySelector('#paragraphCss')
var closeButton = document.querySelector('#closeButton');
var isElementContracted = true;
var isWhichElement = undefined

divHtml.classList.add('contractedHtml')
imgHtml.classList.add('imgContracted')
closeButton.classList.add('HiddenCloseButton')
paragraphHtml.classList.add('hiddenParagraph')
divCss.classList.add('contractedCss')

divHtml.addEventListener('click',() => clickHappened(divHtml, imgHtml, paragraphHtml));
divCss.addEventListener('click', ()=> clickHappened(divCss, imgCss, paragraphCss))

function clickHappened(element, imgElement, paragraphElement) {
    elementClicked()
    function elementClicked(){
        switch (element){
            case divHtml:
                isWhichElement = 'Html'
                break
            case divCss:
                isWhichElement = 'Css'
        }
    }
    function fechar(click){
        click.stopPropagation()
        closeButton.classList.remove('ShowedCloseButton')
        closeButton.classList.add('HiddenCloseButton')
        element.classList.remove('expanded')
        element.classList.add(`expandedToContracted${isWhichElement}`)
        setTimeout(function(){
            element.classList.remove(`expandedToContracted${isWhichElement}`)
            element.classList.add(`contracted${isWhichElement}`)
        }, 2001)
        paragraphElement.classList.remove('showParagraph')
        paragraphElement.classList.add('hiddenParagraph')
        isElementContracted = true
    }

    if (isElementContracted == true) {

        setTimeout(function() {
            paragraphElement.classList.remove('hiddenParagraph')
            paragraphElement.classList.add('showParagraph')
            closeButton.classList.remove('HiddenCloseButton')
            closeButton.classList.add('ShowedCloseButton')
            closeButton.addEventListener('click', fechar)
            switch(isWhichElement){
                case 'Html':
                    paragraphElement.innerHTML = 'Tenho amplo domínio de HTML e sou capaz de estruturar páginas web de forma semântica e organizada, seguindo os padrões recomendados pela W3C. Possuo experiência na criação de documentos bem estruturados, com foco em acessibilidade e usabilidade. Dominei o uso de tags HTML5, especialmente aquelas relacionadas a mídia, formulários e elementos interativos, o que me permite desenvolver aplicações web modernas. Minha habilidade em combinar HTML com CSS e JavaScript me ajuda a criar interfaces eficazes e funcionais, sempre garantindo a melhor experiência para o usuário final.';
                    break
                case 'Css':
                    paragraphElement.innerHTML = 'Tenho amplo domínio de CSS, com habilidades avançadas em estilização e layout de páginas web. Sou capaz de criar designs responsivos e dinâmicos, aplicando boas práticas de organização e manutenção de código, além de integrar eficientemente CSS com HTML e JavaScript. Minha experiência inclui o uso de técnicas modernas, como Flexbox e Grid, para desenvolver interfaces intuitivas e atraentes, sempre com foco em garantir uma boa experiência para o usuário. Também tenho conhecimento em personalização de estilos com variáveis e animações CSS, o que me permite adaptar facilmente a diferentes demandas de projetos web.'
            }
        }, 1500);

        element.classList.remove(`contracted${isWhichElement}`)
        element.classList.add('expanded')
        isElementContracted = false                      
    }
}
