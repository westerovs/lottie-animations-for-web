const anim = require('lottie-web')

anim.loadAnimation({
    container: document.querySelector('#lottie-test'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './src/lottie-animation/designer.json'
});

