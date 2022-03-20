import React from "react";
import { IonText } from "@ionic/react";

import "./PageTitle.css";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <IonText className={"ion-no-margin"}>
      <h1 className={"page-title ion-padding-start"}>{title}</h1>
    </IonText>
  );
};

export default PageTitle;
