const lottie = require('lottie-web')

lottie.loadAnimation({
    container: document.querySelector('#test'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './src/lib/data.json' // the path to the animation json
});

