import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userMenus } from "../common/userMenu";
import LoginScreen from "../modules/auth/Login";
import { AuthRoutes } from "./AuthRoute";
import { IsLogedIn } from "./IslogedIn";
import { ROUTES } from "./Routes";

function AppRoutes() {
  const importRouter = (path) => {
    const filterPath = ROUTES.find((data) => {
      return data.routeName === path;
    });
    if (filterPath) {
      const Component = React.lazy(() =>
        import(`../modules${filterPath.component}`)
      );
      if (Component) {
        return <Component />;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthRoutes />}>
          {userMenus.map((data, i) =>
            data.childMenus === null ? (
              <Route
                exact
                key={i}
                path={data.routeName}
                element={
                  <React.Suspense fallback={<>...</>}>
                    {importRouter(data.routeName)}
                  </React.Suspense>
                }
              />
            ) : (
              data.childMenus.map((routeList, index) => (
                <Route
                  key={index}
                  exact
                  path={routeList.routeName}
                  element={
                    <React.Suspense fallback={<>...</>}>
                      {importRouter(routeList.routeName)}
                    </React.Suspense>
                  }
                />
              ))
            )
          )}
        </Route>

        <Route element={<IsLogedIn />}>
          <Route path="/login" element={<LoginScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
