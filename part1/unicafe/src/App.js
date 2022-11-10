import { useState } from "react";

const Button = (props) => {
  return (
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  );
};

const StatisticLines = (props) => {
  return (
    <>
      {props.text} {props.value}
    </>
  );
};

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad;
  const average = (props.good - props.bad) / all;
  const positive = (props.good / all) * 100;

  if (all === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <StatisticLines text="good" value={props.good} /> <br />
      <StatisticLines text="neutral" value={props.neutral} /> <br />
      <StatisticLines text="bad" value={props.bad} /> <br />
      <StatisticLines text="all" value={all} /> <br />
      <StatisticLines text="average" value={average} /> <br />
      <StatisticLines text="positive" value={positive + "%"} />
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={handleGoodClick} text="good" />
      <Button onClick={handleNeutralClick} text="neutral" />
      <Button onClick={handleBadClick} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
