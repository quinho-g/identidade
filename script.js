const objeto = document.getElementById('item')
window.addEventListener("mousemove", (seta)=> {
    const X = seta.pageX
    const Y = seta.pageY
    objeto.classList.add('item')
    objeto.style.top = `${Y - 35}px`
    objeto.style.left = `${X - 25}px`
    document.body.appendChild(objeto)
})


window.addEventListener("click", (seta)=> {
    const X = seta.pageX
    const Y = seta.pageY
    objeto.classList.add('item')
    objeto.style.top = `${Y - 35}px`
    objeto.style.left = `${X - 25}px`
    document.body.appendChild(objeto)
})


