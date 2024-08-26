import { LAR } from '../framework';

export const Tasks = (prop) => {

    function toggleTaskCompletion(taskId) {
        const updatedTasks = prop.tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task);
        prop.changeAllTasks(tasks => tasks = updatedTasks)
    }

    let completed = prop.tasks.filter(task => task.completed === true)
    let active = prop.tasks.filter(task => task.completed === false)

    let tasks = prop.tasks
    if (prop.filter === "active"){
        tasks = active
    } else if (prop.filter === "completed"){
        tasks = completed
    }

function removeTask(taskId) {
    const updatedTasks = prop.tasks.filter(task => task.id !== taskId);
    prop.changeAllTasks(tasks => tasks = updatedTasks)
}

    const rows = []
    for (let i = 0; i < tasks.length; i++) {
        rows.push(<Task task={tasks[i]} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />)
    }
    return (<div>{rows}</div>)
}

const Task = (prop) =>{

      function startEditingTask() {
        setIsWriteable(c => c = true)
        let inputElement
        setTimeout(()=>{inputElement = document.querySelector('input.edit'); //epic framework things
            inputElement.focus()
            inputElement.select()
        }, 40)
            
        // inputElement.onblur = () => finishEditingTask(prop.task.id, inputElement.value)
        inputElement.onKeydown = (event) => { 
            if (event.key === 'Enter') {
                finishEditingTask(prop.task.id, inputElement.value)
                setIsWriteable(c => c = false)
        }}

      }


      function editTask(taskId, newText) {
        const updatedTasks = prop.allTasks.map(task => {
          if (task.id === taskId) {
            return { ...task, text: newText };
          }
          return task;
        });
        prop.changeAllTasks(tasks => tasks = updatedTasks)
      }
      
      function finishEditingTask(taskId, newText) {
        if (newText.trim() !== '') {
          editTask(taskId, newText);
        } else {
          removeTask(taskId)
        }
      }      

    const [isWritable, setIsWriteable] = LAR.useState(false)

    return(<li data-id={prop.task.id} class={isWritable ? "editing" : (prop.task.completed ? "completed" : "")}>
            <div class="view" onDblClick={() => startEditingTask() }>
                        <input class="toggle" type="checkbox" onClick={() => prop.toggleTaskCompletion(prop.task.id)}/>
                        <label>{prop.task.text}</label>
                        <button class="destroy" onClick={() => prop.removeTask(prop.task.id)}></button>
            </div>
            {isWritable ? (<input type="text" class="edit" value={prop.task.text}></input>
            ) : (<div></div>)}
        </li>
        )}



/*
  const listItem = document.querySelector(`li[data-id="${task.id}"]`);
  if (!listItem) return;


  const editInput = document.createElement('input');
  editInput.type = 'text';
  editInput.className = 'edit';
  editInput.value = task.text;

  // Replace the label with the input field
  listItem.appendChild(editInput);
  listItem.className = 'editing'

  // Focus and select the text in the input field
  editInput.focus();
  editInput.select();

  // Handle the input field's blur and keydown events
  editInput.onblur = () => finishEditingTask(task.id, editInput.value);
  editInput.onkeydown = (event) => {
    if (event.key === 'Enter') {
      finishEditingTask(task.id, editInput.value);
      listItem.className = ''
    } else if (event.key === 'Escape') {
      renderTasks();
      listItem.className = ''
    }
  };
}
    return(<li data-id={prop.task.id} class={isWritable ? "editing" : (prop.task.completed ? "completed" : "")}>
            <div class="view" onDblClick={() => startEditingTask()}>
                        <input class="toggle" type="checkbox" onClick={() => prop.toggleTaskCompletion(prop.task.id)}/>
                        <label>{prop.task.text}</label>
                        <button class="destroy" onClick={() => prop.removeTask(prop.task.id)}></button>
            </div>
            {isWritable ? (<input class="edit"></input>
            ) : (<div></div>)}
        </li>
        )}





{isWritable ? (
                    <input>lol</input>
                ) : (
                    <>
                        <input className="toggle" type="checkbox" data-testid="todo-item-toggle" checked={completed} onChange={toggleItem} />
                        <label data-testid="todo-item-label" onDoubleClick={handleDoubleClick}>
                            {title}
                        </label>
                        <button className="destroy" data-testid="todo-item-button" onClick={removeItem} />
                    </>
                )}
                    
                
 


         
                */