import "./App.css";
import Header from "./components/Header";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Header title="Text Utils" />
      <div>
        <div className="container">
          <TextForm heading="Enter the text to analyze" />
        </div>
      </div>
    </>
  );
}

export default App;
