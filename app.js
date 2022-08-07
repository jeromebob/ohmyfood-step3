/*selection du loader via docqueryselector*/
const loader = document.querySelector('loader-box');
/*Quand tu auras chargé tout le site (load)*/
window.addEventListener('load', () =>
    /*tu rajoute à .loader la class fondu-loader*/
    loader.classList.add('fondu-loader')
)

/*selection du dot via docqueryselector*/
const dot = document.querySelector('dot');
/*Quand tu auras chargé tout le site (load)*/
window.addEventListener('load', () =>
    /*tu rajoute à .loader la class fondu-loader*/
    dot.classList.add('fondu-loader')
)