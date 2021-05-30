import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    const authObject = {
      "Project-ID": "6a8e8d7e-2581-4edf-9edc-cac5f607b7d4",
      "User-Name": userName,
      "User-Secret": password,
    }
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      })
      localStorage.setItem("userName", userName)
      localStorage.setItem("password", password)

      window.location.reload()
    } catch (error) {
      setError("Oops, incorrect credentials.")
    }
  }
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chatty Me</h1>
        <h5 className="demo-credentials">
          For Demo purpose, enter 'hanhngo' for user name and 'hanh123' for
          password.
        </h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="input"
            placeholder="User name"
            required
          />
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input"
            placeholder="Password"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h3 className="error">{error}</h3>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
