import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRow,
  IonText,
  IonLabel,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import "./MyListings.css";
import { searchOutline, locationOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import React from "react";
import { useHistory } from "react-router-dom";

const MyListings: React.FC = () => {
  const history = useHistory();
  const onClick = (event: React.MouseEvent<HTMLIonButtonElement>) => {
    event.preventDefault();
    history.push("/add-listing");
  };

  return (
    <IonPage>
      <IonHeader>
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
            <IonTitle size="large">My Listings</IonTitle>
          </IonToolbar>
        </IonHeader>

        <div
          id="no-listings"
          className={"ion-padding ion-text-center"}
          style={{ width: "100%" }}
        >
          <IonText style={{ fontSize: "16px", color: "indianred" }}>
            You Haven't Published Any Listings
          </IonText>

          <IonButton
            className={"ion-margin"}
            color={"success"}
            expand={"full"}
            size={"large"}
            onClick={onClick}
            style={{
              fontSize: "18px",
            }}
          >
            Start Selling
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
