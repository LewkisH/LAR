import { createElement } from './framework';

let hello = 'yolo'

let taskId = 1

const App = <body>
<section class="todoapp" amogus="su ema">
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus/>
    </header>
    <main class="main">
        <div class="toggle-all-container">
            <input class="toggle-all" type="checkbox"/>
            <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
        </div>
        <ul class="todo-list" id="todo-list"></ul>
    </main>
    <footer class="footer">
        <span class="todo-count">
            <strong></strong>
        </span>
        <ul class="filters" style="display: block">
            <li>
                <a href="#/all">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <button class="clear-completed" style="display: none">Clear completed</button>
    </footer>
</section>
<footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by Rain, Lukas and Anti</p>
    <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
    </p>
</footer>
</body>;

export default App; 
 