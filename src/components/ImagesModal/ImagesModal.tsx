import React from "react";

import { Camera } from "@capacitor/camera";
import { closeOutline } from "ionicons/icons";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./ImagesModal.css";

interface ImageModalProps {
  isOpen: boolean;
  setValue: React.Dispatch<React.SetStateAction<object[]>>;
  close: () => void;
  parentRef?: HTMLDivElement;
}

const ImagesModal: React.FC<ImageModalProps> = (props) => {
  const [selectedImages, setSelectedImages] = React.useState<Array<object>>([]);
  const [defaultImage, setDefaultImage] = React.useState<string | null>(null);

  const attachPictures = async () => {
    const cameraResultImg = await Camera.pickImages({
      quality: 90,
      correctOrientation: true,
    });

    setSelectedImages(cameraResultImg.photos);
    props.setValue(cameraResultImg.photos);
    setDefaultImage(cameraResultImg.photos[0].webPath);
  };

  return (
    <IonModal
      isOpen={props.isOpen}
      swipeToClose={false}
      presentingElement={props.parentRef ? props.parentRef : undefined}
    >
      <IonHeader>
        <IonToolbar>
          <IonTitle>Attach Media</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={props.close}>
              <IonIcon
                icon={closeOutline}
                color={"dark"}
                className={"modal-close-icon"}
              />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div id={"images"} className={"ion-padding-bottom ion-margin-bottom"}>
          <IonItem className={"sell-form-field"}>
            <IonLabel>Images</IonLabel>
            <IonInput
              readonly
              placeholder={"0 Selected"}
              value={
                selectedImages.length > 0
                  ? `${selectedImages.length} selected`
                  : null
              }
              onClick={attachPictures}
            />
          </IonItem>

          <IonGrid>
            <IonRow>
              {selectedImages.map((img: any, index: any) => {
                return (
                  <IonCol
                    key={index}
                    size={"4"}
                    className={"preview-image-wrapper"}
                  >
                    <IonImg
                      onClick={() => setDefaultImage(img.webPath)}
                      src={img.webPath}
                      className={`preview-image ${
                        defaultImage === img.webPath && `selected`
                      }`}
                    />

                    {defaultImage === img.webPath && (
                      <div className={"centered"}>Cover</div>
                    )}
                  </IonCol>
                );
              })}
            </IonRow>
          </IonGrid>
        </div>

        <hr className={"media-section-divider"} />

        <div id={"videos"} className={"ion-padding-top ion-margin-top"}>
          <IonItem className={"sell-form-field"}>
            <IonLabel>Videos</IonLabel>
            <IonInput readonly placeholder={"0 Selected"} />
          </IonItem>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default ImagesModal;
