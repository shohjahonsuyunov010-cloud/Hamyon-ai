import { useState } from "react"
import { lessons } from "../data/lessons"

export default function Lessons() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const lesson = lessons[current]

  const answerQuiz = (i) => {
    if (i === lesson.quiz[0].answer) {
      setScore(score + 1)
    }

    if (current + 1 < lessons.length) {
      setCurrent(current + 1)
    } else {
      setFinished(true)
    }
  }

  if (finished) {
    return (
      <div className="card">
        <h2>🎉 Tugadi!</h2>
        <p>Score: {score} / {lessons.length}</p>
      </div>
    )
  }

  return (
    <div className="card">
      <h2>📚 {lesson.title}</h2>

      <p>{lesson.content}</p>

      <div className="card" style={{ marginTop: 10 }}>
        💡 Misol: {lesson.example}
      </div>

      <h3 style={{ marginTop: 15 }}>🧪 Test</h3>
      <p>{lesson.quiz[0].q}</p>

      {lesson.quiz[0].options.map((op, i) => (
        <button
          key={i}
          className="btn btn-secondary"
          style={{ display: "block", marginTop: 10 }}
          onClick={() => answerQuiz(i)}
        >
          {op}
        </button>
      ))}
    </div>
  )
}
