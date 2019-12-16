const textureBackground = document.getElementsByTagName('body')[0];
const textureSelection = document.getElementById('texture-selector');

textureSelection.addEventListener('change', () => {
    /* textureBackground.style.backgroundImage = "url(" + event.target.value + ")" */
    textureBackground.style.backgroundImage = `url(${event.target.value})`
})