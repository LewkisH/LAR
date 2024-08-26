import { LAR } from './framework';
import { All } from './components/all'
import { Active } from './components/active'
import { Completed } from './components/completed'
import { FooterButtons } from './components/footer';
import { NewTask } from './components/newtask';

const App = () => {

    const [allTasks, changeAllTasks] = LAR.useState([]);

    const routes = [
        { path: "/", component: <All/>, prop: {allTasks} },
        { path: "/all", component: <All/>, prop: {allTasks} },
        { path: "/active", component: <Active/>, prop: {allTasks} },
        { path: "/completed", component: <Completed/>, prop: {allTasks} }
      ];

return (<body>
<section class="todoapp" amogus="su ema">
    <NewTask allTasks={allTasks} changeAllTasks={changeAllTasks}/>
    <main class="main">
        <div class="toggle-all-container">
            <input class="toggle-all" type="checkbox"/>
            <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
        </div>
        <ul class="todo-list" id="todo-list">
            <LAR.Router routes={routes} />
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
 