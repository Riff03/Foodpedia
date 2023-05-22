let open = false

document.querySelector('.menu-trigger').addEventListener('click', function() {
    if(!open){
        document.querySelector('menu').setAttribute('style','transform','translateX(0)')
        document.querySelector('.search-box').setAttribute('style','display: block')
    }else{
        document.querySelector('.menu').setAttribute('style','transform','translateX(-100%)')
        document.querySelector('.search-box').setAttribute('style','display: none')
    }
    open=!open
})

const variableA = 10
let variableB = 20
