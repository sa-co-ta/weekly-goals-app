import { useState } from "react"
import "./GoalForm.css"

export default function Goal({ closeModal, addGoal }) {
  const [title, setTitle] = useState("")
  const [date, setDate] = useState("")
  const [goal, setGoal] = useState("")

  const submitNewGoal = () => {
    const newGoal = {
      title: title,
      goal: goal,
      date: date,
      id: Math.floor(Math.random() * 10000),
    }
    addGoal(newGoal)
    closeModal(false)
  }

  return (
    <article className="form">
      <form className="form__flex" onSubmit={submitNewGoal}>
        <div className="form__header">
          <h3>Record a Goal</h3>
        </div>
        <div className="form__flex--sml">
          <label className="form__label">
            <span>What is your goal?</span>
          </label>
          <input
            type="text"
            className="form__text-input"
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Learn... Make... Do..."
          />
        </div>
        <div className="form__flex--sml">
          <label className="form__label">
            <span>How will you reach it?</span>
          </label>
          <textarea
            className="form__textarea-input"
            onChange={(e) => setGoal(e.target.value)}
            required
            placeholder="I will..."
          ></textarea>
        </div>
        <div className="form__flex--sml">
          <label>
            <span>When will you reach it?</span>
          </label>
          <input
            type="date"
            className="form__date-input"
            onChange={(e) => setDate(e.target.value)}
            required
            placeholder="Study React / "
          />
        </div>
        <button className="form__btn--submit">Add your Goal</button>
      </form>
    </article>
  )
}
