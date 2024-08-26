import { createElement } from '../framework';
import { LAR } from '../framework';

let taskId = 1

export let tasks = [];

export const NewTask = (props) => {
  
    const handleKeyDown = (event) => {
        if (event.key === 'Enter' || event.key === 13) {
        addTask()
        } 
    }
    
    const addTask = () => {
    
        const taskNameInput = document.getElementsByClassName('new-todo')[0]; // Get the first element with the class 'new-todo'
        const taskName = taskNameInput.value.trim();
        
        if (taskName) {
            taskNameInput.value = ''; 
        
            const newTask = {
                id: taskId,
                text: taskName, 
                completed: false 
              };
            
        taskId++
    
        props.changeAllTasks([...props.allTasks, newTask]);
        }
    }

    tasks = props.allTasks

    return  <header class="header">
                <h1>todos</h1>
                <input class="new-todo" placeholder="What needs to be done?"  onKeydown={(event) => handleKeyDown(event)} autofocus/>
            </header>
}