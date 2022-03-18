import React, { useEffect, useState } from "react";
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
import HideTabs from "../../components/HideTabs";
import { mockEquipment, mockPhoneNumber } from "../../constants";
import { Share } from "@capacitor/share";
import { Camera } from "@capacitor/camera";

// Hardcoded for dev
const images = [image, image];
const phoneNumber = mockPhoneNumber;

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const EquipmentDetail: React.FC = () => {
  const id = useParams();
  const [equipment, setEquipment] = useState<equipment | null>(null);

  useEffect(() => {
    setEquipment(mockEquipment);
  }, []);

  const socialShare = async () => {
    const shareResult = await Share.share({
      title: "CrickPro Marketplace",
      text: "Really awesome thing you need to see right meow",
      url: "http://ionicframework.com/",
      dialogTitle: "Share with buddies",
    });
  };

  return (
    <IonPage className={"equipment-detail"}>
      <HideTabs />
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton color={"dark"} />
          </IonButtons>
          <IonTitle>{equipment?.name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      {equipment && (
        <IonContent fullscreen>
          {images.length > 0 && (
            <IonSlides pager color={"dark"}>
              {images.map((image: any, index: any) => (
                <IonSlide key={index}>
                  <IonImg src={image} />
                </IonSlide>
              ))}
            </IonSlides>
          )}

          <div className={"ion-padding-horizontal"}>
            <IonChip className={"ion-no-margin ion-margin-vertical"}>
              <IonLabel>Refurbished (Up To Spec)</IonLabel>
            </IonChip>

            <IonText>
              <h2 className={"ion-no-margin"} style={{ fontWeight: "normal" }}>
                {equipment.name}
              </h2>
              <h4 className={"ion-margin-top"}>${equipment.price}</h4>
            </IonText>

            <div id={"equipment-overview"}>
              <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
                <IonIcon icon={locationOutline} className={"ion-padding-end"} />
                <IonText>{equipment.location}</IonText>
              </IonRow>

              <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
                <IonIcon
                  icon={gitCompareOutline}
                  className={"ion-padding-end"}
                />
                <IonText>Marathon Equipment Company</IonText>
              </IonRow>

              <IonRow className="ion-align-items-center ion-margin-top equipment-overview">
                <IonIcon icon={infiniteOutline} className={"ion-padding-end"} />
                <IonText>
                  Single Ram Open End Auto-Tie Horizontal Balers
                </IonText>
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
              <a href={`https://wa.me/${phoneNumber}`}>
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
              </a>
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
              <h3 className={"ion-padding-horizontal sub-heading"}>
                Technical Data
              </h3>
            </IonText>

            <IonList>
              <TechnicalDataField label={"Manual / Auto Tie"} data={`Auto`} />
              <TechnicalDataField label={"Cylinder Size"} data={`8"`} />
              <TechnicalDataField
                label={"Motor Horsepower"}
                data={`21-30 HP`}
              />
              <TechnicalDataField
                label={"Feed Opening Length"}
                data={`40"-60"`}
              />
              <TechnicalDataField
                label={"Feed Opening Width"}
                data={`31"-42"`}
              />
              <TechnicalDataField
                label={"Hooper Opening Length"}
                data={`21-30 HP`}
              />
              <TechnicalDataField label={"Hopper Opening Width"} data={`9"`} />
              <TechnicalDataField label={"Bale Size Width"} data={`51-75 HP`} />
              <TechnicalDataField label={"Bale Size height"} data={`11"`} />
            </IonList>
          </div>

          <IonText>
            <h3 className={"ion-padding-horizontal sub-heading"}>
              Related Equipment
            </h3>

            <RelatedEquipmentCard
              id={equipment.id}
              name={equipment.name}
              price={equipment.price}
            />
          </IonText>
        </IonContent>
      )}
    </IonPage>
  );
};

export default EquipmentDetail;
