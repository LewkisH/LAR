import { render } from './framework';
import App from './app';
import '../public/styles.css';

const rootElement = document.getElementById("root");
render(App, rootElement);