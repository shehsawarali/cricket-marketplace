import React from "react";

import { chatbubblesOutline } from "ionicons/icons";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonChip,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
} from "@ionic/react";

const SendMessageCard: React.FC = () => {
  return (
    <IonCard class={"send-message-card"}>
      <IonItem lines="none" className={"ion-no-padding"}>
        <IonIcon
          icon={chatbubblesOutline}
          slot="start"
          color="tertiary"
          className={"message-card-icon"}
        />
        <IonLabel>Send seller a message</IonLabel>
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
  );
};

export default SendMessageCard;
