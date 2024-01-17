const Person = ({name = '', age = 0, hobbies = []}) => {
  return <div className="person">
    <p>Learn more about {String(name).substring(0, 8)}</p>
    <h3>{age >= 18 ? 'please go vote!' : 'you must be 18'}</h3>
    <ul>{(hobbies).map((h, idx) => <li id={idx}>{h}</li>)}</ul>

    </div>
}

const App = () => {
  return <div className="app">
    <Person name="Tom" age={10} /> 
    <Person name="Alexander" age={50} /> 
    <Person name="Hong Loan" age={18} hobbies={['hiking', 'running']} /> 

    
  </div>
}

ReactDOM.render(<App />, document.getElementById("root"))