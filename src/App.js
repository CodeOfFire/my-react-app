import "./App.css";
import FormCollection from "./components/FormCollection";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import { GET_USER_FORM_FIELDS } from "./scripts/formData";

function App() {
  const FORM_FIELDS = GET_USER_FORM_FIELDS();
  return (
    <>
      <Header title="Text Utils" />
      <div>
        {
          <div className="container">
            {/* <TextForm heading="Enter the text to analyze" /> */}
            <FormCollection />
          </div>
        }
        {/* <div>
          {[
            {
              name: "address",
              type: "text",
              containerClassNames: "mb-1 col-md-4",
              label: "user address",
            },
          ].map((useItem, index) => {
            const { label, name, containerClassName, type } = useItem;
            return (
              <div key={index} className={containerClassName}>
                <label>{label}</label>
                <input type={type} name={name} />
              </div>
            );
          })}
        </div> */}
      </div>
    </>
  );
}

export default App;
