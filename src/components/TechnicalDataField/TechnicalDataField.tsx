import React from "react";
import { IonLabel, IonItem, IonInput, IonText } from "@ionic/react";
import "./TechinicalDataField.css";

interface TechnicalData {
  label: string;
  data: string;
}

const TechnicalDataField: React.FC<TechnicalData> = ({ label, data }) => {
  return (
    <IonItem className={"ion-no-padding"}>
      <div className={"technical-data-field"}>
        <IonText className={"ion-no-padding ion-margin-start"}>
          <p className={"label"}>{label}</p>
          <p className={"data"}>{data}</p>
        </IonText>
        {/*<IonInput readonly value={data} className={"ion-margin-start"} />*/}
      </div>
    </IonItem>
  );
};

export default TechnicalDataField;
