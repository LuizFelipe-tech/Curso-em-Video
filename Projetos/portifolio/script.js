var html = document.querySelector('#html');
var imghtml = document.querySelector('#imghtml');
var controlL = 0;
//var closeB = document.createElement('img');
//closeB.setAttribute('src', 'image/fechar.png')
html.addEventListener('click', clicarHTML);

function clicarHTML() {
    if (controlL == 0) {
        html.style.transitionDuration = '2s';
        html.style.width = '500px';
        html.style.height = '250px';
        html.style.position = 'absolute';
        html.style.top = '50%';
        html.style.left = '50%';
        html.style.transform = 'translateX(-50%)';
        imghtml.style.display = 'block';
        imghtml.style.margin = 'auto';
        controlL = 1;
        //html.appendChild(closeB)
        //closeB.style.width = '50px'
    }
}