import { useState } from "react";
import "./App.css";

function App() {

  const [state, setState] = useState(1);

  const action = (index) => {
    setState(index);
    console.log(index);
  }


  return (
    <div className="App">
      <div className="box">
        
        <div className="tabs">
          <div onClick={()=>action(1)} className={`${state === 1 ? 'tab active-tab' : 'tab'}`}>tab1</div>
          <div className={`${state === 2 ? 'tab active-tab' : 'tab'}`}  onClick={()=>action(2)}>tab2</div>
          <div className={`${state === 3 ? 'tab active-tab' : 'tab'}`}  onClick={()=>action(3)}>tab3</div>
        </div>

        <div className="contents">
          <div className={`${state===1 ? 'content active-content' : 'content'}`}>
            <h2>Content 1</h2>
            <p>This is content 1</p>
          </div>

          <div className={`${state===2 ? 'content active-content' : 'content'}`}>
            <h2>Content 2</h2>
            <p>This is content 2</p>
          </div>

          <div className={`${state===3 ? 'content active-content' : 'content'}`}>
            <h2>Content 3</h2>
            <p>This is content 3</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
