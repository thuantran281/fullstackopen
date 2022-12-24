const Header = ({ course }) => {
  return (
    <>
      <h2>{course.name}</h2>
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
        {course.map((part) => (
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
      <Content course={course.parts} />
      <Total course={course} />
    </>
  );
};

const Total = ({ course }) => {
  const sum = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <>
      <b>Total of {sum} exercises</b>
    </>
  );
};

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
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
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      <h1>Web development curriculum</h1>
      <ul>
        {courses.map((part) => (
          <li key={part.id}>
            <Course key={part.id} course={part} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
