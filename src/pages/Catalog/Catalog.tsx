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
} from "@ionic/react";
import "./Catalog.css";
import { searchOutline, locationOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";

const Catalog: React.FC = () => {
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
            <IonTitle size="large">Dealer Catalog</IonTitle>
          </IonToolbar>
        </IonHeader>

        {/*<IonContent>*/}
        <IonRow className="ion-justify-content-between ion-padding">
          <IonText style={{ fontWeight: "800", fontSize: "17px" }}>
            Newly Added
          </IonText>
          <IonRow className="ion-align-items-center catalog-location">
            <IonIcon
              icon={locationOutline}
              color={"tertiary"}
              className="location-icon"
            />
            <IonLabel color={"tertiary"}>Calgary</IonLabel>
          </IonRow>
        </IonRow>

        <CatalogCard name={"Example Equipment"} />
        <CatalogCard name={"Example Equipment"} />
        <CatalogCard name={"Example Equipment"} />
      </IonContent>
      {/*</IonContent>*/}
    </IonPage>
  );
};

export default Catalog;
