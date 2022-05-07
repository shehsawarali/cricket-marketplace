import React from "react";

import { Formik, FormikValues } from "formik";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonFooter,
  IonTextarea,
  IonText,
} from "@ionic/react";
import { useMutation, useQuery } from "react-query";

import "./SellForm.css";
import HideTabs from "../../components/HideTabs";
import PageTitle from "../../components/PageTitle/PageTitle";
import LocationModal from "../../components/LocationModal/LocationModal";
import ImagesModal from "../../components/ImagesModal/ImagesModal";
import { EquipmentCategory } from "../../types";
import { createEquipment, getCategories } from "../../services/equipment";
import Location from "../../types/Location.model";
import { sellFormValidation } from "../../constants";
import ServerErrorAlert from "../../components/ServerErrorAlert";

const SellForm: React.FC = () => {
  const categoryQuery = useQuery("equipmentCategories", getCategories, {
    select: (data) => data.data.categories,
    retry: 1,
  });

  const submitMutation = useMutation(createEquipment);

  const pageRef = React.useRef<any>(null);
  const [selectedImages, setSelectedImages] = React.useState<Array<object>>([]);
  const [location, setLocation] = React.useState<Location | null>(null);
  const [locationModal, setLocationModal] = React.useState<boolean>(false);
  const [imagesModal, setImagesModal] = React.useState<boolean>(false);

  const toggleLocationModal = () => {
    setLocationModal((currentState) => !currentState);
  };

  const toggleImagesModal = () => {
    setImagesModal((currentState) => !currentState);
  };

  const showError = (errors: any) => {
    let errorsKeys = Object.keys(errors);
    return errors[errorsKeys[0]];
  };

  const submitForm = (values: FormikValues, { setFieldError }: any) => {
    if (location === null || selectedImages.length === 0) {
      if (location === null) {
        setFieldError("location", "Location is required");
      }

      if (selectedImages.length === 0) {
        setFieldError("media", "Media must be uploaded");
      }

      return;
    }

    submitMutation.mutate({
      title: values.name,
      description: values.description,
      price: values.price,
      categories: values.categories,
      location: location.description,
      brand_id: 1,
    });
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
          name: "",
          description: "",
          price: "",
          categories: [],
          location: "",
          media: [],
        }}
        onSubmit={submitForm}
        validationSchema={sellFormValidation}
      >
        {(formikProps) => (
          <>
            <IonContent>
              <PageTitle title={"Sell Now"} />

              <form onSubmit={formikProps.handleSubmit}>
                <IonItem className={"sell-form-field"}>
                  <IonLabel>Name</IonLabel>
                  <IonInput
                    name={"name"}
                    placeholder={"Required"}
                    value={formikProps.values.name}
                    onInput={formikProps.handleChange}
                  />
                </IonItem>

                <IonItem className={"sell-form-field"}>
                  <IonLabel>Categories</IonLabel>
                  <IonSelect
                    name={"categories"}
                    value={formikProps.values.categories}
                    onIonChange={formikProps.handleChange}
                    multiple
                  >
                    {categoryQuery.data?.map(
                      (category: EquipmentCategory, index: number) => {
                        return (
                          <IonSelectOption
                            value={category.id}
                            key={index}
                            className={"ion-text-capitalize"}
                          >
                            {category.name}
                          </IonSelectOption>
                        );
                      }
                    )}
                  </IonSelect>
                </IonItem>

                <IonItem className={"sell-form-field"}>
                  <IonLabel>Location</IonLabel>
                  <IonInput
                    readonly
                    placeholder={"Required"}
                    value={location?.description}
                    onClick={toggleLocationModal}
                  />
                </IonItem>

                <IonItem className={"sell-form-field"}>
                  <IonLabel>Description</IonLabel>
                  <IonTextarea
                    name={"description"}
                    placeholder={"Required"}
                    value={formikProps.values.description}
                    onIonChange={formikProps.handleChange}
                    autoGrow
                  />
                </IonItem>

                <IonItem className={"sell-form-field "}>
                  <IonLabel>Price</IonLabel>
                  <IonInput
                    name={"price"}
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
                    value={
                      selectedImages.length > 0
                        ? `${selectedImages.length} selected`
                        : null
                    }
                    onClick={toggleImagesModal}
                  />
                </IonItem>

                {!formikProps.isValid && formikProps.submitCount > 0 && (
                  <div
                    className={"ion-text-center ion-margin ion-color-danger"}
                  >
                    <IonText color={"warning"}>
                      {showError(formikProps.errors)}
                    </IonText>
                  </div>
                )}
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
          </>
        )}
      </Formik>

      <LocationModal
        isOpen={locationModal}
        setValue={setLocation}
        close={toggleLocationModal}
        parentRef={pageRef.current}
      />

      <ImagesModal
        isOpen={imagesModal}
        setValue={setSelectedImages}
        close={toggleImagesModal}
        parentRef={pageRef.current}
      />

      {(submitMutation.isError || categoryQuery.isError) && (
        <ServerErrorAlert />
      )}
    </IonPage>
  );
};

export default SellForm;
