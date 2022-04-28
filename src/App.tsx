import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { copyOutline, addCircleOutline } from "ionicons/icons";
import Catalog from "./pages/Catalog/Catalog";
import MyListings from "./pages/MyListings/MyListings";
import EquipmentDetail from "./pages/EquipmentDetail/EquipmentDetail";
import Search from "./pages/Search/Search";
import SellForm from "./pages/SellForm/SellForm";
import UIContext from "./context/UIContext";

import "./App.css";
import "./theme/variables.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

const App: React.FC = () => {
  const { showTabs } = useContext(UIContext);

  let tabBarStyle = showTabs ? undefined : { display: "none" };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/catalog">
              <Catalog />
            </Route>
            <Route exact path="/listings">
              <MyListings />
            </Route>
            <Route exact path="/add-listing">
              <SellForm />
            </Route>
            <Route path="/catalog/equipment/:id">
              <EquipmentDetail />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route exact path="/">
              <Redirect to="/catalog" />
            </Route>
          </IonRouterOutlet>

          <IonTabBar
            slot="bottom"
            className={"ion-padding-bottom"}
            style={tabBarStyle}
          >
            <IonTabButton tab="tab1" href="/catalog">
              <IonIcon icon={copyOutline} />
              <IonLabel>Catalog</IonLabel>
            </IonTabButton>

            <IonTabButton tab="tab2" href="/listings">
              <IonIcon
                icon={addCircleOutline}
                className={"ion-no-margin sell-tab-icon"}
              />
              <IonLabel>Sell</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
