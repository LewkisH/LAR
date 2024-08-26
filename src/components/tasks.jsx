import { LAR } from '../framework';

export const Tasks = (prop) => {
    
    let completed = prop.tasks.filter(task => task.completed === true)
    let active = prop.tasks.filter(task => task.completed === false)

    let tasks = prop.tasks
    if (prop.filter === "active"){
        tasks = active
    } else if (prop.filter === "completed"){
        tasks = completed
    }
    
    
    function toggleTaskCompletion(taskId) {
        const updatedTasks = prop.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task);
        prop.changeAllTasks(tasks => tasks = updatedTasks)
    }

    function removeTask(taskId) {
        const updatedTasks = prop.tasks.filter(task => task.id !== taskId);
        prop.changeAllTasks(tasks => tasks = updatedTasks)
    }


    function editTask(taskId, newText) {
        const updatedTasks = prop.tasks.map(task => {
        if (task.id === taskId) {
            return { ...task, text: newText };
        }
        return task;});

        prop.changeAllTasks(tasks => tasks = updatedTasks)
    }
    
    function finishEditingTask(taskId, newText) {
        if (newText.trim() !== '') {
        editTask(taskId, newText);
        } else {
            console.log("i want to remove task")
        removeTask(taskId)
        }
    }   

    const rows = []
    for (let i = 0; i < tasks.length; i++) {
        rows.push(<Task task={tasks[i]} 
            toggleTaskCompletion={toggleTaskCompletion} 
            removeTask={removeTask} 
            editTask={editTask} 
            finishEditingTask={finishEditingTask}/>)
    }
    return (<div>{rows}</div>)
}

const Task = (prop) =>{
    
    const [isWritable, setIsWriteable] = LAR.useState(false)

      function startEditingTask() {
        setIsWriteable(c => c = true)
        let inputElement
        setTimeout(() => {inputElement = document.querySelector('input.edit'); //epic framework things
            inputElement.focus()
            inputElement.select()
        }, 50)
        
      }

    return(<li data-id={prop.task.id} class={(prop.task.completed ? "completed" : "")}>
            <div class="view" onDblClick={() => startEditingTask() }>
            {isWritable ? (<input type="text" class="edit" value={prop.task.text} 
                onBlur={() =>{
                        let inputElement = document.querySelector('input.edit')
                        prop.finishEditingTask(prop.task.id, inputElement.value)
                        setIsWriteable(c => c = false)
                    }}
                
                onKeydown={(event) => {
                    if (event.key === 'Enter') {
                        let inputElement = document.querySelector('input.edit')
                        prop.finishEditingTask(prop.task.id, inputElement.value);
                        inputElement.blur() // setIsWriteable false twice muidu
                }}} 
                ></input>) : (<div> 
                <input class="toggle" type="checkbox" onClick={() => prop.toggleTaskCompletion(prop.task.id)}/>
                <label>{prop.task.text}</label>
                <button class="destroy" onClick={() => prop.removeTask(prop.task.id)}></button></div>)}
            </div>
        </li>
        
        )}
    