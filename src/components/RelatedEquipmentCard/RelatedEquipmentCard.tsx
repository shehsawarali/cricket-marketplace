import React from "react";
import {
  IonImg,
  IonSlides,
  IonSlide,
  IonText,
  IonRouterLink,
} from "@ionic/react";
import image from "../../orange.jpeg";
import "./RelatedEquipmentCard.css";
import { PRIMARY_COLOR } from "../../constants";

interface RelatedEquipmentProps {
  id: string;
  name: string;
  price: string;
}

const RelatedEquipmentCard: React.FC<RelatedEquipmentProps> = ({
  id,
  name,
  price,
}) => {
  return (
    <IonRouterLink routerLink={`/catalog/equipment/${id}`} color={"dark"}>
      <div className={"related-equipment-card ion-padding-horizontal"}>
        <IonSlides
          pager
          style={{ borderRadius: "10px" }}
          className={"ion-margin-bottom"}
        >
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
        </IonSlides>

        <IonText className={"ion-margin-top"}>
          <h4 style={{ fontWeight: "normal" }}>{name}</h4>

          <strong style={{ color: PRIMARY_COLOR }}>${price}</strong>
        </IonText>
      </div>
    </IonRouterLink>
  );
};

export default RelatedEquipmentCard;
