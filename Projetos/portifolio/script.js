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
var imgJavascript = document.querySelector('#javascriptimg')
var paragraphJavascript = document.querySelector('#paragraphJavascript')
var closeButtonJavascript = document.querySelector('#closeButtonJavascript')

var greyBackground = document.querySelector('#greyBackground')
var isElementContracted = true;
var isWhichElement = undefined

divHtml.classList.add('contractedHtml')
divCss.classList.add('contractedCss')
divJavascript.classList.add('contractedJavascript')
closeButtonHtml.classList.add('HiddenCloseButton')
closeButtonCss.classList.add('HiddenCloseButton')
closeButtonJavascript.classList.add('HiddenCloseButton')
paragraphHtml.classList.add('hiddenParagraph')
paragraphCss.classList.add('hiddenParagraph')
paragraphJavascript.classList.add('hiddenParagraph')
imgHtml.classList.add('imgContracted')
greyBackground.classList.add('greyBackgroundOff')

    
divHtml.addEventListener('click',() => clickHappened(divHtml, closeButtonHtml, paragraphHtml));
divCss.addEventListener('click', ()=> clickHappened(divCss, closeButtonCss, paragraphCss))
divJavascript.addEventListener('click', ()=> clickHappened(divJavascript, closeButtonJavascript, paragraphJavascript))

function clickHappened(element, closeButton, paragraphElement) {
console.log(isWhichElement)
if(!isWhichElement == undefined || !isElementContracted == true) return;
    elementClicked()
    function elementClicked(){
        switch (element){
            case divHtml: 
                isWhichElement = ['Html', element]
                break
            case divCss:
                isWhichElement = ['Css', element]
        }
    }
    function fechar(click){
        click.stopPropagation()
        closeButton.classList.remove('ShowedCloseButton')
        closeButton.classList.add('HiddenCloseButton')
        element.classList.remove('expanded')
        element.classList.add(`expandedToContracted${isWhichElement[0]}`)
        if(!isWhichElement[1] == element) return;
        setTimeout(function(){
            if(!isWhichElement[1] == element) return;
            console.log(isWhichElement[0])
            element.classList.remove(`expandedToContracted${isWhichElement[0]}`)
            element.classList.add(`contracted${isWhichElement[0]}`)
        }, 2001)
        paragraphElement.classList.remove('showParagraph')
        paragraphElement.classList.add('hiddenParagraph')
        greyBackground.classList.remove('greyBackgroundOn')
        greyBackground.classList.add('greyBackgroundOff')
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
        element.classList.remove(`contracted${isWhichElement[0]}`)
        element.classList.add('expanded')
        isElementContracted = false                      
    }
}
