import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes';
import { DefaultLayout } from '~/layouts';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Element = route.component;

            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Element />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </>
    </Router>
  );
}

export default App;
