import React, { useState, useEffect } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonText,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import "./MyListings.css";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";
import PageTitle from "../../components/PageTitle/PageTitle";
import { mockEquipment } from "../../constants";

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const MyListings: React.FC = () => {
  const [listings, setListings] = useState<Array<equipment>>([]);

  useEffect(() => {
    setListings([mockEquipment]);
  }, []);

  return (
    <IonPage>
      <IonHeader className={"ion-no-border"}>
        <IonToolbar />
      </IonHeader>

      <IonContent>
        <PageTitle title={"My Listings"} />

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
              return (
                <MyListingCard
                  key={index}
                  id={listing.id}
                  name={listing.name}
                  price={listing.price}
                />
              );
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
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
