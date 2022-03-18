import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonIcon,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import "./SellForm.css";
import { searchOutline, imagesOutline } from "ionicons/icons";
import React, { useState } from "react";
import { categories, sellFormValidation } from "../../constants";
import { Formik } from "formik";
import { Camera } from "@capacitor/camera";
import HideTabs from "../../components/HideTabs";
import PageTitle from "../../components/PageTitle";

interface Category {
  id: number;
  name: string;
}

const SellForm: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Array<object>>([]);

  const attachPictures = async () => {
    const cameraResultImg = await Camera.pickImages({
      quality: 90,
      correctOrientation: true,
    });

    setSelectedImages(cameraResultImg.photos);
  };

  return (
    <IonPage>
      <HideTabs />
      <IonHeader>
        <IonToolbar className={"ionic-padding-horizontal"}>
          <IonButtons slot="start">
            <IonBackButton color={"dark"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <PageTitle title={"Sell Now"} />

        <Formik
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

              <div className={"ion-padding"}>
                <IonButton
                  expand={"full"}
                  size={"large"}
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
              </div>

              <div
                className={"ion-padding"}
                style={{ verticalAlign: "bottom" }}
              >
                <IonButton
                  type={"submit"}
                  expand={"full"}
                  size={"large"}
                  color={"primary"}
                  style={{
                    fontSize: "18px",
                  }}
                >
                  Submit
                </IonButton>
              </div>
            </form>
          )}
        </Formik>
      </IonContent>
    </IonPage>
  );
};

export default SellForm;
