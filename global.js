// referenciando as TAGs HTML
const body = document.body
const resp = document.querySelector('span#resp')
const me = document.querySelector('span')


// função responsável por manter o foco no cursor
const focus = (event) => {

    // pegando a posição do cursor
    let x = event.clientX
    let y = event.clientY

    // dizendo para onde os elementos devem ir
    resp.style.left = `${x - 120}px`
    resp.style.top = `${y}px`

    me.style.left = `${x}px`
    me.style.top = `${y - 70}px`
}


// esperando por qualquer movimento do mouse
body.addEventListener('mousemove', focus)
