import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonRouterLink,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonImg,
} from "@ionic/react";
import "./SellForm.css";
import { searchOutline, imagesOutline } from "ionicons/icons";
import React, { useState } from "react";
import { categories, sellFormValidation } from "../../constants";
import { Formik } from "formik";
import {
  Camera,
  CameraResultType,
  GalleryImageOptions,
} from "@capacitor/camera";

interface Category {
  id: number;
  name: string;
}

const MyListings: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Array<object>>([]);

  const attachPictures = async () => {
    const cameraResultImg = await Camera.pickImages({
      quality: 90,
      correctOrientation: true,
    });

    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)

    // var imageUrl = cameraResultImg.webPath;
    //
    // // Can be set to the src of an image now
    // console.log(imageUrl);
    setSelectedImages(cameraResultImg.photos);
  };

  const generateErrorMessage = (formikErrors: any) => {
    if (formikErrors.name) return formikErrors.name;

    if (formikErrors.categories) return formikErrors.categories;

    if (formikErrors.description) return formikErrors.categories;

    if (formikErrors.price) return formikErrors.categories;

    if (selectedImages.length == 0) return "Select at least one image/video";
  };

  return (
    <IonPage>
      <IonHeader>
        <IonButtons slot="start">
          <IonBackButton color={"dark"} />
        </IonButtons>
        <IonToolbar className={"ionic-padding-horizontal"}>
          <IonIcon
            icon={searchOutline}
            style={{ fontSize: "20px", marginRight: "10px" }}
            slot={"end"}
          />
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sell Now</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Formik
          validationSchema={sellFormValidation}
          initialValues={{
            name: null,
            description: null,
            price: null,
            location: null,
            categories: [],
          }}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
              <IonItem className={"sell-form-field"}>
                <IonLabel>Name</IonLabel>
                <IonInput
                  placeholder={"Required"}
                  value={formikProps.values.name}
                  onInput={formikProps.handleChange}
                />
              </IonItem>

              <IonItem className={"sell-form-field"}>
                <IonLabel>Categories</IonLabel>
                <IonSelect
                  multiple={true}
                  value={formikProps.values.categories}
                  onIonChange={formikProps.handleChange}
                >
                  {categories.map((category: Category, index: number) => {
                    return (
                      <IonSelectOption value={category.name} key={index}>
                        {category.name}
                      </IonSelectOption>
                    );
                  })}
                </IonSelect>
              </IonItem>

              <IonItem className={"sell-form-field"}>
                <IonLabel>Location</IonLabel>
                <IonInput
                  placeholder={"Required"}
                  value={formikProps.values.location}
                  onInput={formikProps.handleChange}
                />
              </IonItem>

              <IonItem className={"sell-form-field"}>
                <IonLabel>Description</IonLabel>
                <IonInput
                  placeholder={"Required"}
                  value={formikProps.values.description}
                  onInput={formikProps.handleChange}
                />
              </IonItem>

              <IonItem className={"sell-form-field ion-padding-bottom"}>
                <IonLabel>Price</IonLabel>
                <IonInput
                  inputmode={"numeric"}
                  placeholder={"Required"}
                  value={formikProps.values.price}
                  onInput={formikProps.handleChange}
                />
              </IonItem>

              <IonButton
                expand={"full"}
                size={"large"}
                className={"ion-margin"}
                color={"warning"}
                style={{
                  height: "100px",
                }}
                onClick={() => attachPictures()}
              >
                <IonIcon
                  icon={imagesOutline}
                  style={{ fontSize: "28px" }}
                  className={"ion-padding-end"}
                />
                {selectedImages.length > 0
                  ? `${selectedImages.length} selected`
                  : "Attach pictures"}
              </IonButton>

              <IonButton
                type={"submit"}
                expand={"full"}
                size={"large"}
                className={"ion-margin"}
                color={"primary"}
                style={{
                  fontSize: "18px",
                }}
              >
                Submit
              </IonButton>
            </form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default MyListings;
