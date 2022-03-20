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
import image from "../../orange.jpeg";
import "./CatalogCard.css";
import { locationOutline, chatbubblesOutline } from "ionicons/icons";
import { mockPhoneNumber } from "../../constants";

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const phoneNumber = mockPhoneNumber;
const images = [image, image];

const CatalogCard: React.FC<equipment> = (equipment) => {
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

      <IonChip>
        <IonLabel>Refurbished (Up To Spec)</IonLabel>
      </IonChip>

      <IonText>
        <h4 className={"catalog-card-title"}>{equipment.name}</h4>
      </IonText>

      <IonRow className={"ion-justify-content-between ion-align-items-center"}>
        <strong className={"text-primary"}>${equipment.price}</strong>

        <a
          href={`https://wa.me/${phoneNumber}`}
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
