
import React, {useState} from "react";
import axios from 'axios'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [formState, setFormState] = useState({
    username:"Lambda School",
    password:"i<3Lambd4",
    id: Date.now()
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChanges = (ev) => {
    console.log("Changing: ", ev.target.name)
    console.log("To: ", ev.target.name)
    setFormState({
      ...formState,
      [ev.target.name]: ev.target.value
    })
  }

  const login = (ev) => {
    ev.preventDefault();
    setIsLoading(true);
    console.log("login fired: ", login)
    axios.post("http://localhost:5000/api/login", formState)
      .then( res => {
        console.log(res)
        localStorage.setItem("token", res.data.payload)
        props.history.push("/bubblepage")
        setIsLoading(false);
        setFormState({
          ...formState,
              username:"",
              password:"",
        })
      })
      .catch( err => {
        console.log(err)
        setIsLoading(false);
      })
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
      <h4>Login here!</h4>
        <form onSubmit={login}>
          <label>
            <input 
              type="text"
              name="username"
              value={formState.username}
              onChange={handleChanges}
              placeholder = "Lambda School"
              />
          </label>
          <label>
            <input 
              type="text"
              name="password"
              value={formState.password}
              onChange={handleChanges}
              placeholder = "i<3Lambd4"
              />
          </label>
          <button>Login</button>
          {(isLoading ? <p>Logging in...</p> : "")}
        </form>
      </div>
    </>
  );
};

export default Login;
