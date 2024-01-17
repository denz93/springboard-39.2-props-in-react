
const Tweet = ({username, name, date, message}) => {
  return <div className="tweet">
    <h3>{username}</h3>
    <p>{name}</p>
    <p>{date}</p>
    <p>{message}</p>
  </div>
}

const App = () => {
  const tweets = [
    {username: "bob123", name: "Bob", date: "2020-01-01", message: "Hello World"},
    {username: "alice123", name: "Alice", date: "2020-01-01", message: "A beautiful day in Vietnam"},
    {username: "holyuser1", name: "John", date: "2020-01-01", message: "Vietnam is a beautiful country"},
  ]
  return <div className="app">
    {tweets.map(tweet => <Tweet key={tweet.username} {...tweet} />)}
  </div>
}

ReactDOM.render(<App />, document.getElementById("root"))