import React from "react";

import { locationOutline, searchOutline } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonLabel,
  IonPage,
  IonRow,
  IonSpinner,
  IonText,
  IonToolbar,
} from "@ionic/react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useHistory } from "react-router";

import "./Catalog.css";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import Location from "../../types/Location.model";
import LocationModal from "../../components/LocationModal/LocationModal";
import PageTitle from "../../components/PageTitle/PageTitle";
import ServerErrorAlert from "../../components/ServerErrorAlert";
import { Equipment } from "../../types/Equipment.model";
import { getCatalog } from "../../services/equipment";
import { getLocationDetail } from "../../services/location";

const Catalog: React.FC = () => {
  const history = useHistory();
  const catalogRef = React.useRef<any>(null);
  const scrollRef = React.useRef<HTMLIonInfiniteScrollElement>(null);

  const [scrollDisabled, setScrollDisabled] = React.useState(false);
  const [location, setLocation] = React.useState<Location | null>(null);
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const locationDetailQuery = useQuery(
    ["locationDetail", location],
    () => {
      if (location) return getLocationDetail(location.place_id);
    },
    {
      select: (data) => data.result.geometry.location,
    }
  );

  const catalogQuery = useInfiniteQuery(
    ["catalog", locationDetailQuery.data?.lat],
    ({ pageParam = 1 }) => {
      return getCatalog(pageParam, locationDetailQuery.data);
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.nextPage;
      },

      onSuccess: () => {
        if (scrollRef.current) {
          scrollRef.current.complete();
        }
      },
    }
  );

  const loadMoreData = () => {
    if (catalogQuery.hasNextPage) {
      catalogQuery.fetchNextPage();
    } else {
      setScrollDisabled(true);
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

            <IonLabel color={"tertiary"}>
              {location?.structured_formatting.main_text || "Choose Location"}
            </IonLabel>
          </IonRow>
        </IonRow>

        {catalogQuery.isLoading && (
          <div className={"ion-margin-top ion-text-center"}>
            <IonSpinner name={"crescent"} />
          </div>
        )}

        {!catalogQuery.isLoading && (
          <>
            {catalogQuery.data?.pages.map((pageData: any) => {
              return pageData.equipment?.map((equipment: Equipment) => (
                <CatalogCard key={equipment.id} equipment={equipment} />
              ));
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
              />
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

      {(catalogQuery.isError || locationDetailQuery.isError) && (
        <ServerErrorAlert />
      )}
    </IonPage>
  );
};

export default Catalog;
