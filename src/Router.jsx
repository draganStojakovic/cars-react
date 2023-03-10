import { Switch, Route, Redirect } from "react-router-dom";
import { CarsPage } from "./pages/CarsPage";
import { SingleCarPage } from "./pages/SingleCarPage";
import { AddCarPage } from "./pages/AddCarPage";
import { EditCarPage } from "./pages/EditCarPage";

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
      <Route exact path="/submit/cars">
        <AddCarPage />
      </Route>
      <Route exact path="/edit/:id">
        <EditCarPage />
      </Route>
    </Switch>
  );
};

export default Router;
