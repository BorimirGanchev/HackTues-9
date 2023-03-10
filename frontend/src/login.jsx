import React, {useState} from "react"
import Navbar from "./Navbar"



export default function App () {
    const {currentForm,setCurrentForm}= useState('login')
    const toggleForm = (formName) =>
    {
        setCurrentForm(formName)
    }

    return (
        <div className="App">
        <Navbar/>
        {
           currentForm === "login" ? <Login /> :<Register/>
        }
        
        </div>
    )
}

 export const Login = () =>
{
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(email)
    }

    return(
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email"  name="email"/>
            <br/>
            <label htmlFor="password">password</label>
            <br/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button>Don't have an account? Register here.</button>
    </>
    )
}

export const Register =(props) =>
{
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [name,setName]=useState('')

     const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(email)
    }
    return(
<>
        <form onSubmit={handleSubmit}>
            <label htmlFor>Full name</label>
            <input value={name} name="name" id="name" placeholder="full name"></input>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" id="email"  name="email"/>
            <br/>
            <label htmlFor="password">password</label>
            <br/>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
        </form>
        <button>Already have an account? Login here.</button>
        </>


    )

}
