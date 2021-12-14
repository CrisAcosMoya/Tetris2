const container = document.querySelector('.container')
const colors = ['#CB51EE', '#0073BC', '#38B753E', '#DE365C', '09814A']

const figures = () => {
    for(let i = 0; i <= 50; i++){
        let figure = document.createElement('span') //Creamos 50 spans con javascript para ser futuramente manipulados en el codigo
        let select = Math.round(colors.length * Math.random())
        
        //Vamos a ubicar nuestros 25 elementos de manera aleatoria en nuestro container
        //Tando de manera vertical, como horizontal.
        figure.style.top = innerHeight * Math.random() + 'px'
        figure.style.left = innerWidth * Math.random() + 'px'
        figure.style.background = colors[select >= colors.length ? select - 1: select]
 
        container.appendChild(figure)

        setInterval(() => {
            figure.style.top = innerHeight * Math.random() + 'px'
            figure.style.left = innerWidth * Math.random() + 'px'  //Esta parte es muy interesante, por que hacemos que tome un numero random, lo tome de Heith o Widht segun el caso, y lo concatene con 'px' y asi dar una posicion variada en pixeles.
        }, 3000) //Jacemos un intervalo de 3 segundos, cada 3 segundos genera un numero random y de esta manera vuelva a hacer posiciones diferentes.
        //En el css hay una parte de transitions, donde usamos las trancisiones de css para usarlas junto a javascript.

    }
}

figures()