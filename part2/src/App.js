const Header = ({ course }) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  );
};

const Part = ({ part }) => {
  return (
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  );
};

const Content = ({ course }) => {
  return (
    <>
      <ul>
        {course.parts.map((part) => (
          <li key={part.id}>
            <Part key={part.id} part={part} />
          </li>
        ))}
      </ul>
    </>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Part part={course.parts} />
      <Content course={course} />
    </>
  );
};

const Total = ({ sum }) => {
  return (
    <>
      <b>Total of {sum} exercises</b>
    </>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
      <Total
        sum={
          course.parts[0].exercises +
          course.parts[1].exercises +
          course.parts[2].exercises +
          course.parts[3].exercises
        }
      />
    </div>
  );
};

export default App;
