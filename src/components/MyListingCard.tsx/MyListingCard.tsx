import React from "react";
import {
  IonItem,
  IonLabel,
  IonRouterLink,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import image from "../../orange.jpeg";

interface MyListingCardProps {
  id: number;
  name: string;
  price: string;
  image?: string;
}

const MyListingCard: React.FC<MyListingCardProps> = ({ id, name, price }) => {
  return (
    <IonRouterLink routerLink={`/catalog/equipment/${id}`} color={"dark"}>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={image} />
        </IonThumbnail>

        <IonRow className={"text-overflow"}>
          <IonLabel>{name}</IonLabel>
          <IonLabel>
            <p>${price}</p>
          </IonLabel>
        </IonRow>
      </IonItem>
    </IonRouterLink>
  );
};

export default MyListingCard;
