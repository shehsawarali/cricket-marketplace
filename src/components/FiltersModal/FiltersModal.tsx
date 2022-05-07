import React from "react";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonModal,
  IonToolbar,
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRange,
  IonFooter,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { Formik, FormikValues } from "formik";
import {
  EquipmentCategory,
  EquipmentBrand,
  EquipmentSearchFilters,
} from "../../types";
import { useQuery } from "react-query";
import { getCategories } from "../../services/equipment";
import ServerErrorAlert from "../ServerErrorAlert";
import Location from "../../types/Location.model";

interface FiltersModalProps {
  isOpen: boolean;
  close: () => void;
  parentRef?: HTMLDivElement;
  filters: EquipmentSearchFilters;
  setFilters: React.Dispatch<React.SetStateAction<EquipmentSearchFilters>>;
}

const FiltersModal: React.FC<FiltersModalProps> = (props) => {
  const categoryQuery = useQuery("equipmentCategories", getCategories, {
    select: (data) => data.data.categories,
    retry: 1,
  });

  const brandsQuery = useQuery(
    "equipmentBrands",
    () => [{ id: 0, name: "Mock Brand" }],
    {
      retry: 1,
    }
  );

  const onSubmit = (values: FormikValues) => {
    props.setFilters({
      brands: values.brands,
      categories: values.categories,
      lowerPriceLimit: values.lowerPriceLimit,
      upperPriceLimit: values.upperPriceLimit,
    });
    props.close();
  };

  return (
    <IonModal
      isOpen={props.isOpen}
      swipeToClose={false}
      presentingElement={props.parentRef ? props.parentRef : undefined}
    >
      <Formik
        initialValues={{
          brands: props.filters.brands,
          categories: props.filters.brands,
          lowerPriceLimit: props.filters.lowerPriceLimit,
          upperPriceLimit: props.filters.upperPriceLimit,
        }}
        onSubmit={onSubmit}
      >
        {(formikProps) => (
          <>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Search Filters</IonTitle>
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
                <IonLabel>Brands</IonLabel>
                <IonSelect
                  name={"brands"}
                  value={formikProps.values.brands}
                  onIonChange={formikProps.handleChange}
                  multiple
                >
                  {brandsQuery.data?.map(
                    (brand: EquipmentBrand, index: number) => {
                      return (
                        <IonSelectOption
                          value={brand.id}
                          key={index}
                          className={"ion-text-capitalize"}
                        >
                          {brand.name}
                        </IonSelectOption>
                      );
                    }
                  )}
                </IonSelect>
              </IonItem>

              <IonItem className={"sell-form-field"}>
                <IonLabel>Min Price</IonLabel>
                <IonInput
                  name={"lowerPriceLimit"}
                  value={formikProps.values.lowerPriceLimit}
                  onIonChange={formikProps.handleChange}
                  placeholder={"Min Price"}
                  type={"number"}
                  min={"0"}
                />
              </IonItem>

              <IonItem className={"sell-form-field"}>
                <IonLabel>Max Price</IonLabel>
                <IonInput
                  name={"upperPriceLimit"}
                  value={formikProps.values.upperPriceLimit}
                  onIonChange={formikProps.handleChange}
                  placeholder={"Max Price"}
                />
              </IonItem>
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
                Apply Filters
              </IonButton>
            </IonFooter>
          </>
        )}
      </Formik>

      {(categoryQuery.isError || brandsQuery.isError) && <ServerErrorAlert />}
    </IonModal>
  );
};

export default FiltersModal;
