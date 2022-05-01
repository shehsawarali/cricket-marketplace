import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonSpinner,
} from "@ionic/react";
import { useQuery } from "react-query";

import "./Search.css";
import HideTabs from "../../components/HideTabs";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import { Equipment } from "../../types";
import { getSearchResults } from "../../services/equipment";

const Search: React.FC = () => {
  const [query, setQuery] = React.useState("");
  const searchQuery = useQuery(
    ["catalog", query],
    () => {
      if (query) return getSearchResults(query);
    },
    {
      select: (data) => data.equipment,
    }
  );

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
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
        <IonSearchbar
          value={query}
          onIonChange={handleQueryChange}
          showCancelButton="never"
          debounce={500}
        />

        <div>
          {searchQuery.isLoading && (
            <div className={"ion-text-center ion-margin-top"}>
              <IonSpinner />
            </div>
          )}

          {searchQuery.data?.map((result: Equipment, index: any) => (
            <CatalogCard key={index} equipment={result} />
          ))}

          {searchQuery.data && searchQuery.data.length === 0 && (
            <div className={"ion-text-center ion-margin-top"}>
              {searchQuery.isLoading && <IonSpinner />}

              {searchQuery.data && searchQuery.data.length === 0 && (
                <>There are no results matching your query</>
              )}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Search;
