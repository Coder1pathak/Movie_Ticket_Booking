import ReactDOM from "react-dom/client";
import "./App.css";
import Home from "./pages/Home.js";
import Summary from "./pages/Summary.js";
import Form from "./pages/Form.js";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Summary" element={<Summary />} />
            <Route path="Form" element={<Form />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
