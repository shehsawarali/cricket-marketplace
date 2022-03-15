import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <form className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Title</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Categories</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Location</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonInput />
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Images</IonLabel>
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Videos</IonLabel>
          <IonInput />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Price</IonLabel>
          <IonInput />
        </IonItem>

        <IonButton className="ion-margin-top" type="submit" expand="block">
          Login
        </IonButton>
      </form>
    </IonPage>
  );
};

export default Tab2;
