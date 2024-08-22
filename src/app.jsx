import { createElement, DefineRoutes, Router, Link, useState } from './framework';
import { All } from './components/all'
import { Active } from './components/active'
import { Completed } from './components/completed'


let hello = 'yoloo'

let taskId = 1

/* const HashRouter = DefineRoutes({
    '': All,
    'all': All,
    'active': Active,
    'completed': Completed,
}) */

    function Counter() {
        const [state, setState] = useState(1)
        return (
          <h1 onClick={() => setState(c => c + 1)}>
            Count: {state}
          </h1>
        )
      }

const App = () => {
    let tasks = []
    const [allTasks, changeAllTasks]= useState(tasks)

    const routes = [
        { path: "/", component: <All /> },
        { path: "/all", component: <All /> },
        { path: "/active", component: <Active /> },
        { path: "/completed", component: <Completed /> }
      ];

return (<body>
<section class="todoapp" amogus="su ema">
    <header class="header">

        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus/>
    </header>
    <main class="main">
    <Counter />
        <div class="toggle-all-container">
            <input class="toggle-all" type="checkbox"/>
            <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
        </div>
        <ul class="todo-list" id="todo-list">
            <Router routes={routes} />
        </ul>
    </main>
    <footer class="footer">
        <span class="todo-count">
            <strong></strong>
        </span>
        <ul class="filters" style="display: block">
            <li>
            <Link to="/">HomeLink</Link>
            <Link to="/completed">CompletedLink</Link>
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
</section>
<footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by Rain, Lukas and Anti</p>
    <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
    </p>
</footer>
</body>)};

export default App; 
 