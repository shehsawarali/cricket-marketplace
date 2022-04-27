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
  useIonViewDidEnter,
} from "@ionic/react";
import "./MyListings.css";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { EquipmentListing } from "../../types/Equipment.model";
import { getMyListings } from "../../services/equipment";

const MyListings: React.FC = () => {
  const [listings, setListings] = useState<Array<EquipmentListing>>([]);
  const [pageLoading, setPageLoading] = useState(true);

  useIonViewDidEnter(() => {
    getMyListings().then((data) => {
      setListings(data.equipment);
      setPageLoading(false);
    });
  });

  return (
    <IonPage>
      <IonHeader className={"ion-no-border"}>
        <IonToolbar />
      </IonHeader>

      <PageTitle title={"My Listings"} />

      <IonContent>
        {pageLoading && (
          <div className="ion-margin-top ion-text-center">
            <IonSpinner name={"crescent"} />
          </div>
        )}

        {!pageLoading && (
          <>
            {listings.length < 1 && (
              <div className={"ion-padding-top ion-text-center"}>
                <IonText className={"no-listings-text text-primary"}>
                  You Haven't Published Any Listings
                </IonText>
              </div>
            )}

            {listings.length > 0 && (
              <>
                {listings.map((listing: any, index: any) => {
                  return <MyListingCard key={index} equipment={listing} />;
                })}
              </>
            )}

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
