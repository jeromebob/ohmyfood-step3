/*selection du loader via docqueryselector*/
const loader = document.querySelector('loader');
/*Quand tu auras chargé tout le site (load)*/
window.addEventListener('load', () =>
    /*tu rajoute à .loader la class fondu-loader*/
    loader.classList.add('fondu-loader');
)
