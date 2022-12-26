import useValue from "../hooks/useValue";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Thankyou from "../images/icon-thank-you.svg";
//import AddOn from "./AddOn";
export default function Summary() {
  const { value, plan, setActive, isConfirmed, handleConfirmation, isMonthly } =
    useValue();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const pageId = 4;
  useEffect(() => {
    setActive(pageId);
  }, []);

  function handleClick() {
    navigate("/plan");
  }
  function navigateBack() {
    navigate("/addons");
  }
  const getTotal = () => {
    const filteredValues = value.filter((obj) => obj.isToggled === true);
    if (isMonthly) {
      setTotal(
        filteredValues.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ppm,
          plan.Mprice
        )
      );
    } else {
      setTotal(
        filteredValues.reduce(
          (accumulator, currentValue) => accumulator + currentValue.ppy,
          plan.Yprice
        )
      );
    }
  };
  useEffect(() => {
    getTotal();
  }, [value]);

  return (
    <div className=" mt-10 grid gap-0  absolute top-1/4 bg-white rounded-md  w-10/12 justify-self-center  h-fit    p-6 lg:relative lg:top-1   lg:ml-14 lg:self-center ">
      {isConfirmed ? (
        <div className="grid  text-center lg:w-96  ">
          <img src={Thankyou} alt="confirmed" className="justify-self-center" />
          <h2 className="text-marine-blue font-bold text-3xl">Thank you!</h2>
          <p className="text-cool-gray font-normal  tracking-wide">
            Thanks for confirming your subscription!We hope you have fun using
            our platform.If you ever need support, please feel free to email us
            at support@loremgaming.com
          </p>
        </div>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-marine-blue mb-2 ">
            Finishing up
          </h2>
          <span className="text-cool-gray font-medium mt-2 mb-5">
            Double-check everything looks ok before confirming
          </span>
          <div className="grid p-4 w-full bg-alabaster ">
            <div className="m-2 flex justify-between  pb-4  ">
              <div className=" grid font-bold text-marine-blue text-base ">
                {plan.type} {isMonthly ? "(Monthly)" : "(Yearly)"}
                <span
                  onClick={handleClick}
                  className="text-purplish-blue text-xs hover:underline underline-offset-2 decoration-1 decoration-purplish-blue cursor-pointer"
                >
                  Change
                </span>
              </div>
              <div className="font-bold text-marine-blue text-base">
                {isMonthly ? plan.Mbilling : plan.Ybilling}
              </div>
            </div>
            <hr />
            {value.map(
              (addOn) =>
                addOn.isToggled && (
                  <div key={addOn.id} className="flex justify-between  m-2">
                    <div className="text-cool-gray font-medium text-sm">
                      {addOn.service}
                    </div>
                    <div className="text-marine-blue font-medium text-sm">
                      {isMonthly ? addOn.Mprice : addOn.Yprice}
                    </div>
                  </div>
                )
            )}
          </div>
          {total && (
            <div className="flex justify-between  m-2 p-3 items-center">
              <div className="text-cool-gray font-medium text-sm">
                Total{isMonthly ? "(per month)" : "(per year)"}
              </div>
              <div className="text-purplish-blue text-xl font-bold">
                {`+$${total}/${isMonthly ? "mo" : "yr"}`}
              </div>
            </div>
          )}
          <div className="flex  justify-between items-center mt-6">
            <button
              className="text-cool-gray font-bold text-sm border-none hover:text-marine-blue"
              onClick={navigateBack}
            >
              Go back
            </button>
            <button
              className="text-white font-bold  bg-purplish-blue rounded-lg hover:opacity-80 w-24 h-fit p-2 text-center"
              onClick={handleConfirmation}
            >
              Confirm
            </button>
          </div>
        </>
      )}
    </div>
  );
}
