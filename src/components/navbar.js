import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Cart } from "./cart";
import { Home } from "./home";
export const Navbar = () => {
    return (
<Router>
<nav className="navbar navbar-dark bg-dark">
  <div className="container">
    <Link className="navbar-brand" to="/"><img style={{height:100}} src="https://raw.githubusercontent.com/DwinaTech/public-images/main/DwinaTech-brand.png" alt="" /></Link>
    <form className="d-flex">
    <Link className="btn btn-light" to="/cart"><i class="bi bi-cart3"></i></Link>
    </form>
  </div>
</nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
</Router>
    )
}