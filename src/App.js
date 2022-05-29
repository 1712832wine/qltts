
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './routes'

function App() {


  return (
    <>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              return <Route exact path={route.path} key={route.key} element={route.element} />
            })
          }
        </Routes>
      </Router>
    </>
  )
}

export default App;
