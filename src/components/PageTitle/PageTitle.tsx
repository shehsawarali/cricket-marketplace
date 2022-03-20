import React from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

import "./PageTitle.css";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <IonHeader collapse="condense">
      <IonToolbar>
        <IonTitle size="large" className={"page-title"}>
          {title}
        </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default PageTitle;
