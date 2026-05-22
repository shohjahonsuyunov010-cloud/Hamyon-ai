import { getProgress } from "../utils/storage"

export default function Dashboard() {
  const data = getProgress()

  return (
    <div className="card">
      <h2>📊 Dashboard</h2>

      <p>🪙 Coins: {data.coins}</p>
      <p>🏆 Level: {data.level}</p>
      <p>📚 Tugallangan: {data.completed.length}</p>

      <div className="card">
        🔥 Bugungi maqsad: 1 ta dars o‘qish
      </div>
    </div>
  )
}
