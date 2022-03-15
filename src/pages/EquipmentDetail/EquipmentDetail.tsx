import React, { useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonRow,
  IonCol,
  IonText,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonImg,
  IonSlides,
  IonSlide,
  IonChip,
  IonItem,
  IonButton,
  IonList,
} from "@ionic/react";
import {
  chatbubbleEllipsesOutline,
  locationOutline,
  bookmarkSharp,
  arrowRedoSharp,
  infiniteOutline,
  gitCompareOutline,
} from "ionicons/icons";
import image from "../../orange.jpeg";
import "./EquipmentDetail.css";
import TechnicalDataField from "../../components/TechnicalDataField/TechnicalDataField";
import RelatedEquipmentCard from "../../components/RelatedEquipmentCard/RelatedEquipmentCard";
import { useParams } from "react-router";

const EquipmentDetail: React.FC = () => {
  const id = useParams();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color={"dark"} />
          </IonButtons>
          <IonTitle>
            Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonSlides pager>
          <IonSlide>
            <IonImg src={image} style={{ height: "310px" }} />
          </IonSlide>
          <IonSlide>
            <IonImg src={image} style={{ height: "310px" }} />
          </IonSlide>
          <IonSlide>
            <IonImg src={image} style={{ height: "310px" }} />
          </IonSlide>
        </IonSlides>

        <div className={"ion-padding-horizontal"}>
          <IonChip className={"ion-no-margin ion-margin-vertical"}>
            <IonLabel>Refurbished (Up To Spec)</IonLabel>
          </IonChip>

          <IonText>
            <h2 className={"ion-no-margin"} style={{ fontWeight: "normal" }}>
              Used Marathon WS 5043-830 Open End Auto-Tie Horizontal Baler
            </h2>
            <h4 className={"ion-margin-top"}>$94,000.00</h4>
          </IonText>

          <div id={"equipment-overview"}>
            <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
              <IonIcon icon={locationOutline} className={"ion-margin-end"} />
              <IonText>Salt Lake City, UT 84104, USA</IonText>
            </IonRow>

            <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
              <IonIcon icon={gitCompareOutline} className={"ion-margin-end"} />
              <IonText>Marathon Equipment Company</IonText>
            </IonRow>

            <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
              <IonIcon icon={infiniteOutline} className={"ion-margin-end"} />
              <IonText>Single Ram Open End Auto-Tie Horizontal Balers</IonText>
            </IonRow>
          </div>

          {/*
          <IonCard class={"send-message-card"}>
            <IonItem
              lines="none"
              className={"ion-no-padding"}
              style={{ padding: "0 10px" }}
            >
              <IonIcon
                icon={chatbubblesOutline}
                slot="start"
                color="tertiary"
                style={{ fontSize: "30px" }}
              />
              <IonLabel style={{ fontSize: "14px", fontWeight: "bold" }}>
                Send seller a message
              </IonLabel>
            </IonItem>

            <IonCardContent className={"ion-no-padding"}>
              <IonChip className={"ion-no-margin ion-margin-start"}>
                <IonInput placeholder={"Is this still available?"} />
              </IonChip>

              <IonButton fill="solid" slot="end" className={"ion-margin-start"}>
                Send
              </IonButton>
            </IonCardContent>
          </IonCard>
          */}
        </div>

        <IonItem className="ion-no-padding ion-justify-content-evenly ion-margin-vertical large-icons-row">
          <IonCol>
            <IonButton
              className={"large-icon-button ion-no-padding"}
              color={"dark"}
              style={{
                borderRadius: "50%",
              }}
            >
              <IonIcon
                icon={chatbubbleEllipsesOutline}
                className={"large-icon"}
                slot={"icon-only"}
              />
            </IonButton>
            Message
          </IonCol>

          <IonCol>
            <IonButton
              className={"large-icon-button ion-no-padding"}
              color={"dark"}
              style={{
                borderRadius: "50%",
              }}
            >
              <IonIcon
                icon={bookmarkSharp}
                className={"large-icon"}
                slot={"icon-only"}
              />
            </IonButton>
            Save
          </IonCol>

          <IonCol>
            <IonButton
              className={"large-icon-button ion-no-padding"}
              color={"dark"}
              style={{
                borderRadius: "50%",
              }}
            >
              <IonIcon
                icon={arrowRedoSharp}
                className={"large-icon"}
                slot={"icon-only"}
              />
            </IonButton>
            Share
          </IonCol>
        </IonItem>

        <div id={"technical-data"}>
          <IonText>
            <h3 className={"ion-margin-horizontal sub-heading"}>
              Technical Data
            </h3>
          </IonText>

          <IonList>
            <TechnicalDataField label={"Manual / Auto Tie"} data={"Auto"} />
            <TechnicalDataField label={"Cylinder Size"} data={"Auto"} />
            <TechnicalDataField label={"Motor Horsepower"} data={"Auto"} />
            <TechnicalDataField label={"Feed Opening Length"} data={"Auto"} />
            <TechnicalDataField label={"Feed Opening Width"} data={"Auto"} />
            <TechnicalDataField label={"Hooper Opening Length"} data={"Auto"} />
            <TechnicalDataField label={"Hopper Opening Width"} data={"Auto"} />
            <TechnicalDataField label={"Bale Size Width"} data={"Auto"} />
            <TechnicalDataField label={"Bale Size height"} data={"Auto"} />
          </IonList>
        </div>

        <IonText>
          <h3 className={"ion-margin subheading"}>Related Equipment</h3>
        </IonText>
        <RelatedEquipmentCard name={"Test"} />
      </IonContent>
    </IonPage>
  );
};

export default EquipmentDetail;
