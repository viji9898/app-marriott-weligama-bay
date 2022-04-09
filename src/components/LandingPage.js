import { Button } from "antd";
import logo from "../logo.svg";

export const LandingPage = ({ helloWorld }) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>From Faunadb:</p>
        {helloWorld ? (
          <p style={{ backgroundColor: "green" }}>
            <code>"{helloWorld.title}"</code>.
          </p>
        ) : (
          <p style={{ backgroundColor: "red" }}>
            "ERROR - Faunadb Not Connected"
          </p>
        )}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button>Ant Button</Button>
      </header>
    </div>
  );
};
