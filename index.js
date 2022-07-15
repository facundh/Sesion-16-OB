const parrafos = document.querySelectorAll('.parrafo');
const secciones = document.querySelectorAll('.seccion');

// Eventos: Como parrafos es una lista con cada parrafo puedo recorrerlo con el for each
parrafos.forEach(parrafo => {
    parrafo.addEventListener('dragstart', (e) => {
        
        console.log('Estoy arrastrando el parrafo ' + parrafo.innerText);
        parrafo.classList.add('dragging');
        e.dataTransfer.setData("id", parrafo.id)
        const elemento = document.querySelector('.img-fantasma');
        event.dataTransfer.setDragImage(elemento, 0, 0);
    })
    parrafo.addEventListener('dragend', () => {
        // console.log('Fin de arrastre');
        parrafo.classList.remove('dragging');
    })
})

secciones.forEach(seccion => {
    seccion.addEventListener('dragover', event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'none'
        // console.log('dragover');

    })
    seccion.addEventListener('drop', (e) => {
        console.log('drop');
        const idParrafo = e.dataTransfer.getData("id");
        // console.log(`parrafo-id: ${idParrafo}` );
        const parrafo = document.getElementById(idParrafo);
        seccion.appendChild(parrafo);
    })
})

const allowDrop = e => {
    e.preventDefault();
}

const drag = e => {
    e.dataTransfer.setData('Text', e.target.id);
}

const drop = e => {
    e.preventDefault();
    const data = e.dataTransfer.getData('Text');
    const el = document.getElementById(data);
    el.parentNode.removeChild(el);
}