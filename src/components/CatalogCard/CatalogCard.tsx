import React from "react";

import { locationOutline, chatbubblesOutline } from "ionicons/icons";
import {
  IonChip,
  IonIcon,
  IonImg,
  IonLabel,
  IonRouterLink,
  IonRow,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";

import "./CatalogCard.css";
import defaultImage from "../../orange.jpeg";
import { Equipment } from "../../types/Equipment.model";

const CatalogCard: React.FC<{ equipment: Equipment }> = ({ equipment }) => {
  return (
    <div className={"catalog-card ion-padding-horizontal"}>
      <IonRouterLink
        routerLink={`/catalog/equipment/${equipment.id}`}
        color={"dark"}
      >
        <IonSlides pager color={"dark"}>
          {equipment.images.map((image: any, index: any) => (
            <IonSlide key={index}>
              <IonImg src={image.path} />
            </IonSlide>
          ))}

          {equipment.images.length === 0 && (
            <IonSlide>
              <IonImg src={defaultImage} />
            </IonSlide>
          )}
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
            {equipment.condition}
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
