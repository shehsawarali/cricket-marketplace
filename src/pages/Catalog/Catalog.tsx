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
import LocationModal from "../../components/LocationModal/LocationModal";
import { useHistory } from "react-router";
import { EquipmentDetail } from "../../types";
import { getCatalog } from "../../services/equipment";

const Catalog: React.FC = () => {
  const history = useHistory();
  const catalogRef = React.useRef<any>(null);
  const scrollRef = useRef<HTMLIonInfiniteScrollElement>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [location, setLocation] = useState<string>("Calgary");
  const [showModal, setShowModal] = useState<boolean>(false);

  const [page, setPage] = useState<number>(1);
  const [catalogData, setCatalogData] = useState<Array<EquipmentDetail>>([]);

  useEffect(() => {
    loadCatalogData();
  }, []);

  const loadMoreData = () => {
    const callback = () => {
      if (scrollRef.current) {
        scrollRef.current.complete();
      }
    };

    loadCatalogData(callback);
  };

  const loadCatalogData = (callback?: () => void) => {
    getCatalog(page).then((data) => {
      if (data.equipment.length) {
        appendCatalog(data.equipment);
      }

      if (page <= data.totalPage) {
        incrementPage();
      } else {
        setScrollDisabled(true);
      }

      if (callback) callback();
    });
  };

  const appendCatalog = (newData: Array<EquipmentDetail>) => {
    setCatalogData((currentCatalogData) => [...currentCatalogData, ...newData]);
  };

  const incrementPage = () => {
    setPage((currentPage) => currentPage + 1);
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
            {catalogData.map((equipment: EquipmentDetail, index: any) => {
              return <CatalogCard key={index} equipment={equipment} />;
            })}

            <IonInfiniteScroll
              threshold="50px"
              ref={scrollRef}
              onIonInfinite={loadMoreData}
              disabled={scrollDisabled}
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
