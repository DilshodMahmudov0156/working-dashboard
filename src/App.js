import './App.css';
import RouterPart from "./parts/router-part";
import {createStore} from "./redux/create-store";
import {rootReducer} from "./redux/root-reducer";
import {useState} from "react";

function App() {
    const [reduxState, setReduxState] = useState(0);
    const store = createStore(rootReducer, 0);
    window.store = store;
    const increment  = () => {
        store.dispatch({type: "INCREMENT"});
    }
    store.subscribe(() => {
        console.log(store.getState());
    })

    return (
        <div className="App">
            <RouterPart/>
        </div>
    );
}

export default App;
