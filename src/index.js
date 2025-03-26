import './index.scss';
// import jQuery from 'jquery';
import headerAnim from './js/components/header';
import main from './js/components/main';
import initMap from './js/components/about';
import scroll from './js/components/smoothScroll';

window.addEventListener('DOMContentLoaded', () => {
    try {
        headerAnim();
    } catch {}
    try {
        main();
    } catch {}
    try {
        initMap();
    } catch {}
    try {
        scroll();
    } catch {}
});
