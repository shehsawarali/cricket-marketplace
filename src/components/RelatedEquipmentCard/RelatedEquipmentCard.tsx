import React from "react";

import {
  IonImg,
  IonRouterLink,
  IonSlide,
  IonSlides,
  IonText,
} from "@ionic/react";

import image from "../../orange.jpeg";
import "./RelatedEquipmentCard.css";

interface RelatedEquipmentProps {
  id: number;
  title: string;
  price: string;
}

const RelatedEquipmentCard: React.FC<RelatedEquipmentProps> = ({
  id,
  title,
  price,
}) => {
  return (
    <IonRouterLink routerLink={`/catalog/equipment/${id}`} color={"dark"}>
      <div className={"related-equipment-card ion-padding-horizontal"}>
        <IonSlides className={"ion-margin-bottom"} pager>
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
        </IonSlides>

        <IonText className={"ion-margin-top"}>
          <h4>{title}</h4>

          <strong className={"text-primary"}>${price}</strong>
        </IonText>
      </div>
    </IonRouterLink>
  );
};

export default RelatedEquipmentCard;
