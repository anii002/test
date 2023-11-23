import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import From from "./components/Form"
import 'bootstrap/dist/css/bootstrap.min.css';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas,)

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<From />} exact />
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
