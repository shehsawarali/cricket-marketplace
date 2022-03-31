import React from "react";
import {
  IonChip,
  IonLabel,
  IonImg,
  IonSlides,
  IonSlide,
  IonIcon,
  IonRow,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import { locationOutline, chatbubblesOutline } from "ionicons/icons";

import "./CatalogCard.css";
import { EquipmentDetail } from "../../types";
import image from "../../orange.jpeg";

const images = [image, image];

const CatalogCard: React.FC<{ equipment: EquipmentDetail }> = ({
  equipment,
}) => {
  return (
    <div className={"catalog-card ion-padding-horizontal"}>
      <IonRouterLink
        routerLink={`/catalog/equipment/${equipment.id}`}
        color={"dark"}
      >
        <IonSlides pager color={"dark"}>
          {images.map((image: any, index: any) => (
            <IonSlide key={index}>
              <IonImg src={image} />
            </IonSlide>
          ))}
        </IonSlides>
      </IonRouterLink>

      <IonRow className={"catalog-card-location"}>
        <IonRow className="ion-align-items-center">
          <IonIcon icon={locationOutline} />
          {equipment.location}
        </IonRow>
        <IonText className={"italic"}>
          <small>{equipment.distance} Mi. Away</small>
        </IonText>
      </IonRow>

      {equipment.condition && (
        <IonChip>
          <IonLabel className={"ion-text-capitalize"}>
            Refurbished (Up To Spec)
          </IonLabel>
        </IonChip>
      )}

      <IonText>
        <h4 className={"catalog-card-title ion-text-capitalize"}>
          {equipment.title}
        </h4>
      </IonText>

      <IonRow className={"ion-justify-content-between ion-align-items-center"}>
        <strong className={"text-primary"}>${equipment.price}</strong>

        <a
          href={`https://wa.me/${equipment.phone}`}
          className={"text-decoration-none"}
        >
          <IonChip color={"success"}>
            <IonIcon icon={chatbubblesOutline} />
            <IonLabel>Send a Message</IonLabel>
          </IonChip>
        </a>
      </IonRow>
    </div>
  );
};

export default CatalogCard;
