import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { test, expect } from "@jest/globals"
import TodoList from "./index.js"
// test 

test("display list items", (list, complete) => {
   render 
 (<TodoList {...list} {...complete}/>)
   

    const listItem = screen.getByRole ("li")
    expect(listItem).toBeInTheDocument();
  });


  // manually test out the rendered list which is pulled in from data.js 
  // example user [Hungv] has two tasks assigned. One in todolist and one in completed.
  // When .map and .filter functions runs it should render todolist with one item and completed list with one item.