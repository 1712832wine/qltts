
import './App.css';

import DefaultLayout from "./views/layouts/DefaultLayout";

import { BrowserRouter as Router } from 'react-router-dom';

function App() {


  return (
    <>
      <Router>
        <DefaultLayout />
      </Router>
    </>
  )
}

export default App;
