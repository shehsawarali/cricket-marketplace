import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonText,
  IonButton,
  IonRouterLink,
} from "@ionic/react";
import "./MyListings.css";
import { searchOutline } from "ionicons/icons";
import React, { useState } from "react";
import MyListingCard from "../../components/MyListingCard.tsx/MyListingCard";

const mockData = {
  id: "1",
  name: "Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler",
  price: "65,000.00",
};

const MyListings: React.FC = () => {
  const [listings, setListings] = useState([mockData]);

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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">My Listings</IonTitle>
          </IonToolbar>
        </IonHeader>

        {listings?.length < 1 && (
          <div className={"ion-padding ion-text-center"}>
            <IonText style={{ fontSize: "16px", color: "indianred" }}>
              You Haven't Published Any Listings
            </IonText>

            <IonRouterLink routerLink={"/add-listing"} color={"dark"}>
              <IonButton
                className={"ion-margin"}
                color={"success"}
                expand={"full"}
                size={"large"}
                style={{
                  fontSize: "18px",
                }}
              >
                Start Selling
              </IonButton>
            </IonRouterLink>
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

            <IonRouterLink routerLink={"/add-listing"} color={"dark"}>
              <IonButton
                className={"ion-margin"}
                color={"success"}
                expand={"full"}
                size={"large"}
                style={{
                  fontSize: "18px",
                }}
              >
                Start Selling
              </IonButton>
            </IonRouterLink>
          </>
        )}
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
