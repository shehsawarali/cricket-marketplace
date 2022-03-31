import React from "react";
import {
  IonItem,
  IonLabel,
  IonRouterLink,
  IonRow,
  IonThumbnail,
} from "@ionic/react";
import image from "../../orange.jpeg";
import { EquipmentListing } from "../../types";

interface MyListingCardProps {
  id: number;
  title: string;
  price: string;
  image?: string;
}

const MyListingCard: React.FC<{ equipment: EquipmentListing }> = ({
  equipment,
}) => {
  return (
    <IonRouterLink
      routerLink={`/catalog/equipment/${equipment.id}`}
      color={"dark"}
    >
      <IonItem>
        <IonThumbnail slot="start">
          <img src={image} />
        </IonThumbnail>

        <IonRow className={"text-overflow"}>
          <IonLabel>{equipment.title}</IonLabel>
          <IonLabel>
            <p>${equipment.price}</p>
          </IonLabel>
        </IonRow>
      </IonItem>
    </IonRouterLink>
  );
};

export default MyListingCard;
