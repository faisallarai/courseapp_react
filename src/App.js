import React, {useState} from 'react';

const App = () => {

  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundementals of React",
          exercise: 10,
          id: 1
        },
        {
          name: "Using props to pass data",
          exercise: 7,
          id: 2
        },
        {
          name: "State of a component",
          exercise: 14,
          id: 3
        },
        {
          name: "Redux",
          exercise: 11,
          id: 4
        }
      ]
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercise: 3,
          id: 1
        },
        {
          name: "Middlewares",
          exercise: 7,
          id: 2
        }
      ]
    },
  ]

  const Part = ({name, exercise, id}) => {
    return(
      <li key={id}>{name} {exercise}</li>
    )
  }
  
  const Course = ({name, id, parts}) => {
    return(
      <div>
        <li key={id}><h1>{name}</h1></li>
        <ul>
          {parts.map(part => <Part name={part.name} exercise={part.exercise} id={part.id} /> )}
        </ul>
      </div>
    )
  }

  const Courses = ({courses}) => {
    return(
      <ul>
        {courses.map(course => {
          return(
            <Course id={course.id} name={course.name} parts={course.parts} />
          )
        })}
      </ul>
    )
  }

  return(
    <div>
      <div>
        <Courses courses={courses} />
      </div>
    </div>
  )
}
export default App;
