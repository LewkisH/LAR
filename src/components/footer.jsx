import { LAR } from '../framework';

export const FooterButtons = (props) => {

    let text = `${props.taskCount} item${1 === props.taskCount ? "" : "s"} left!`;

    function clearCompleted() {
        // Create an updated tasks array without the completed tasks
        const updatedTasks = props.allTasks.filter(task => !task.completed);
        // Update the state with the updated tasks array
        props.changeAllTasks(tasks => tasks = updatedTasks) 

        console.log(updatedTasks)
      }
      

    return <footer class="footer" style={{display: props.showFooter}}>
                <span class="todo-count">
                    <strong>{text}</strong>
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
                <button class="clear-completed" style={{display: props.showClearButton}} onClick={() => clearCompleted()}>Clear completed</button>
            </footer>
}