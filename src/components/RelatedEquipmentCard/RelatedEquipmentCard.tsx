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
} from "@ionic/react";
import image from "../../orange.jpeg";
import "./RelatedEquipmentCard.css";
import { locationOutline, chatbubblesOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

interface CardProps {
  name: string;
}

const RelatedEquipmentCard: React.FC<CardProps> = ({ name }) => {
  const history = useHistory();

  const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    history.push("/catalog/equipment/4");
  };

  return (
    <div
      className={"related-equipment-card ion-padding-horizontal"}
      onClick={onClick}
    >
      <IonSlides
        style={{ borderRadius: "10px 10px 0 0" }}
        className={"ion-margin-bottom"}
      >
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
  );
};

export default RelatedEquipmentCard;
