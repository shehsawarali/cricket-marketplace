import React from "react";
import {
  IonItem,
  IonLabel,
  IonRouterLink,
  IonCol,
  IonThumbnail,
} from "@ionic/react";
import defaultImage from "../../orange.jpeg";
import { EquipmentListing } from "../../types";

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
          <img src={equipment.images[0]?.path || defaultImage} />
        </IonThumbnail>

        <IonCol className={"text-overflow"}>
          <IonLabel>{equipment.title}</IonLabel>
          <IonLabel>
            <p>${equipment.price}</p>
          </IonLabel>
        </IonCol>
      </IonItem>
    </IonRouterLink>
  );
};

export default MyListingCard;
