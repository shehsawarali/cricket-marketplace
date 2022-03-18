import React, { useState, useEffect } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonText,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import "./MyListings.css";
import { searchOutline } from "ionicons/icons";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";
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

const MyListings: React.FC = () => {
  const [listings, setListings] = useState<Array<equipment>>([mockEquipment]);

  useEffect(() => {
    // setListings([mockEquipment]);
  }, []);

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
        <PageTitle title={"My Listings"} />

        {listings.length < 1 && (
          <div className={"ion-padding-top ion-text-center"}>
            <IonText style={{ fontSize: "16px", color: "indianred" }}>
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
              expand={"full"}
              size={"large"}
              style={{
                fontSize: "18px",
              }}
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
