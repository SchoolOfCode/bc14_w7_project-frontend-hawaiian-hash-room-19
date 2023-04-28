// Get the value of both input and password
/*
onChange/onSubmit -> e.target.value

*/

// Loop through login data and compare against username and password
// if true --> find common property (email) then we want to grab userData with relevant login account.
import { Outlet} from "react-router-dom";
import {userData, loginData} from '../../components/data/data.js'
import { useNavigate } from "react-router-dom";

function Login (){
    
    //a hook from react router dom that allows us to navigate to a different page
    const navigate = useNavigate(); 
    
// write a function to check details
function handleLogin(event){

    event.preventDefault() //prevents the page from refreshing
    const username = event.target.elements.username.value //is the value of the input with the id of username
    const password = event.target.elements.password.value //is the value of the input with the id of password
    let userEmail = "" // for loop loginData[i].username

    //loop through loginData array and compare username and password against the data in the array
    for (let i=0; i<loginData.length; i++){ 
        if(username === loginData[i].username && password === loginData[i].password){
            userEmail = loginData[i].email
        } if(username === loginData[i].username && password !== loginData[i].password)
        {
            alert("Password Incorrect")
        }
        else {console.log(false)}
      }
      
    //loop through userData array and compare email against the data in the array
    for (let i=0; i<loginData.length; i++){ 
      if(userEmail === userData[i].email) {
        navigate("/App", {state: {userIndex:i}}) //navigate to App page, passing in the userIndex as state, which is i

      } else {
        console.log("no")
      }
    }
}

    return (
        <>
        <div id = 'img'>
        <div id = 'loginDiv'>
            <form id ='form' onSubmit = {handleLogin}>
               <label id = 'usernameLabel'>Username: <input type="text" id = "username"></input></label>
                <label id = 'passwordLabel'>Password:<input type="password" id = "password"></input></label>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
        <Outlet />
        </>
    )
    
    
    }
    
    
    
    
    
    
    
    
    export default Login;