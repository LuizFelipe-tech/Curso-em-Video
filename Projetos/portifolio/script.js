//Initial variable settings||Declaração inicial de variáveis
var divHtml = document.querySelector('#html');
var imgHtml = document.querySelector('#imghtml');
var paragraphHtml = document.querySelector('#paragraphHtml')
var closeButtonHtml = document.querySelector('#closeButtonHtml');
var divCss = document.querySelector('#css')
var imgCss = document.querySelector('cssimg')
var paragraphCss = document.querySelector('#paragraphCss')
var closeButtonCss = document.querySelector('#closeButtonCss')
var isElementContracted = true;
var isWhichElement = undefined

divHtml.classList.add('contractedHtml')
imgHtml.classList.add('imgContracted')
closeButtonHtml.classList.add('HiddenCloseButton')
paragraphHtml.classList.add('hiddenParagraph')
divCss.classList.add('contractedCss')
paragraphCss.classList.add('hiddenParagraph')
closeButtonCss.classList.add('HiddenCloseButton')

while(isWhichElement){
    if(isWhichElement == undefined){
        divHtml.addEventListener('click',() => clickHappened(divHtml, closeButtonHtml, paragraphHtml));
        divCss.addEventListener('click', ()=> clickHappened(divCss, closeButtonCss, paragraphCss))
    }
}

function clickHappened(element, closeButton, paragraphElement) {
    isElementContracted = false   
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
        }, 1500);

        element.classList.remove(`contracted${isWhichElement}`)
        element.classList.add('expanded')                   
    }
}
