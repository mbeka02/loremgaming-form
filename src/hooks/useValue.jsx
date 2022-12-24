import { useContext } from "react";
import { FormContext } from "../context/cardContext";

const useValue = () => useContext(FormContext);
export default useValue;
