import { Switch, Route, Redirect } from "react-router-dom";
import { CarsPage } from "./pages/CarsPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/cars" />} />
      <Route exact path="/cars">
        <CarsPage />
      </Route>
    </Switch>
  );
};

export default Router;
