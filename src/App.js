import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import InputDropDown from "./pages/InputDropDown";
import ButtonDropDown from "./pages/ButtonDropDown";
import TableDropDown from "./pages/TableDropDown";
import {MainEvents} from "./data/MainEvents";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const Main = MainEvents
  // console.log(Main)
  // const NewSubEvents = []

  // const SubEvents = ["level", "total", "name", "avatar", "player"]
  // MainEvents.map((x) => {
  //   return x
  // })

  //   console.log(SubEvents)
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<InputDropDown/>} />
          <Route path="*" element={<InputDropDown/>} />
          <Route path="/input-drop-down" element={<InputDropDown/>} />
          <Route path="/button-drop-down" element={<ButtonDropDown/>} />
          <Route path="/table-drop-down" element={<TableDropDown/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
