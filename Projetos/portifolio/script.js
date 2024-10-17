//Initial variable settings||Declaração inicial de variáveis
var divHtml = document.querySelector('#html');
var imgHtml = document.querySelector('#imghtml');
var paragraphHtml = document.querySelector('#paragraphHtml')
var closeButtonHtml = document.querySelector('#closeButtonHtml');
var divCss = document.querySelector('#css')
var imgCss = document.querySelector('#cssimg')
var paragraphCss = document.querySelector('#paragraphCss')
var closeButtonCss = document.querySelector('#closeButtonCss')

var divJavascript = document.querySelector('#javascript')
var paragraphJavascript = document.querySelector('#paragraphJavascript')
var closeButtonJavascript = document.querySelector('#closeButtonJavascript')

var greyBackground = document.querySelector('#greyBackground')
var isElementContracted = true;
var isWhichElement = undefined

divHtml.classList.add('contractedHtml')
imgHtml.classList.add('imgContracted')
paragraphHtml.classList.add('hiddenParagraph')
closeButtonHtml.classList.add('HiddenCloseButton')
closeButtonCss.classList.add('HiddenCloseButton')
divCss.classList.add('contractedCss')
paragraphCss.classList.add('hiddenParagraph')
divJavascript.classList.add('contractedJavascript')
closeButtonJavascript.classList.add('HiddenCloseButton')
paragraphJavascript.classList.add('hiddenParagraph')
greyBackground.classList.add('greyBackgroundOff')

divHtml.addEventListener('click',() => clickHappened(divHtml, closeButtonHtml, paragraphHtml));
divCss.addEventListener('click', ()=> clickHappened(divCss, closeButtonCss, paragraphCss))
divJavascript.addEventListener('click', ()=> clickHappened(divJavascript, closeButtonJavascript, paragraphJavascript))

function clickHappened(element, closeButton, paragraphElement) {
    
if(!isWhichElement == undefined || !isElementContracted == true) return
alert('Executado')
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
        greyBackground.classList.remove('greyBackgroundOn')
        greyBackground.classList.add('greyBackgroundOff')
        alert('Executado true')
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
        greyBackground.classList.remove('greyBackgroundOff')
        greyBackground.classList.add('greyBackgroundOn')
        element.classList.remove(`contracted${isWhichElement}`)
        element.classList.add('expanded')
        alert('Executado false')
        isElementContracted = false                      
    }
}