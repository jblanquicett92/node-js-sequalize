function hola(nombre, custumCallback) {
    setTimeout(function () {
        console.log('Hi ' + nombre)
        custumCallback(nombre)
    }, 1000)
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log('bye ' + nombre)
        otroCallback()
    }, 800)
}
hola('Jorge', function(nombre){
    adios(nombre, function(){
        console.log('Done!!')
    })
})
