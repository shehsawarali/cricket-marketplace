import React, { useState, useRef } from "react";
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
  IonSpinner,
  useIonViewDidEnter,
} from "@ionic/react";
import "./Catalog.css";
import { locationOutline, searchOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import LocationModal from "../../components/LocationModal/LocationModal";
import { useHistory } from "react-router";
import { Equipment } from "../../types";
import Location from "../../types/Location.model";
import { getCatalog } from "../../services/equipment";

const Catalog: React.FC = () => {
  const history = useHistory();
  const catalogRef = React.useRef<any>(null);
  const scrollRef = useRef<HTMLIonInfiniteScrollElement>(null);
  const [scrollDisabled, setScrollDisabled] = useState(false);
  const [location, setLocation] = useState<Location | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [page, setPage] = useState<number>(1);
  const [catalogData, setCatalogData] = useState<Array<Equipment>>([]);

  useIonViewDidEnter(() => {
    loadCatalogData(() => {
      setPageLoading(false);
    });
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
        setCatalogData((currentCatalogData) => [
          ...currentCatalogData,
          ...data.equipment,
        ]);
      }

      if (page < data.totalPage) {
        setPage((currentPage) => currentPage + 1);
      } else {
        setScrollDisabled(true);
      }

      if (callback) callback();
    });
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

            <IonLabel color={"tertiary"}>
              {location?.structured_formatting.main_text || "Choose Location"}
            </IonLabel>
          </IonRow>
        </IonRow>

        {pageLoading && (
          <div className={"ion-margin-top ion-text-center"}>
            <IonSpinner name={"crescent"} />
          </div>
        )}

        {!pageLoading && (
          <>
            {catalogData.map((equipment: Equipment, index: any) => {
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
                loadingText="Loading"
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
