import React, { useState, useEffect } from "react";

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
  useIonViewDidEnter,
} from "@ionic/react";
import "./MyListings.css";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { EquipmentListing } from "../../types/Equipment.model";
import { getActiveListings, getSoldListings } from "../../services/equipment";

const MyListings: React.FC = () => {
  const [activeList, setActiveList] = useState<Array<EquipmentListing>>([]);
  const [soldList, setSoldList] = useState<Array<EquipmentListing>>([]);
  const [segment, setSegment] = useState<string>("active");
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    if (segment === "active" && activeList.length === 0) {
      setPageLoading(true);

      getActiveListings().then((data) => {
        setActiveList(data.equipment);
        setPageLoading(false);
      });
    } else if (segment === "sold" && soldList.length === 0) {
      setPageLoading(true);
      getSoldListings().then((data) => {
        setSoldList(data.equipment);
        setPageLoading(false);
      });
    }
  }, [segment]);

  useIonViewDidEnter(() => {
    getActiveListings().then((data) => {
      setActiveList(data.equipment);
      setPageLoading(false);
    });
  });

  const renderActiveList = () => {
    if (!pageLoading && activeList.length === 0) {
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
      <MyListingCard key={index} equipment={listing} />
    ));
  };

  const renderSoldList = () => {
    if (!pageLoading && soldList.length === 0) {
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
      <MyListingCard key={index} equipment={listing} />
    ));
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
        {pageLoading && (
          <div className="ion-margin-top ion-text-center">
            <IonSpinner name={"crescent"} />
          </div>
        )}

        {!pageLoading && (
          <>
            {segment === "active" && renderActiveList()}
            {!pageLoading && segment === "sold" && renderSoldList()}

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
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
