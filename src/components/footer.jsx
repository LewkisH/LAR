import { createElement } from '../framework';

export const FooterButtons = () => {
    return <footer class="footer">
                <span class="todo-count">
                    <strong></strong>
                </span>
                <ul class="filters" style="display: block">
                    <li>
                        <a href="#/all">All</a>
                    </li>
                    <li>
                        <a href="#/active" >Active</a>
                    </li>
                    <li>
                        <a href="#/completed">Completed</a>
                    </li>
                </ul>
                <button class="clear-completed" style="display: none">Clear completed</button>
            </footer>
}