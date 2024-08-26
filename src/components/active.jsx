import {LAR} from '../framework';

import { tasks as newTaskTasks } from './newtask';

export const Active = (prop) => {

    return <hi>ACTIVE</hi>
    console.log("ACTIVE", prop)
    // const [allTasks, changeAllTasks] = useState([]);
    
    // console.log("alltasks:",allTasks)
    // Filter tasks to only show those that are not completed
    const filteredTasks = newTaskTasks.filter(task => !task.completed);
    console.log("filteredTasks in active:",filteredTasks.length)
    return (
        <ul id="todo-list" className="todo-list">
            {filteredTasks.forEach(task => ( // gpt arvas et map for each asemel aga see tra ei tööta

                <li key={task.id} className={task.completed ? 'completed' : ''} data-id={task.id}>
                    <div className="view">
                        <input
                            className="toggle"
                            type="checkbox"
                            checked={task.completed}
                            onClick={() => toggleTaskCompletion(task.id)}
                        />
                        <label onDoubleClick={() => startEditingTask(task)}>{task.text}</label>
                        <button className="destroy" onClick={() => removeTask(task.id)}></button>
                    </div>
                </li>
            ))}
        </ul>
    );
};