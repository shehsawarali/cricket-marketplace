import React, { useState, useEffect } from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonRow,
  IonIcon,
  IonInput,
} from "@ionic/react";
import "./Search.css";
import { mockEquipment } from "../../constants";
import HideTabs from "../../components/HideTabs";
import { searchOutline } from "ionicons/icons";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import { Formik, FormikValues } from "formik";
import { Equipment } from "../../types";

const Search: React.FC = () => {
  const [results, setResults] = useState<Array<Equipment>>([]);

  useEffect(() => {
    setResults([mockEquipment, mockEquipment]);
  }, []);

  const search = (values: FormikValues) => {
    console.log(values);
    alert(`You searched for ${values}`);
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
        <Formik
          initialValues={{
            query: "",
          }}
          onSubmit={search}
        >
          {(formikProps) => (
            <form onSubmit={formikProps.handleSubmit}>
              <IonRow className={"ion-align-items-center search-input-row"}>
                <IonIcon icon={searchOutline} className={"search-input-icon"} />
                <IonInput
                  className={"search-input"}
                  placeholder={"Search"}
                  value={formikProps.values.query}
                  onInput={formikProps.handleChange}
                  clearInput
                />
              </IonRow>
            </form>
          )}
        </Formik>

        <div id={"results"}>
          {results.map((result: Equipment, index: any) => (
            <CatalogCard
              key={index}
              id={result.id}
              name={result.name}
              price={result.price}
              location={result.location}
              distance={result.distance}
              categories={result.categories}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
