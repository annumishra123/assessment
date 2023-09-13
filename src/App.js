import "./App.css";
import LandingPage from "./components/LandingPage";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";


function App() {
  return (
    <div className="App">
      {/* <ErrorBoundary> */}
      <LandingPage />
      {/* </ErrorBoundary> */}
     
    </div>
  );
}

export default App;
