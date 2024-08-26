import { LAR } from '../framework';

export const Completed = (prop) => {

    let completed = prop.allTasks.filter(task => task.completed === true)

        const rows = []
        for (let i = 0; i < completed.length; i++) {
            rows.push(<li>
                        <div class="view">
                            <input class="toggle" type="checkbox"/>
                            <label>{completed[i].text}</label>
                            <button class="destroy"></button>
                        </div>
                    </li>)
        }

        return (<div>{rows}</div>)
}