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
import "./RelatedEquipmentCard.css";
import { locationOutline, chatbubblesOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

interface CardProps {
  name: string;
}

const RelatedEquipmentCard: React.FC<CardProps> = ({ name }) => {
  return (
    <IonRouterLink routerLink={"/catalog/equipment/4"} color={"dark"}>
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

        <IonText>
          <h4 style={{ margin: "5px 0 0", fontWeight: "normal" }}>
            Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler
          </h4>

          <strong style={{ color: "red" }}>$94,000.00</strong>
        </IonText>
      </div>
    </IonRouterLink>
  );
};

export default RelatedEquipmentCard;
