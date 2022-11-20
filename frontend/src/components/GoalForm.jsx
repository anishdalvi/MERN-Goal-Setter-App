import { useState } from "react"
import { useDispatch } from "react-redux"
import { createGoal } from '../features/goals/goalSlice'

export default function GoalForm() {
    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }

  return (
    <section className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" value={text} onChange={ (e) => setText(e.target.value)} placeholder='Write your Goal' />
            </div>
            <div className="from-group">
                <button type="submit" className="btn btn-block">Add Goal</button>
            </div>
        </form>
    </section>
  )
}
