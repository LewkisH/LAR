import { LAR } from '../framework';

export const Completed = (prop) => {
    let completed = prop.allTasks.filter(task => task.completed)
        const rows = []
        for (let i = 0; i < completed; i++) {
            rows.push(<li data-id="3">
                        <div class="view">
                            <input class="toggle" type="checkbox"/>
                            <label>{completed.text}</label>
                            <button class="destroy"></button>
                        </div>
                    </li>)
        }
        return (<div>{rows}</div>)

}