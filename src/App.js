import logo from "./logo.svg";
import "./App.css";
import Email from "./Email.js";
import Message from "./Message";

function App() {
  return (
    <>
    <div className="App">
    <h1>Sample App to check Notification Details</h1>
    </div>
    <div className="App1"> 
      <Message />
      <Email />
    </div>
    </>
  );
}

export default App;
