import React from "react";

import { ellipsisHorizontal } from "ionicons/icons";
import {
  IonActionSheet,
  IonButton,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonRouterLink,
  IonThumbnail,
} from "@ionic/react";

import defaultImage from "../../orange.jpeg";
import { EquipmentListing } from "../../types/Equipment.model";
import { markEquipmentAsSold } from "../../services/equipment";

const MyListingCard: React.FC<{
  equipment: EquipmentListing;
  refresh: () => void;
}> = ({ equipment, refresh }) => {
  const [showActionSheet, setShowActionSheet] = React.useState(false);

  const markAsSold = () => {
    markEquipmentAsSold(equipment.id).then(() => {
      refresh();
    });
  };

  return (
    <>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={equipment.images[0]?.path || defaultImage} />
        </IonThumbnail>

        <IonRouterLink
          routerLink={`/catalog/equipment/${equipment.id}`}
          color={"dark"}
        >
          <IonCol className={"text-overflow"}>
            <IonLabel>{equipment.title}</IonLabel>
            <IonLabel>
              <p>${equipment.price}</p>
            </IonLabel>
          </IonCol>
        </IonRouterLink>

        <IonButton
          slot="end"
          fill={"clear"}
          onClick={() => setShowActionSheet(true)}
        >
          <IonIcon icon={ellipsisHorizontal} color={"dark"} size={"large"} />
        </IonButton>
      </IonItem>

      <IonActionSheet
        isOpen={showActionSheet}
        onDidDismiss={() => setShowActionSheet(false)}
        buttons={[
          {
            text: "Mark as Sold",
            handler: markAsSold,
          },
        ]}
      />
    </>
  );
};

export default MyListingCard;
