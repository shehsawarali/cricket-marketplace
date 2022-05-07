import React, { useEffect } from "react";

import UIContext from "../context/UIContext";

const MyComponent: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(true);
    };
  }, []);

  return null;
};

export default MyComponent;
