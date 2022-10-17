import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import InputDropDown from "./pages/InputDropDown";
import ButtonDropDown from "./pages/ListButton";
import TableDropDown from "./pages/TableButton";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ButtonDropDown/>} />
          <Route path="*" element={<ButtonDropDown/>} />
          <Route path="/button-drop-down" element={<ButtonDropDown/>} />
          <Route path="/input-drop-down" element={<InputDropDown/>} />
          <Route path="/table-drop-down" element={<TableDropDown/>} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
