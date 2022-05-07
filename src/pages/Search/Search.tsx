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
  IonIcon,
  IonButton,
} from "@ionic/react";
import { funnelOutline } from "ionicons/icons";
import { useQuery } from "react-query";

import "./Search.css";
import HideTabs from "../../components/HideTabs";
import CatalogCard from "../../components/CatalogCard/CatalogCard";
import { Equipment, EquipmentSearchFilters } from "../../types";
import { getSearchResults } from "../../services/equipment";
import FiltersModal from "../../components/FiltersModal/FiltersModal";
import ServerErrorAlert from "../../components/ServerErrorAlert";

const Search: React.FC = () => {
  const [query, setQuery] = React.useState<string>("");
  const [showFilters, setShowFilters] = React.useState<boolean>(false);

  const [filters, setFilters] = React.useState<EquipmentSearchFilters>({
    lowerPriceLimit: null,
    upperPriceLimit: null,
    categories: [],
    brands: [],
  });

  const searchQuery = useQuery(
    ["catalog", query],
    () => {
      if (query) return getSearchResults(query);
    },
    {
      select: (data) => data.equipment,
    }
  );

  const toggleFilters = () => {
    setShowFilters((curr) => !curr);
  };

  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  return (
    <IonPage>
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

        <div className={"ion-text-end ion-padding-end"}>
          <IonButton
            className={"ion-no-margin ion-no-padding"}
            fill={"clear"}
            onClick={toggleFilters}
          >
            <IonIcon icon={funnelOutline} color={"dark"} size={"small"} />
          </IonButton>
        </div>

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

        <FiltersModal
          isOpen={showFilters}
          close={toggleFilters}
          filters={filters}
          setFilters={setFilters}
        />
      </IonContent>

      {searchQuery.isError && <ServerErrorAlert />}
    </IonPage>
  );
};

export default Search;
