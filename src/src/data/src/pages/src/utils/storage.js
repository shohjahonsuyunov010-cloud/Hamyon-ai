export const getProgress = () => {
  return JSON.parse(localStorage.getItem("hamyon_progress")) || {
    coins: 0,
    level: 1,
    completed: []
  }
}

export const saveProgress = (data) => {
  localStorage.setItem("hamyon_progress", JSON.stringify(data))
}