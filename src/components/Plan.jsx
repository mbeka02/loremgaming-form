//IMPORTS
import Arcade from "../images/icon-arcade.svg";
import { ToggleSlider } from "react-toggle-slider";
import Advanced from "../images/icon-advanced.svg";
import Pro from "../images/icon-pro.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useValue from "../hooks/useValue";

const Plan = () => {
  const { handlePlans, setActive, plan, isMonthly, handleSubscription } =
    useValue();
  const navigate = useNavigate();
  const pageId = 2;
  useEffect(() => {
    setActive(pageId);
  }, []);
  //Navigation
  function handleClick() {
    navigate("/addons");
  }
  function navigateBack() {
    navigate("/");
  }
  const arr = [
    {
      img: Arcade,
      type: "Arcade",
      Mbilling: "$9/mo",
      Ybilling: "90/yr",
      discount: "2 months free",
      id: 1,
      Mprice: 9,
      Yprice: 90,
    },
    {
      img: Advanced,
      type: "Advanced",
      Mbilling: "$12/mo",
      Ybilling: "120/yr",
      discount: "2 months free",
      id: 2,
      Mprice: 12,
      Yprice: 120,
    },
    {
      img: Pro,
      type: "Pro",
      Mbilling: "$15/mo",
      Ybilling: "150/yr",
      discount: "2 months free",
      id: 3,
      Mprice: 15,
      Yprice: 150,
    },
  ];
  //Styling
  const style1 = { borderColor: "hsl(243, 100%, 62%)" };
  const style2 = { backgroundColor: "hsla(243, 100%, 62%,0.1)" };

  return (
    <div className=" mt-10 text-copy absolute top-1/4 bg-white rounded-md self-center w-10/12 justify-self-center  h-fit gap-3  p-6 lg:relative lg:top-1 lg:m-2 lg:gap-6 lg:p-2 lg:w-full">
      <h2 className="text-3xl font-bold text-marine-blue mb-2 ">
        Select your plan
      </h2>
      <span className="text-cool-gray font-medium mt-2 ">
        You have the option of monthly or yearly billing
      </span>
      <div className=" grid  gap-4 mt-10 lg:flex">
        {arr?.map((element) => {
          return (
            <div
              className="flex  h-fit w-full justify-start gap-4  border-solid border-cool-gray border-1 rounded-lg p-2 lg:flex-col lg:w-36 lg:h-48 lg:justify-between "
              key={element.id}
              onClick={() => handlePlans(element)}
              style={
                plan?.type === element.type ? { ...style1, ...style2 } : {}
              }
            >
              <img src={element.img} className=" w-14 h-14" />
              <div className="grid">
                <h3 className="text-lg font-bold text-marine-blue">
                  {element.type}
                </h3>
                <span className="text-cool-gray font-medium">
                  {isMonthly ? element.Mbilling : element.Ybilling}
                </span>
                {!isMonthly && (
                  <span className="font-medium text-sm text-marine-blue mt-2">
                    {element.discount}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 items-center justify-center mt-4 ">
        <span
          className="font-bold text-sm "
          style={{
            color: isMonthly ? " hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
          }}
        >
          Monthly
        </span>
        <ToggleSlider
          onToggle={handleSubscription}
          barBackgroundColor="#032B5B"
          barBackgroundColorActive="#032B5B"
        />
        <span
          className="font-bold text-sm "
          style={{
            color: isMonthly ? "hsl(231, 11%, 63%) " : " hsl(213, 96%, 18%)",
          }}
        >
          Yearly
        </span>
      </div>

      <div className="flex mt-3  justify-between items-center lg:mt-6">
        <button
          className="text-cool-gray font-bold text-sm border-none hover:text-marine-blue"
          onClick={navigateBack}
        >
          Go back
        </button>
        <button
          onClick={handleClick}
          className="text-white font-bold   bg-marine-blue rounded-lg hover:opacity-80 w-24 h-fit p-2 text-center"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default Plan;
