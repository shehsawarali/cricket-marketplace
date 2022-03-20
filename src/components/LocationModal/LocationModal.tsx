import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonModal,
  IonToolbar,
  IonContent,
  IonRow,
  IonItem,
} from "@ionic/react";
import {
  closeOutline,
  locateOutline,
  locationOutline,
  searchOutline,
} from "ionicons/icons";
import { Geolocation } from "@capacitor/geolocation";

import "./LocationModal.css";

interface LocationModalProps {
  isOpen: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  close: () => void;
  parentRef?: HTMLDivElement;
}

interface location {
  name: string;
  country: string;
}

const locations = [
  {
    name: "Evansville",
    country: "IN, USA",
  },
  {
    name: "Lahore",
    country: "Pakistan",
  },
];

const LocationModal: React.FC<LocationModalProps> = (props) => {
  const select = (name: string) => {
    props.setValue(name);
    props.close();
  };

  const getGeolocation = async () => {
    const GeoLocationPosition = await Geolocation.getCurrentPosition();

    // Use GeoLocationPosition to get city
  };

  return (
    <IonModal
      isOpen={props.isOpen}
      swipeToClose={false}
      presentingElement={props.parentRef ? props.parentRef : undefined}
    >
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton onClick={props.close}>
              <IonIcon
                icon={closeOutline}
                color={"dark"}
                className={"modal-close-icon"}
              />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={getGeolocation}>
              <IonIcon
                icon={locateOutline}
                className={"ion-padding-end"}
                color={"success"}
              />
              <IonLabel color={"success"}>Use Current Location</IonLabel>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonRow className={"ion-align-items-center location-input-row"}>
          <IonIcon icon={searchOutline} className={"location-input-icon"} />
          <IonInput
            placeholder={"Location"}
            className={"location-input"}
            clearInput
          />
        </IonRow>

        <div id={"results"}>
          {locations.map((location: location, index: any) => (
            <IonItem onClick={() => select(location.name)} key={index}>
              <IonIcon slot="start" icon={locationOutline} />

              <div className={"text-overflow location-card-content"}>
                <IonLabel className={"mb-10"}>{location.name}</IonLabel>
                <IonLabel>
                  <p>{location.country}</p>
                </IonLabel>
              </div>
            </IonItem>
          ))}
        </div>
      </IonContent>
    </IonModal>
  );
};

export default LocationModal;
