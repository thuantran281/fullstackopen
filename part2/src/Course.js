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

export default Course;
