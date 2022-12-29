import { useEffect } from "react";
import useValue from "../hooks/useValue";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function InfoForm() {
  const { setActive } = useValue();
  const [error, setError] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const pageId = 1;
  useEffect(() => {
    setActive(pageId);
  }, []);

  const handleInput = (value) => {
    const [input, setInput] = useState(value);
    return {
      input,
      onChange: (e) => setInput(e.target.value),
    };
  };

  function handleClick(e) {
    if (Name.input === null) {
      e.preventDefault();
      setError(true);
    }
    if (email.input === null) {
      e.preventDefault();
      setError2(true);
      //console.log(email);
    }
    if (number.input === null) {
      e.preventDefault();
      setError3(true);
    }
  }
  const Name = handleInput(null);
  const email = handleInput(null);
  const number = handleInput(null);
  return (
    <form className="grid absolute top-1/3 bg-white rounded-md self-center w-10/12 justify-self-center  h-fit text-copy gap-3  p-6 lg:relative lg:top-1 lg:m-2 lg:gap-6 lg:p-4 lg:w-full">
      <div>
        <h2 className="text-2xl font-bold text-marine-blue mb-2 lg:text-3xl">
          Personal info
        </h2>
        <span className="text-cool-gray font-medium mt-2 ">
          Please provide your name,email address and phone number.
        </span>
      </div>
      <div className="flex justify-between">
        <label className="text-marine-blue font-bold">Name</label>
        {error && (
          <div className="text-red-600 font-bold text-sm ">
            This field is required
          </div>
        )}
      </div>
      <input
        placeholder="e.g. Stephen King"
        className="h-12 border-solid border-1 border-cool-gray rounded-lg p-4 text-marine-blue font-medium"
        {...Name}
        required
        style={{ borderColor: error ? "red" : "hsl(231, 11%, 63%)" }}
      />
      <div className="flex justify-between">
        <label className="text-marine-blue font-bold">Email Address</label>
        {error2 && (
          <div className="text-red-600 font-bold text-sm ">
            This field is required
          </div>
        )}
      </div>
      <input
        placeholder="e.g. stephenking@lorem.com "
        className=" h-12 border-solid border-1 border-cool-gray rounded-lg p-4 text-marine-blue font-medium"
        {...email}
        required
        style={{ borderColor: error2 ? "red" : "hsl(231, 11%, 63%)" }}
      />
      <div className="flex justify-between">
        <label className="text-marine-blue font-bold">Phone number</label>
        {error3 && (
          <div className="text-red-600 font-bold text-sm ">
            This field is required
          </div>
        )}
      </div>

      <input
        placeholder="e.g. + 1 234 567 890"
        className="h-12 border-solid border-1 border-cool-gray rounded-lg p-4 text-marine-blue font-medium"
        {...number}
        required
        style={{ borderColor: error3 ? "red" : "hsl(231, 11%, 63%)" }}
      />
      <div className="flex w-full items-center right-4 lg:justify-end">
        <Link
          className="text-white font-bold  bg-marine-blue rounded-lg hover:opacity-80 w-24 h-fit p-2 text-center"
          to={"/plan"}
          onClick={handleClick}
        >
          Next Step
        </Link>
      </div>
    </form>
  );
}
