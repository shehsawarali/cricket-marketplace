import React from "react";
import { IonItem, IonText } from "@ionic/react";
import "./TechinicalDataField.css";

interface TechnicalData {
  label: string;
  data: string;
}

const TechnicalDataField: React.FC<TechnicalData> = ({ label, data }) => {
  return (
    <IonItem className={"ion-no-padding"}>
      <div className={"technical-data-field"}>
        <IonText className={"ion-no-padding ion-padding-start"}>
          <p className={"label"}>{label}</p>
          <p className={"data"}>{data}</p>
        </IonText>
      </div>
    </IonItem>
  );
};

export default TechnicalDataField;
