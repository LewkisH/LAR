import { LAR } from '../framework';

export const All = (prop) => {

    // Toggle the completion status of a task
function toggleTaskCompletion(taskId) {

    // Create an updated tasks array with the toggled task status
    const updatedTasks = prop.allTasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    // Update the state with the updated tasks array
    prop.changeAllTasks = updatedTasks
    console.log("taskid completed", updatedTasks)
  }

    const rows = []
    for (let i = 0; i < prop.allTasks.length; i++) {
        rows.push(<li>
                    <div class="view">
                        <input class="toggle" type="checkbox" onClick={() => toggleTaskCompletion(prop.allTasks[i].id)}/>
                        <label>{prop.allTasks[i].text}</label>
                        <button class="destroy"></button>
                    </div>
                </li>)
    }
    return (<div>{rows}</div>)
}
