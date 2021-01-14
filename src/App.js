import { BrowserRouter, Switch, Route } from "react-router-dom";
import ProfileCard from "./containers/ProfileCard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ProfileCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
