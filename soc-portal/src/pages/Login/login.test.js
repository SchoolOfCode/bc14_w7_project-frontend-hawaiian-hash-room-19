// import relevant files react app testing library from dom 
// identify components/elements that you want to test.
// import {render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
//import '@testing-library/jest-dom'

// test that form is displayed with username input, password and button labelled submit. 
// import relevant files react app testing library from dom 
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import { test, expect } from "@jest/globals"
import { MemoryRouter } from 'react-router-dom'; // import MemoryRouter
import Login from "./index.js"

test("display submit button", () => {
  const mock = jest.fn()
  const buttonText = "Submit"
  render(
    <MemoryRouter>
      <Login form={mock} buttonText={buttonText}/>
    </MemoryRouter>
  )
  const displayButton = screen.getByText(buttonText)
  expect(displayButton).toBeInTheDocument();
});

test("display input field are displayed correctly", () => {
    const mock = jest.fn()
 const usernameField = "Username:"
 const passwordField = "Password:"
    render(
      <MemoryRouter>
        <Login form={mock} usernameField = {usernameField} passwordField= {passwordField}/>
      </MemoryRouter>
    )
    const inputUsername = screen.getByLabelText (usernameField)
    const inputPassword = screen.getByLabelText (passwordField)
    expect(inputUsername).toBeInTheDocument();
    expect (inputPassword).toBeInTheDocument();
  });

//act
 //
//assert
 //


// test if when submit is entered with empty field nothing happens
// test that shows alert when password in incorrectly. 
// test to see if when fields are entered correctly, navigates to user profile page 
//arrange
 //
//act
 //
//assert
 //