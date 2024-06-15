import './App.css';
import CakeContainer from './components/CakeContainer';

//import Task1 from './components/Task_all/Task1';
// import Lacture2 from './components/react_list_rendering/Lacture2'
// import Use_State from './components/Task_all/Use_state';
// import Coffee from './components/Task_all/Coffee';
// import Zeronumber from './components/Task_all/Zeronumber';
// import './components/Task_all/Z_n.css'



const data = createContext()
const data1 = createContext()

/* contextAPI :- createContext  , Provider   ,Consumer */

function App() {

  // const name = "Dhrumil"
  // const age = 22
  return (
    // <Task1/>
    // <Lacture2/>6
    // <Use_State/>
    // <Coffee/>
    // <Zeronumber/>
    // <data.Provider value={name}>
    //   <data1.Provider value={age}>
    //     <Com_A />
    //   </data1.Provider>
    // </data.Provider>
    
    <CakeContainer/>
    
   


  );
}

export default App;
export { data, data1 }
