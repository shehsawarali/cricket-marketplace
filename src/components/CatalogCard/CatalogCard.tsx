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
import { mockPhoneNumber, PRIMARY_COLOR } from "../../constants";

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

      <IonRow
        className="ion-justify-content-between ion-align-items-center"
        style={{ padding: "10px 0 5px" }}
      >
        <IonRow className="ion-align-items-center">
          <IonIcon icon={locationOutline} style={{ marginRight: "10px" }} />
          {equipment.location}
        </IonRow>
        <IonText style={{ fontStyle: "italic" }}>
          <small>{equipment.distance} Mi. Away</small>
        </IonText>
      </IonRow>

      <IonChip>
        <IonLabel>Refurbished (Up To Spec)</IonLabel>
      </IonChip>

      <IonText>
        <h4 style={{ margin: "5px 0 0", fontWeight: "normal" }}>
          {equipment.name}
        </h4>
      </IonText>

      <IonRow className={"ion-justify-content-between ion-align-items-center"}>
        <strong style={{ color: PRIMARY_COLOR }}>${equipment.price}</strong>

        <a
          href={`https://wa.me/${phoneNumber}`}
          style={{ textDecoration: "none" }}
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
