import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonBackButton,
} from "@ionic/react";
import "./SellForm.css";
import { searchOutline } from "ionicons/icons";
import React from "react";

const MyListings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton color={"dark"} />
        </IonButtons>
        <IonToolbar className={"ionic-padding-horizontal"}>
          <IonIcon
            icon={searchOutline}
            style={{ fontSize: "20px", marginRight: "10px" }}
            slot={"end"}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sell Now</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
