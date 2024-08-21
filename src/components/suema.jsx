import { createElement, useState } from './../framework';
let count = 0;
let amogus = true;




export const Suema = () => {
  const [state, setState] = useState(1)

  const incrementCount = () => setState(c => c + 1);
  const resetCount = () => setState(c =>c= 0);
    
    return (
        <div className="ye">
            yoyoyooo
            <Counter count={state} incrementCount={incrementCount}/>
            <ResetCounter resetCount={resetCount}/>
        </div>
        )
    }
export function Counter({count, incrementCount}) {
        return (
            <div>
              <h1 onClick={incrementCount}>
                Count: {count}
              </h1>
            </div>
        )
       }

export function ResetCounter({ resetCount }) {
  return (
    <div>
        <button onClick={resetCount}>ResetAlumine</button>
    </div>
);
}

{/* <style>
button {
    color: red
}
</style> */}