const container = document.querySelector('.container')
const colors = ['#CB51EE', '#0073BC', '#38B753E', '#DE365C']

const figures = () => {
    for(let i = 0; i <= 50; i++){
        let figure = document.createElement('span')
        let select = Math.round(colors.length * Math.random())
        
        //Vamos a ubicar nuestros 25 elementos de manera aleatoria en nuestro container
        //Tando de manera vertical, como horizontal.
        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1: select]
 
        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'
        }, 3000)

    }
}

figures()