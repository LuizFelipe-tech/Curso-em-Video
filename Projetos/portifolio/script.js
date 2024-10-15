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
    //if(!isWhichElement == undefined || !isElementContracted == true) return;
    switch (element){
        case divHtml:
            console.log('Executado 1')
            closeButton.addEventListener('click', fechar)
            function fechar(click){
                click.stopPropagation()
                closeButton.classList.remove('ShowedCloseButton')
                closeButton.classList.add('HiddenCloseButton')
                element.classList.remove('expanded')
                element.classList.add(`expandedToContractedHtml`)
                setTimeout(function(){
                    element.classList.remove(`expandedToContractedHtml`)
                    element.classList.add(`contractedHtml`)
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
                }, 1500);
                greyBackground.classList.remove('greyBackgroundOff')
                greyBackground.classList.add('greyBackgroundOn')
                element.classList.remove(`contractedHtml`)
                element.classList.add('expanded')
                isElementContracted = false                      
            }
        break;
    case divCss:
        console.log('Executado 2')
        closeButton.addEventListener('click', fechar)
        function fechar(click){
            click.stopPropagation()
            closeButton.classList.remove('ShowedCloseButton')
            closeButton.classList.add('HiddenCloseButton')
            element.classList.remove('expanded')
            element.classList.add(`expandedToContractedHCss`)
            setTimeout(function(){
                element.classList.remove(`expandedToContractedCss`)
                element.classList.add(`contractedCss`)
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
            }, 1500);
            greyBackground.classList.remove('greyBackgroundOff')
            greyBackground.classList.add('greyBackgroundOn')
            element.classList.remove(`contractedCss`)
            element.classList.add('expanded')
            isElementContracted = false                      
        }
    break
    }
}
