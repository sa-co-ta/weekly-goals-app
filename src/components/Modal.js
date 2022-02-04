import "./Modal.css"
import GoalForm from "./GoalForm"

export default function Modal({ closeModal, addGoal }) {
  return (
    <div className="modal__backdrop">
      <div className="modal__card">
        <svg
          width="49"
          height="49"
          viewBox="0 0 49 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="form__close-icon"
          onClick={closeModal}
        >
          <circle cx="24.5" cy="24.5" r="24.5" fill="#9980CC" />
          <line
            x1="19.7574"
            y1="20.0711"
            x2="28.2427"
            y2="28.5563"
            stroke="#413B53"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="28.2426"
            y1="20.0711"
            x2="19.7573"
            y2="28.5563"
            stroke="#413B53"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <GoalForm closeModal={closeModal} addGoal={addGoal} />
      </div>
    </div>
  )
}
