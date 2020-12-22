import React from'react';
import {useSelector,useDispatch} from 'react-redux';
import { incrementbird } from'../../store/birds/birds';
import './App.css';
function App(){
    const birds = useSelector(state=>state.birds);
    const dispatch =useDispatch();
    return(
        <div className="Wrapper">
            <h1>Birds  List</h1>
            <form>
                <label>
                    <p>
                        Add Bird
                    </p>
                    <input type="text" />
                </label>
            </form>
            <ul>
                {birds.map(bird=>(
                    <li key={bird.name}>
                        <h3>{bird.name}</h3>
                    <div>
                    Views: {bird.views} 
                    <button onClick={()=> dispatch(incrementbird(bird.name))}><span role="img" aria-label="add">➕</span></button>   
                    </div>
                    </li>
                ))}
            </ul>
        </div>
    ) 
}
export default App