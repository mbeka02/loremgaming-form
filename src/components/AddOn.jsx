import { useEffect } from "react";
import useValue from "../hooks/useValue";
import Check from "../images/icon-checkmark.svg";
import { useNavigate } from "react-router-dom";
//import { nanoid } from "nanoid";

const AddOn = () => {
  // const [isToggled, setIsToggled] = useState(false);
  const { value, handleToggle, setActive } = useValue();
  const navigate = useNavigate();
  const pageId = 3;
  useEffect(() => {
    setActive(pageId);
  }, []);
  function handleClick() {
    navigate("/summary");
  }
  function navigateBack() {
    navigate("/plan");
  }
  const style1 = { borderColor: "hsl(243, 100%, 62%)" };
  const style2 = { backgroundColor: "hsla(243, 100%, 62%,0.1)" };
  return (
    <div className="  mt-10 text-copy   absolute top-1/4 bg-white rounded-md self-center w-10/12 justify-self-center  h-fit  gap-3  p-6 lg:relative lg:top-1 lg:m-2  lg:ml-24">
      <h2 className="text-3xl font-bold text-marine-blue mb-2 ">
        Pick add-ons
      </h2>
      <span className="text-cool-gray font-normal mt-2 mb-5">
        Add-ons help enhance your gaming experience.
      </span>
      <div className="grid gap-8 mt-4 ">
        {value?.map((el) => {
          return (
            <div
              key={el.id}
              className=" flex h-20  justify-between px-2 items-center border-solid border-1 border-cool-gray rounded-lg lg:w-96 lg:h-18 lg:p-4 "
              style={el.isToggled ? { ...style1, ...style2 } : {}}
            >
              <div
                className="h-5 w-5 border-solid border-1 border-cool-gray rounded bg-slate-900 items-center justify-center grid self-center "
                onClick={() => handleToggle(el.id)}
                style={{
                  backgroundColor: el.isToggled
                    ? " hsl(243, 100%, 62%)"
                    : "white",
                }}
              >
                <img src={Check} alt="check" />
              </div>

              <div className="ml-2 lg:m-0 grid lg:gap-2">
                <h3 className="text-lg font-bold text-marine-blue">
                  {el.service}
                </h3>
                <span className="text-cool-gray font-normal">{el.desc}</span>
              </div>
              <span className="text-purplish-blue font-medium text-sm">
                {el.price}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex  justify-between items-center mt-6">
        <button
          className="text-cool-gray font-bold text-sm border-none hover:text-marine-blue"
          onClick={navigateBack}
        >
          Go back
        </button>
        <button
          onClick={handleClick}
          className="text-white font-bold  bg-marine-blue rounded-lg hover:opacity-80 w-24 h-fit p-2 text-center"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};
export default AddOn;
