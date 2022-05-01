import React from "react";
import { IonAlert } from "@ionic/react";

const ServerErrorAlert: React.FC<{ text?: string }> = ({ text }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <IonAlert
      isOpen={isOpen}
      onDidDismiss={() => setIsOpen(false)}
      message={text || "An error occurred on the server. Please try again"}
      header={"Error"}
      buttons={["Okay"]}
    />
  );
};

export default ServerErrorAlert;
