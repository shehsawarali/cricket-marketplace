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
  IonFooter,
} from "@ionic/react";
import "./SellForm.css";
import { imagesOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";
import { categories, sellFormValidation } from "../../constants";
import { Formik } from "formik";
import { Camera } from "@capacitor/camera";
import HideTabs from "../../components/HideTabs";
import PageTitle from "../../components/PageTitle/PageTitle";
import LocationModal from "../../components/LocationModal/LocationModal";
import ImagesModal from "../../components/ImagesModal/ImagesModal";

interface Category {
  id: number;
  name: string;
}

const SellForm: React.FC = () => {
  const [selectedImages, setSelectedImages] = useState<Array<object>>([]);
  const pageRef = React.useRef<any>(null);

  const [locationModal, setLocationModal] = useState<boolean>(false);
  const [imagesModal, setImagesModal] = useState<boolean>(false);

  const toggleLocationModal = () => {
    setLocationModal((currentState) => !currentState);
  };

  const toggleImagesModal = () => {
    setImagesModal((currentState) => !currentState);
  };

  return (
    <IonPage ref={pageRef}>
      <HideTabs />
      <IonHeader className={"ion-no-border"}>
        <IonToolbar className={"ionic-padding-horizontal"}>
          <IonButtons slot="start">
            <IonBackButton color={"dark"} />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

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
          <>
            <IonContent>
              <PageTitle title={"Sell Now"} />

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
                    readonly
                    placeholder={"Required"}
                    value={formikProps.values.location}
                    onClick={toggleLocationModal}
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

                <IonItem className={"sell-form-field "}>
                  <IonLabel>Price</IonLabel>
                  <IonInput
                    inputmode={"numeric"}
                    placeholder={"Required"}
                    value={formikProps.values.price}
                    onInput={formikProps.handleChange}
                  />
                </IonItem>

                <IonItem className={"sell-form-field"}>
                  <IonLabel>Media</IonLabel>
                  <IonInput
                    readonly
                    placeholder={"0 Selected"}
                    onClick={() => toggleImagesModal()}
                  />
                </IonItem>
              </form>
            </IonContent>

            <IonFooter className={"ion-padding"}>
              <IonButton
                onClick={() => formikProps.handleSubmit()}
                type={"submit"}
                expand={"block"}
                size={"large"}
                color={"primary"}
                className={"font-18px"}
              >
                Submit
              </IonButton>
            </IonFooter>

            <LocationModal
              isOpen={locationModal}
              setValue={(value) =>
                formikProps.setFieldValue("location", value, true)
              }
              close={toggleLocationModal}
            />

            <ImagesModal
              isOpen={imagesModal}
              setValue={setSelectedImages}
              close={toggleImagesModal}
              parentRef={pageRef.current}
            />
          </>
        )}
      </Formik>
    </IonPage>
  );
};

export default SellForm;
