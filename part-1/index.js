
const FirstComponent = () => {
  return <h1>My very first component</h1>
}

const NamedComponent = ({name}) => {
  return <p>My name is {name}</p>
}
const app = () => {
  return <div>
    <FirstComponent/>
    <NamedComponent name="John"/>
  </div>
}

ReactDOM.render(app(), document.getElementById('root'))