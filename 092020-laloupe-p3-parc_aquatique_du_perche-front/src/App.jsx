import React from "react";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import LoginContext from "./contexts/LoginContext";

import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Accueil from "./components/Accueil/Accueil";
import Activites from "./components/Activites/Activites";
import Espaces from "./components/Espaces/Espaces";
import Reservation from "./components/Reservation/Reservation";
import Actualites from "./components/Actualites/Actualites";
import Header from "./components/Header/Header";
import AdminLogin from "./components/Administration/Admin_login/Admin_login";
import AdminEspaces from "./components/Administration/Admin_Espaces/AdminEspaces";
import AdminActivites from "./components/Administration/Admin_Activites/AdminActivites";
import AdminActualites from "./components/Administration/Admin_Actualites/AdminActualites";
import AdminAquagym from "./components/Administration/Admin_aquagym/AdminAquagym";
import MenuAdmin from "./components/Administration/MenuAdmin/MenuAdmin";
import NewAdmin from "./components/Administration/New_admin/NewAdmin";
import Footer from "./components/Footer/Footer";

function App() {
  const location= useLocation();

  return (
    <LoginContext.Provider value={{ isLogin: false}}>
      <main className="container">
        {!location.pathname.startsWith("/Admin") && <Header />}

        {(location.pathname.startsWith("/Admin") && (
          location.pathname !== "/Admin") && (
            <MenuAdmin />
          )
        )}
        <ScrollToTopOnMount />
        <Switch>
          <Route exact path="/" component={Accueil} />
          <Route path="/Espaces" component={Espaces} />
          <Route path="/Activites" component={Activites} />
          <Route path="/Aquagym" component={Reservation} />
          <Route path="/Actualites" component={Actualites} />
          <Route exact path="/Admin" component={AdminLogin} />
          <Route path="/Admin/Espaces" component={AdminEspaces} />
          <Route path="/Admin/Activites" component={AdminActivites} />
          <Route path="/Admin/new" component={NewAdmin} />
          <Route path="/Admin/Actualites" component={AdminActualites} />
          <Route path="/Admin/Aquagym" component={AdminAquagym} />
        </Switch>
        <Footer admin={!location.pathname.startsWith("/Admin")} />
      </main>
    </LoginContext.Provider>

  );
}

export default App;
