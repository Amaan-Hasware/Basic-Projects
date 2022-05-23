const nerdFace =document.querySelector('.closed')
const smartFace =document.querySelector('.open')

// Event Listener
nerdFace.addEventListener('click', ()=>{
    if(smartFace.classList.contains('open')){
        smartFace.classList.add('active')
        nerdFace.classList.remove('active')
    }
})

smartFace.addEventListener('click', ()=>{
    if(smartFace.classList.contains('open')){
        smartFace.classList.remove('active')
        nerdFace.classList.add('active')
    }
})