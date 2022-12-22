// import logo from './logo.svg';
import { Fragment } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {publicRoutes} from './routes/routes';
import './index.css'
import { DeafultLayout } from './Layout';
function App() {
  return (
    <Router>
      <div className="App">
            <Routes>
               {publicRoutes.map((route, index) => {
                  const Layout = route.layout === null ? Fragment : DeafultLayout;
                  const Page = route.component;
                  return (
                  <Route key={index} path={route.path} element={
                    <Layout>
                      < Page/>
                    </Layout>
                    }
                  />
                  );
               })}
            </Routes>
        </div>
    </Router>
  );
}

export default App;
