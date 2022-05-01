import React, { useState } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonText,
  IonButton,
  IonRouterLink,
  IonSpinner,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import { useQuery } from "react-query";

import "./MyListings.css";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { EquipmentListing } from "../../types/Equipment.model";
import { getActiveListings, getSoldListings } from "../../services/equipment";

const MyListings: React.FC = () => {
  const activeListQuery = useQuery("activeListings", getActiveListings);
  const soldListQuery = useQuery("soldListings", getSoldListings);
  const [segment, setSegment] = useState<string>("active");

  const activeList = activeListQuery.data?.equipment || [];
  const soldList = soldListQuery.data?.equipment || [];

  const renderActiveList = () => {
    if (activeListQuery.isLoading) {
      return (
        <div className="ion-margin-top ion-text-center">
          <IonSpinner name={"crescent"} />
        </div>
      );
    }

    if ([activeList].length === 0) {
      return (
        <>
          <div className={"ion-padding-top ion-text-center"}>
            <IonText className={"no-listings-text text-primary"}>
              You Haven't Published Any Listings
            </IonText>
          </div>
        </>
      );
    }

    return activeList.map((listing: EquipmentListing, index: any) => (
      <MyListingCard
        key={index}
        equipment={listing}
        refresh={refetchlistings}
      />
    ));
  };

  const renderSoldList = () => {
    if (soldListQuery.isLoading) {
      return (
        <div className="ion-margin-top ion-text-center">
          <IonSpinner name={"crescent"} />
        </div>
      );
    }

    if (soldList.length === 0) {
      return (
        <>
          <div className={"ion-padding-top ion-text-center"}>
            <IonText className={"no-listings-text text-primary"}>
              You Haven't Sold Any Listings
            </IonText>
          </div>
        </>
      );
    }

    return soldList.map((listing: EquipmentListing, index: any) => (
      <MyListingCard
        key={index}
        equipment={listing}
        refresh={refetchlistings}
      />
    ));
  };

  const refetchlistings = () => {
    activeListQuery.refetch();
    soldListQuery.refetch();
  };

  return (
    <IonPage>
      <IonHeader className={"ion-no-border"}>
        <IonToolbar />
      </IonHeader>

      <PageTitle title={"My Listings"} />

      <div className={"listings-segment-container ion-margin-horizontal"}>
        <IonSegment
          value={segment}
          onIonChange={(e: any) => {
            setSegment(e.detail.value);
          }}
        >
          <IonSegmentButton value="active">Active</IonSegmentButton>
          <IonSegmentButton value="sold">Sold</IonSegmentButton>
        </IonSegment>
      </div>

      <IonContent>
        {segment === "active" && renderActiveList()}
        {segment === "sold" && renderSoldList()}

        <IonRouterLink routerLink={"/add-listing"} color={"dark"}>
          <div className={"ion-padding"}>
            <IonButton
              color={"success"}
              expand={"block"}
              size={"large"}
              className={"font-18px"}
            >
              Start Selling
            </IonButton>
          </div>
        </IonRouterLink>
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
