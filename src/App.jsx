function App() {
  const collegeData = [
    {
      name: "IIT",
      city: "delhi",
      website: "iit@delhi.com",
      student: [
        { name: "ayush", age: 20 },
        { name: "rahul", age: 21 }
      ]
    },
    {
      name: "MIT",
      city: "mumbai",
      website: "mit@mumbai.com",
      student: [
        { name: "jay", age: 23 },
        { name: "karan", age: 22 }
      ]
    }
  ];

  return (
    <div>
      <h1>Component in React</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <h2>name: {college.name}</h2>
          <h2>city: {college.city}</h2>
          <h2>website: {college.website}</h2>

          <h3>Student Data:</h3>
          {college.student.map((students, sIndex) => (
            <ul key={sIndex}>
              <li>name: {students.name}</li>
              <li>age: {students.age}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;