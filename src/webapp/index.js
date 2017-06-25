import 'isomorphic-fetch';
import App from './App';

document.addEventListener('DOMContentLoaded', () => {
    window.App = new App({
        containerId: 'reactApp',
        serverPath: 'http://localhost:3000/api',
    });
    window.App.init();
});
