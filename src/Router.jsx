import { Switch, Route, Redirect } from "react-router-dom";
import { CarsPage } from "./pages/CarsPage";
import { SingleCarPage } from "./pages/SingleCarPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cars" />} />
      <Route exact path="/cars">
        <CarsPage />
      </Route>
      <Route exact path="/cars/:id">
        <SingleCarPage />
      </Route>
    </Switch>
  );
};

export default Router;
