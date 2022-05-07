import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonModal,
  IonToolbar,
  IonContent,
  IonItem,
  IonSearchbar,
} from "@ionic/react";
import { closeOutline, locateOutline, locationOutline } from "ionicons/icons";
import { Geolocation } from "@capacitor/geolocation";

import "./LocationModal.css";
import { getLocationPredictions } from "../../services/location";
import Location from "../../types/Location.model";
import { useQuery } from "react-query";
import ServerErrorAlert from "../ServerErrorAlert";

interface LocationModalProps {
  isOpen: boolean;
  setValue: React.Dispatch<React.SetStateAction<Location | null>>;
  close: () => void;
  parentRef?: HTMLDivElement;
}

const LocationModal: React.FC<LocationModalProps> = (props) => {
  const [query, setQuery] = React.useState("");

  const locationQuery = useQuery(
    ["locationSearch", query],
    () => {
      if (query) return getLocationPredictions(query);
    },
    {
      select: (data) => data.predictions,
    }
  );

  const select = (location: Location) => {
    props.setValue(location);
    props.close();
  };

  const getGeolocation = async () => {
    const GeoLocationPosition = await Geolocation.getCurrentPosition();

    // Use GeoLocationPosition to get city
  };

  const onChange = (e: any) => {
    setQuery(e.target.value);
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
        <IonSearchbar
          value={query}
          onIonChange={onChange}
          showCancelButton="never"
          debounce={500}
          placeholder={"Location"}
        />

        <div id={"results"}>
          {locationQuery.data?.map((location: Location, index: any) => (
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

      {locationQuery.isError && <ServerErrorAlert />}
    </IonModal>
  );
};

export default LocationModal;
