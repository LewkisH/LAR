import { LAR } from '../framework';

export const All = (prop) => {
    const rows = []
    for (let i = 0; i < prop.allTasks.length; i++) {
        rows.push(<li>
                    <div class="view">
                        <input class="toggle" type="checkbox"/>
                        <label>{prop.allTasks[i].text}</label>
                        <button class="destroy"></button>
                    </div>
                </li>)
    }
    return (<div>{rows}</div>)
}

//    return <li data-id="3"><div class="view"><input class="toggle" type="checkbox"/><label>Hi</label><button class="destroy"></button></div></li>

