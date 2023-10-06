document.addEventListener('DOMContentLoaded', function(){
    const height = document.getElementById('height')
    const weight = document.getElementById('weight')
    const output = document.getElementById('output')
    const btn = document.getElementById('button')

    btn.addEventListener('click', function(){
        let h = (+height.value)/100
        let w = +weight.value
        let imt = w/(h*h)
        output.value = imt.toFixed(2)
    })
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register(sw.js)
            .then(registration => {
                console.log('SW registered', registration)
            })
            .catch(error => {
                console.log('SW failed', error)
            })
    }
})
