//Initial variable settings || Declaração inicial de variáveis
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
var isHtmlContracting = false
var isCssContracting = false
var isJavascriptContracting = false
//Initial style settings || Configuração de estilos iniciais
divHtml.classList.add('contractedHtml')
divCss.classList.add('contractedCss')
divJavascript.classList.add('contractedJavascript')
closeButtonHtml.classList.add('hiddenCloseButton')
closeButtonCss.classList.add('hiddenCloseButton')
closeButtonJavascript.classList.add('hiddenCloseButton')
paragraphHtml.classList.add('hiddenParagraph')
paragraphCss.classList.add('hiddenParagraph')
paragraphJavascript.classList.add('hiddenParagraph')
greyBackground.classList.add('greyBackgroundOff')
//Initial events settings || Configuração inicial de eventos
divHtml.addEventListener('click',() => clickHappened(divHtml, closeButtonHtml, paragraphHtml));
divCss.addEventListener('click', ()=> clickHappened(divCss, closeButtonCss, paragraphCss))
divJavascript.addEventListener('click', ()=> clickHappened(divJavascript, closeButtonJavascript, paragraphJavascript))


function clickHappened(element, closeButton, paragraphElement) {
    switch (element){
        case divHtml:
            //Prevents the click event from being activated while the div element is not in its initial position. || Previne que o evento "click" seja ativado enquanto o elemento div não está em sua posição inicial
            if(isHtmlContracting == true) return
                element.removeEventListener('click', ()=> clickHappened(divHtml, closeButtonHtml, paragraphHtml))
                closeButton.addEventListener('click', closeHtml)
                //Set the element's close button || Coloca o botão de fechar do elemento
                function closeHtml(click){
                    isHtmlContracting  = true
                    click.stopPropagation()
                    closeButton.classList.remove('ShowedCloseButton')
                    closeButton.classList.add('hiddenCloseButton')
                    element.classList.remove('expanded')
                    element.classList.add(`expandedToContractedHtml`)
                    setTimeout(function(){
                        element.classList.remove(`expandedToContractedHtml`)
                        element.classList.add(`contractedHtml`)
                        isHtmlContracting = false
                }, 2001)
                paragraphElement.classList.remove('showParagraph')
                paragraphElement.classList.add('hiddenParagraph')
                greyBackground.classList.remove('greyBackgroundOn')
                greyBackground.classList.add('greyBackgroundOff')
                isElementContracted = true
                }
                //Reset Html to its original form || Restaura o Html para sua posição inicial
                if (isElementContracted == true) {
                    setTimeout(function() {
                        paragraphElement.classList.remove('hiddenParagraph')
                        paragraphElement.classList.add('showParagraph')
                        closeButton.classList.remove('hiddenCloseButton')
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
        if(isHtmlContracting == true) return
        console.log('Executado 2')
        closeButton.addEventListener('click', closeCss)
        function closeCss(click){
            isHtmlContracting = true
            click.stopPropagation()
            closeButton.classList.remove('ShowedCloseButton')
            closeButton.classList.add('hiddenCloseButton')
            element.classList.remove('expanded')
            element.classList.add(`expandedToContractedCss`)
            setTimeout(function(){
                element.classList.remove(`expandedToContractedCss`)
                element.classList.add(`contractedCss`)
                isHtmlContracting = false
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
                closeButton.classList.remove('hiddenCloseButton')
                closeButton.classList.add('ShowedCloseButton')
            }, 1500);
            greyBackground.classList.remove('greyBackgroundOff')
            greyBackground.classList.add('greyBackgroundOn')
            element.classList.remove(`contractedCss`)
            element.classList.add('expanded')
            isElementContracted = false                      
        }
    break;
    case divJavascript:
        if(isJavascriptContracting == true) return
        console.log('Executado 3')
        closeButton.addEventListener('click', closeJavascript)
        function closeJavascript(click){
            isJavascriptContracting = true
            click.stopPropagation()
            closeButton.classList.remove('ShowedCloseButton')
            closeButton.classList.add('hiddenCloseButton')
            element.classList.remove('expanded')
            element.classList.add(`expandedToContractedJavascript`)
            setTimeout(function(){
                element.classList.remove(`expandedToContractedJavascript`)
                element.classList.add(`contractedJavascript`)
                isJavascriptContracting = false
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
                closeButton.classList.remove('hiddenCloseButton')
                closeButton.classList.add('ShowedCloseButton')
            }, 1500);
            greyBackground.classList.remove('greyBackgroundOff')
            greyBackground.classList.add('greyBackgroundOn')
            element.classList.remove(`contractedJavascript`)
            element.classList.add('expanded')
            isElementContracted = false                      
        }
    break;
    }
}
