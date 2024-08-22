import { createElement, DefineRoutes, Router, Link, useState } from './framework';
import { All } from './components/all'
import { Active } from './components/active'
import { Completed } from './components/completed'
import { FooterButtons } from './components/footer';
import { NewTask, taskId, tasks } from './components/newtask';


const App = () => {

    const routes = [
        { path: "/", component: <All /> },
        { path: "/all", component: <All /> },
        { path: "/active", component: <Active tasks={tasks} /> },
        { path: "/completed", component: <Completed /> }
      ];

return (<body>
<section class="todoapp" amogus="su ema">
    <NewTask/>
    <main class="main">
        <div class="toggle-all-container">
            <input class="toggle-all" type="checkbox"/>
            <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
        </div>
        <ul class="todo-list" id="todo-list">
            <Router routes={routes} />
        </ul>
    </main>
    <FooterButtons />
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
 