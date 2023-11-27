import React from 'react';

// Header component
const Header = (props) => {
  console.log(props); // Debugging: Log props to the console
  return <h1>{props.course}</h1>;
};

// Part component
const Part = ({ part }) => {
  console.log(part); // Debugging: Log part to the console
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

// Content component
const Content = ({ parts }) => {
  console.log(parts); // Debugging: Log parts to the console
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
    </div>
  );
};

// Total component
const Total = ({ parts }) => {
  console.log(parts); // Debugging: Log parts to the console
  const totalExercises = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <p><strong>Total exercises: {totalExercises}</strong></p>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10,
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7,
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14,
  };

  const parts = [part1, part2, part3];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
