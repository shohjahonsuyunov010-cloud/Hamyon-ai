import { useState } from "react"
import { Routes, Route, Link } from "react-router-dom"

function Home() {
  return (
    <div className="card">
      <h1>💰 Hamyon-AI</h1>
      <p>Moliyaviy savodxonlik platformasi</p>

      <div style={{ marginTop: 20 }}>
        <Link className="btn btn-primary" to="/lessons">
          📚 Darslarni boshlash
        </Link>
      </div>
    </div>
  )
}

function Lessons() {
  const lessons = [
    { id: 1, title: "Pul nima?" },
    { id: 2, title: "Daromad turlari" },
    { id: 3, title: "Byudjet tuzish" }
  ]

  return (
    <div className="card">
      <h2>📚 Darslar</h2>

      {lessons.map((l) => (
        <div key={l.id} style={{ marginTop: 10 }}>
          <div className="card">
            {l.title}
          </div>
        </div>
      ))}
    </div>
  )
}

function Dashboard() {
  return (
    <div className="card">
      <h2>📊 Dashboard</h2>

      <p>📈 Progress: 25%</p>
      <p>🪙 Coins: 120</p>
      <p>🔥 Streak: 3 kun</p>

      <div className="card" style={{ marginTop: 15 }}>
        💡 Bugungi tavsiya: 1 ta dars o‘qish
      </div>
    </div>
  )
}

function AI() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "Salom! Men Hamyon-AI mentoriman 💡 Savol bering." }
  ])
  const [input, setInput] = useState("")

  const send = () => {
    if (!input) return

    const userMsg = { role: "user", text: input }
    const aiMsg = {
      role: "ai",
      text: "Bu oddiy tushuntirish: " + input + " — moliyaviy tushuncha sifatida o‘rganiladi."
    }

    setMessages([...messages, userMsg, aiMsg])
    setInput("")
  }

  return (
    <div className="card">
      <h2>🤖 AI Mentor</h2>

      <div style={{ minHeight: 200 }}>
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role === "ai" ? "AI:" : "Siz:"}</b> {m.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Savol yozing..."
      />

      <button className="btn btn-primary" onClick={send}>
        Yuborish
      </button>
    </div>
  )
}

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <nav style={{ marginBottom: 20 }}>
        <Link to="/">🏠 Home</Link>{" | "}
        <Link to="/lessons">📚 Darslar</Link>{" | "}
        <Link to="/dashboard">📊 Dashboard</Link>{" | "}
        <Link to="/ai">🤖 AI</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
    </div>
  )
}
