import { useState } from "react";
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
import { getLocationPredictions } from "../../services/location";
import Location from "../../types/Location.model";

interface LocationModalProps {
  isOpen: boolean;
  setValue: React.Dispatch<React.SetStateAction<Location | null>>;
  close: () => void;
  parentRef?: HTMLDivElement;
}

const LocationModal: React.FC<LocationModalProps> = (props) => {
  const [locations, setLocations] = useState([]);

  const select = (location: Location) => {
    props.setValue(location);
    props.close();
  };

  const getGeolocation = async () => {
    const GeoLocationPosition = await Geolocation.getCurrentPosition();

    // Use GeoLocationPosition to get city
  };

  const onChange = (e: any) => {
    const query = e.target.value;

    getLocationPredictions(query).then((response) => {
      setLocations(response.predictions);
    });
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
            onIonChange={onChange}
          />
        </IonRow>

        <div id={"results"}>
          {locations.map((location: Location, index: any) => (
            <IonItem onClick={() => select(location)} key={index}>
              <IonIcon slot="start" icon={locationOutline} />

              <div className={"text-overflow location-card-content"}>
                <IonLabel className={"mb-10"}>
                  {location.structured_formatting.main_text}
                </IonLabel>
                <IonLabel>
                  <p>{location.structured_formatting.secondary_text}</p>
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
