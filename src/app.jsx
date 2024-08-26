import { LAR } from './framework';
import { FooterButtons } from './components/footer';
import { NewTask } from './components/newtask';
import { Tasks } from './components/tasks';


const App = () => {

    const [allTasks, changeAllTasks] = LAR.useState([]);

    let active = allTasks.filter(task => task.completed === false)

    let showFooter = allTasks.length > 0 ? "block" : "none"

    let hasCompletedTasks = allTasks.some(task => task.completed)

    let showClearButton = hasCompletedTasks ? "block" : "none"

    const routes = [
        { path: "/", component: <Tasks/>, prop: {tasks: allTasks, changeAllTasks} },
        { path: "/all", component: <Tasks/>, prop: {tasks: allTasks, changeAllTasks} },
        { path: "/active", component: <Tasks/>, prop: {tasks: allTasks, changeAllTasks, filter:"active"} },
        { path: "/completed", component: <Tasks/>, prop: {tasks: allTasks, changeAllTasks, filter:"completed"} }
      ];


    function toggleAllCompleted() {
        const areAllCompleted = allTasks.every(task => task.completed);
        const updatedTasks = allTasks.map(task => ({...task, completed: !areAllCompleted }));
        changeAllTasks(tasks => tasks = updatedTasks);
      }

return (<body>
<section class="todoapp">
    <NewTask allTasks={allTasks} changeAllTasks={changeAllTasks}/>
    <main class="main">
        <div class="toggle-all-container">
            <input class="toggle-all" type="checkbox" onClick={() => toggleAllCompleted()}/>
            <label class="toggle-all-label" for="toggle-all">Mark all as complete</label>
        </div>
        <ul class="todo-list" id="todo-list">
            <LAR.Router routes={routes} changeAllTasks={changeAllTasks} />
        </ul>
    </main>
    <FooterButtons showFooter={showFooter} taskCount={active.length} showClearButton={showClearButton} allTasks={allTasks} changeAllTasks={changeAllTasks}/>
</section>
<footer class="info">
    <p>Double-click to edit a todo</p>
    <p>Created by Lukas, Anti and Rain</p>
    <p>
        Part of <a href="http://todomvc.com">TodoMVC</a>
    </p>
</footer>
</body>)};

export default App; 
 