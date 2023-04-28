/*
we want a function that will move the task from the incomplete list to the complete list when the user clicks the checkbox and when the user clicks the checkbox, the task will be removed from the incomplete list and added to the complete list 

we need a function that checks if the check box is checked
probably need a useState hook to keep track of the state of the checkbox

*/

import React from "react";


function TodoList({list, complete, setList, setComplete}) {
  const moveToCompleted = (index) => { //this function is called when the checkbox is clicked in the incomplete list
   
    //creates a new array of the updated list that filters out the item that is being moved to the completed list
    const updatedList = list.filter((item, i) => i !== index); 
    updatedList.completed = !updatedList.completed //flips the completed property to the opposite of what it was
    

    const itemToMove = list[index]; //this creates the item that is being moved to the completed list
    itemToMove.completed = !itemToMove.completed //flips the completed property to the opposite of what it was

    setList(updatedList); //this sets the state of the incomplete list to the updated list
    setComplete([...complete, itemToMove]); //this spreads the completed list and adds the item being moved to the end of the array
  };


  //does the same above but moving completed tasks to the incomplete list
  const moveToToDo = (index) => { 

    const updatedList = complete.filter((item, i) => i !== index); 
    updatedList.completed = !updatedList.completed 

    const itemToMove = complete[index]; 
    itemToMove.completed = !itemToMove.completed 

    setList([...list, itemToMove]); 
    setComplete([...updatedList]); 
  };

  return (
    <body>
      <div id="lists-container">
        <div id="toDoListDiv" className="list-container">
          <h3>Oustanding Tasks</h3>
          <ul>
            {list.map((item, index) => (
              <li id="ToDoListLi" key={index}>
              <label className = 'date'></label>
              🔴 {item.dueDate}
                <label className = 'boxItems'>
                  {item.task}
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => moveToCompleted(index)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div id="completedListDiv" className="list-container">
          <h3>Completed Tasks</h3>
          <ul>
            {complete.map((item, index) => (
              <li id="completedListLi" key={index}>
              <label className = 'boxItems2'>
                  🟢 {item.task}
                  <input
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => moveToToDo(index)}
                  />
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </body>
  );
}


export default TodoList;