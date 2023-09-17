import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { routes, pubRoutes } from './routers';
import DefaultLayout from './layouts/DefaultLayout';
import { PrivateRoute } from "./utils/PrivateRoute";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            {routes.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <PrivateRoute>
                      <DefaultLayout>
                        <Page />
                      </DefaultLayout>
                    </PrivateRoute>
                  }
                />
              );
            },)}
            {
              pubRoutes.map((pubRoute, index) => {
                const Page = pubRoute.component;
                return (
                  <Route
                    key={index}
                    path={pubRoute.path}
                    element={
                      <Page />
                    }
                  />
                );
              },)
            }
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
