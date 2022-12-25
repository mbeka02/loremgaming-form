//import "./App.css";
import InfoForm from "./components/InfoForm";
import Plan from "./components/Plan";
import AddOn from "./components/AddOn";
import Summary from "./components/Summary";
import PageCard from "./components/PageCard";
import { Routes, Route } from "react-router-dom";
import { FormProvider } from "./context/cardContext";

function App() {
  return (
    <FormProvider>
      <div className="text-black grid  grid-cols-1    gap-10 bg-transparent rounded-md  w-full lg:grid-cols-custom  lg:gap-36 lg:bg-white lg:m-2 lg:p-4">
        <PageCard />
        <Routes>
          <Route path="/" element={<InfoForm />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addons" element={<AddOn />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </div>
    </FormProvider>
  );
}

export default App;
