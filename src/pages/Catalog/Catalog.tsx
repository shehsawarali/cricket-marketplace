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
  IonButton,
  IonButtons,
} from "@ionic/react";
import "./Catalog.css";
import { locationOutline, searchOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { mockEquipment } from "../../constants";
import LocationModal from "../../components/LocationModal/LocationModal";
import { useHistory } from "react-router";
import { Equipment } from "../../types";

const Catalog: React.FC = () => {
  const history = useHistory();
  const catalogRef = React.useRef<any>(null);
  const scrollRef = useRef<HTMLIonInfiniteScrollElement>(null);

  const [location, setLocation] = useState<string>("Calgary");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [catalogData, setCatalogData] = useState<Array<Equipment>>([
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
    <IonPage ref={catalogRef}>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push("/search")}>
              <IonIcon color={"dark"} icon={searchOutline} slot={"end"} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <PageTitle title={"Dealer Catalog"} />

        <IonRow className="ion-padding catalog-content-header">
          <IonText className={"newly-added"}>Newly Added</IonText>

          <IonRow className="catalog-header-location" onClick={toggleModal}>
            <IonIcon icon={locationOutline} color={"tertiary"} />
            <IonLabel color={"tertiary"}>{location}</IonLabel>
          </IonRow>
        </IonRow>

        {catalogData.length > 0 && (
          <>
            {catalogData.map((equipment: Equipment, index: any) => {
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
          parentRef={catalogRef.current}
        />
      </IonContent>
    </IonPage>
  );
};

export default Catalog;
