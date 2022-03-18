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

interface equipment {
  id: string;
  name: string;
  price: string;
  location: string;
  distance: string;
  categories: Array<string>;
}

const Search: React.FC = () => {
  const [results, setResults] = useState<Array<equipment>>([]);

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
              <IonRow
                className={"ion-align-items-center"}
                style={{
                  backgroundColor: "silver",
                  margin: "15px",
                  borderRadius: "10px",
                  padding: "0 5px",
                }}
              >
                <IonIcon
                  icon={searchOutline}
                  style={{ fontSize: "24px", marginRight: "5px" }}
                />
                <IonInput
                  placeholder={"Search"}
                  style={{ fontSize: "17px" }}
                  value={formikProps.values.query}
                  onInput={formikProps.handleChange}
                  clearInput
                />
              </IonRow>
            </form>
          )}
        </Formik>

        <div id={"results"}>
          {results.map((result: equipment, index: any) => (
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
