//IMPORTS
import { createContext } from "react";
import { useState } from "react";
import arr from "../data";
export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  //STATE
  const [plan, setPlan] = useState(null);
  const [isConfirmed, setisConfirmed] = useState(false);
  const [isMonthly, setIsMonthly] = useState(true);
  const [value, setValue] = useState(arr);

  //INFO PAGE FOR THE PAGE CARD COMPONENT
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
  //SETS ACTIVE TAB
  function setActive(pageId) {
    setPages((el) =>
      el.map((x) => {
        return x.id === pageId
          ? { ...x, isActive: true }
          : { ...x, isActive: false };
      })
    );
  }
  //Toggles isToggled property of selected  value from arr
  const handleToggle = (id) => {
    setValue((el) =>
      el.map((x) => (x.id === id ? { ...x, isToggled: !x.isToggled } : x))
    );
  };

  /* function handleAddOns() {
   const arr = value.filter((x) => x.isToggled === false);
    setAddOns(value);
  }
  useEffect(() => {
    handleAddOns;
    console.log("Effect ran");
  }, [value]);*/

  //Adds selected plan as state
  function handlePlans(plan) {
    setPlan(plan);
  }
  //Confirms details on summary page
  const handleConfirmation = () => {
    setisConfirmed(true);
  };
  //For the toggle slider (changes between monthly and yearly)
  const handleSubscription = () => {
    setIsMonthly((prev) => !prev);
  };

  return (
    <FormContext.Provider
      value={{
        value,
        handleToggle,
        plan,
        handlePlans,
        pages,
        setActive,
        isConfirmed,
        handleConfirmation,
        isMonthly,
        handleSubscription,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
