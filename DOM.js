const title = document.createElement('h1')
title.innerText = 'hola hades'


const button = document.createElement
('button')
button.innerText = 'click me'

button.addEventListener('click', function
    (){
        title.innerText = 'hola hades, actualizado'
        alert('se realizo un click')
    }
)

document.body.append(title)
document.body.append(button)