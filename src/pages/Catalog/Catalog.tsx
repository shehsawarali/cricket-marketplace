import React, { useState, useEffect, useRef } from "react";
import {
  IonContent,
  IonPage,
  IonIcon,
  IonRow,
  IonText,
  IonLabel,
  IonToolbar,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from "@ionic/react";
import "./Catalog.css";
import { locationOutline, searchOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageTitle from "../../components/PageTitle";
import { mockEquipment } from "../../constants";
import LocationModal from "../../components/LocationModal/LocationModal";

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const Catalog: React.FC = () => {
  const scrollRef = useRef<HTMLIonInfiniteScrollElement>(null);
  const [location, setLocation] = useState<string>("Calgary");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [catalogData, setCatalogData] = useState<Array<equipment>>([
    mockEquipment,
    mockEquipment,
    mockEquipment,
  ]);

  useEffect(() => {
    // Add initial API load here
  }, []);

  const loadData = () => {
    // Subsequent fetch API for infinite scroll

    if (scrollRef.current) {
      scrollRef.current.complete();
    }
  };

  const toggleModal = () => {
    setShowModal((currentState) => !currentState);
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

      <IonContent>
        <PageTitle title={"Dealer Catalog"} />

        <IonRow className="ion-justify-content-between ion-padding">
          <IonText style={{ fontWeight: "800", fontSize: "17px" }}>
            Newly Added
          </IonText>
          <IonRow
            className="ion-align-items-center catalog-location"
            onClick={toggleModal}
          >
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

            <IonInfiniteScroll
              threshold="50px"
              ref={scrollRef}
              onIonInfinite={loadData}
            >
              <IonInfiniteScrollContent
                loadingSpinner="bubbles"
                loadingText="Loading more data..."
              ></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </>
        )}

        <LocationModal
          isOpen={showModal}
          setValue={setLocation}
          close={toggleModal}
        />
      </IonContent>
    </IonPage>
  );
};

export default Catalog;
