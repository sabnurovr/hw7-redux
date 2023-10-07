import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TabsComponent from "../../components/tabs/TabsComponent";
import oiu from "../../components/ui/ui";
import organ from "../../components/organ/Organ";
import tyu from "../../components/tyu/tyu";
import ui from "../../components/oiu/oiu";
import Representavites from "../../components/representatives/Repres";

const VALUES = {
  oiu: "oiu",
  organ: "organ",
  tyu: "tyu",
  representatives: "representavitives",
  ui: "ui",
};

const GetCategories = ({ action }) => {
  switch (action) {
    case VALUES.oiu: {
      return <oiu />;
    }
    case VALUES.organ: {
      return <organ/>
    }
    case VALUES.tyu: {
      return <tyu/>
    }
    case VALUES.ui: {
      return <ui/>
    }
    case VALUES.representatives: {
      return <Representavites/>
    }
    default: {
      return <></>;
    }
  }
};

const Main = ({ valueKey, labelKey }) => {
  const { categories } = useSelector((state) => state.mainReducer);

  const categoriesSelect = [
    { value: VALUES.oiu, label: "О Союзе" },
    { value: VALUES.organ, label: "История" },
    { value: VALUES.tyu, label: "Органы" },
    { value: VALUES.representatives, label: "Волейбол" },
    { value: VALUES.ui, label: "наша комнада" },
  ];

  const [value, setValue] = useState(categoriesSelect?.[0].value);

  return (
    <>
      <h1>Vollybol
</h1>
      <TabsComponent
        categoriesSelect={categoriesSelect}
        setValue={setValue}
        value={value}
      />
      <GetCategories action={value} />
    </>
  );
};

export default Main;
