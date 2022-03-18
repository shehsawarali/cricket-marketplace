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

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import SellForm from "./pages/SellForm/SellForm";
import UIContext from "./context/UIContext";

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
                className={"ion-no-margin"}
                style={{
                  fontSize: "36px",
                }}
              />
              <IonLabel style={{ fontWeight: "bold" }}>Sell</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
