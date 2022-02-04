import "./GoalList.css"

function GoalList({ props, removeCard }) {
  return (
    <div className="goal-list">
      {props.map((goal) => (
        <article className="card" key={goal.id}>
          <header className="card__header">
            <h2 className="card__h2">Attain by</h2>
            <p className="card__date">{goal.date}</p>
          </header>
          <div className="card__main">
            <h3 className="card__goal-title">{goal.title}</h3>
            <p className="card__goal-text">{goal.goal}</p>
            <button
              className="card__btn--delete"
              onClick={() => removeCard(goal.id)}
            >
              Delete
            </button>
          </div>
        </article>
      ))}
    </div>
  )
}

export default GoalList
