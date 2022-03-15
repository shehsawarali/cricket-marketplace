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
import { useHistory } from "react-router-dom";

interface CardProps {
  name: string;
}

const CatalogCard: React.FC<CardProps> = ({ name }) => {
  return (
    <IonRouterLink routerLink={"/catalog/equipment/1"} color={"dark"}>
      <div
        className={"catalog-card ion-padding-horizontal"}
        style={{
          fontWeight: "normal",
          paddingBottom: "0",
          marginBottom: "25px",
        }}
      >
        <IonSlides style={{ borderRadius: "10px" }} pager color={"dark"}>
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
          <IonSlide>
            <IonImg src={image} />
          </IonSlide>
        </IonSlides>

        <IonRow
          className="ion-justify-content-between ion-align-items-center"
          style={{ padding: "10px 0 5px" }}
        >
          <IonRow className="ion-align-items-center">
            <IonIcon icon={locationOutline} style={{ marginRight: "10px" }} />
            Salt Lake City, UT, US
          </IonRow>
          <IonText style={{ fontStyle: "italic" }}>
            <small>719 Mi. Away</small>
          </IonText>
        </IonRow>

        <IonChip style={{ marginLeft: "0" }}>
          <IonLabel>Refurbished (Up To Spec)</IonLabel>
        </IonChip>

        <IonText>
          <h4 style={{ margin: "5px 0 0", fontWeight: "normal" }}>
            Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler
          </h4>
        </IonText>

        <IonRow
          className={"ion-justify-content-between ion-align-items-center"}
        >
          <strong style={{ color: "red" }}>$94,000.00</strong>

          <IonChip color={"success"}>
            <IonIcon icon={chatbubblesOutline} />
            <IonLabel>Send a Message</IonLabel>
          </IonChip>
        </IonRow>
      </div>
    </IonRouterLink>
  );
};

export default CatalogCard;
