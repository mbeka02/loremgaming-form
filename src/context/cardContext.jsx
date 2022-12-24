import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";

import arr from "../data";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [plan, setPlan] = useState("");
  const [addOns, setAddOns] = useState([]);

  const [value, setValue] = useState(arr);
  //useEffect(() => console.log(value), [value]);
  const pageInfo = [
    {
      step: "step 1",
      desc: "Your Info",
      isActive: true,
      num: "1",
      id: 1,
    },
    {
      step: "step 2",
      desc: "Select Plan",
      isActive: false,
      num: "2",
      id: 2,
    },
    {
      step: "step 3",
      desc: "add-ons",
      isActive: false,
      num: "3",
      id: 3,
    },
    {
      step: "step 4",
      desc: "summary",
      isActive: false,
      num: "4",
      id: 4,
    },
  ];
  const [pages, setPages] = useState(pageInfo);
  function setActive(pageId) {
    setPages((el) =>
      el.map((x) => {
        return x.id === pageId
          ? { ...x, isActive: true }
          : { ...x, isActive: false };
      })
    );
  }

  const handleToggle = (id) => {
    setValue((el) =>
      el.map((x) => (x.id === id ? { ...x, isToggled: !x.isToggled } : x))
    );

    //console.log(id);
  };

  /* function handleAddOns() {
   const arr = value.filter((x) => x.isToggled === false);
    setAddOns(value);
  }
  useEffect(() => {
    handleAddOns;
    console.log("Effect ran");
  }, [value]);*/
  function handlePlans(plan) {
    setPlan(plan);
  }

  return (
    <FormContext.Provider
      value={{ value, handleToggle, plan, handlePlans, pages, setActive }}
    >
      {children}
    </FormContext.Provider>
  );
};
