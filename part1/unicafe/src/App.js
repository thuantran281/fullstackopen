import { useState } from 'react'

const Statistics = (props) => {
  return (
    <>
      {props.text} {props.value}
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad;
  const average = ((good - bad) / all);
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics text="good" value={good} /> <br />
      <Statistics text="neutral" value={neutral} /> <br />
      <Statistics text="bad" value={bad} /> <br />
      <Statistics text="all" value={all} /> <br />
      <Statistics text="average" value={average} /> <br />
      <Statistics text="positive" value={positive + "%"} />
    </div>
  )
}

export default App;