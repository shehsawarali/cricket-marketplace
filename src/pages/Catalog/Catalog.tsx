import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonRow,
  IonText,
  IonLabel,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import "./Catalog.css";
import { locationOutline, searchOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageTitle from "../../components/PageTitle";
import { mockEquipment } from "../../constants";

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const Catalog: React.FC = () => {
  const [catalogData, setCatalogData] = useState<Array<equipment>>([
    mockEquipment,
    mockEquipment,
    mockEquipment,
  ]);

  const [location, setLocation] = useState("Calgary");

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

      <IonContent>
        <PageTitle title={"Dealer Catalog"} />

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
            <IonLabel color={"tertiary"}>{location}</IonLabel>
          </IonRow>
        </IonRow>

        {catalogData.length > 0 && (
          <>
            {catalogData.map((equipment: equipment, index: any) => {
              return (
                <CatalogCard
                  key={index}
                  id={equipment.id}
                  name={equipment.name}
                  price={equipment.price}
                  location={equipment.location}
                  distance={equipment.distance}
                  categories={equipment.categories}
                />
              );
            })}
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Catalog;
