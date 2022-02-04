import "./Days.css"

function Days() {
  const days = [
    { day: "M", id: 1 },
    { day: "T", id: 2 },
    { day: "W", id: 3 },
    { day: "T", id: 4 },
    { day: "F", id: 5 },
    { day: "S", id: 6 },
    { day: "S", id: 0 },
  ]
  const d = new Date()
  let dayOfWeek = d.getDay()

  return (
    <div className="nav__days">
      {days.map((day) => (
        <h1
          key={day.id}
          className={day.id === dayOfWeek ? "today__h1" : "day__h1"}
        >
          {day.day}
        </h1>
      ))}
    </div>
  )
}

export default Days
