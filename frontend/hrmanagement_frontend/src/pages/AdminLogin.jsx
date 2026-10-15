import {useState} from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    let [error,setError]=useState("")

    let navigate = useNavigate()

    let login = (event) => {
        event.preventDefault()
        if(username === "admin" && password === "admin") {
            console.log("Login successful")
            navigate("/adminhome")
        } else {
            console.log("Login failed")
            setError("Invalid credentials")
        }
    }
    return (
        <div>
            <form onSubmit={login}>
                <input 
                    type="text" 
                    placeholder="Enter your username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                <input 
                    type="password" 
                    placeholder="Enter your password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button type="submit">Login</button>
            </form>
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    )
}

export default AdminLogin