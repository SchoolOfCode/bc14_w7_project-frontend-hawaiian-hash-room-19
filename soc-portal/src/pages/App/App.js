import './App.css';
import Bio from "../../components/Bio"
import TodoList from "../../components/TodoList"
import { useState } from 'react';
import { useEffect } from 'react';
import {userData} from "../../components/data/data.js"
import { useLocation } from "react-router-dom";

/* using the database created, we want to create a function that will pull down data from the database and display it on the page, when the checkbox is checked, change completed in the database to be true

use useState to take in the data from the database and display the objects within the array on the page

push the task object into an array and display the array on the page

run through to-do list array and select completed key
if completed === true then add object to second array and remove from first. 


*/


function App() {

    const {state} = useLocation(); //useLocation hook from react router dom that allows us to access the state passed in from the previous page
    const {userIndex} = state; //destructure the userIndex from the state
    const [list, setList] = useState(userData[userIndex].toDoList);
    const [complete, setComplete] = useState ([])
    const [pInfo, setPInfo] = useState(userData[userIndex])

  useEffect(() => {
    const completedItems = list.filter(item => item.completed);
    const toDoItems = list.filter(item => !item.completed);
    setComplete(completedItems);
    setList(toDoItems);
  }, []);
    


  // console.log(userData); // add this line to check the value of userData


  return (
    
    <div className="App">
        <Bio pInfo={pInfo} />
      <div className="todolist-column">
        <TodoList userData={userData} setList={setList} setComplete={setComplete} list={list} complete={complete} />
      </div>
    </div>
  );
}

export default App;
