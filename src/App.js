import React, { useState } from "react"
import "./App.css"
import Nav from "./components/Nav"
import GoalList from "./components/GoalList"
import Modal from "./components/Modal"

function App() {
  // modal controls
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  // remove cards
  const removeCard = (id) => {
    setGoal((prevGoal) => {
      return prevGoal.filter((goal) => {
        return id != goal.id
      })
    })
  }

  // store goals
  const [goals, setGoal] = useState([])

  const addGoal = (goal) => {
    setGoal((prevGoal) => {
      return [...prevGoal, goal]
    })
  }

  return (
    <section className="section">
      <main className="app">
        <Nav openModal={openModal} />
        <GoalList props={goals} removeClick={removeCard} />
      </main>
      {showModal && <Modal closeModal={closeModal} addGoal={addGoal} />}
    </section>
  )
}

export default App
