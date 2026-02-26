import { Suspense } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";

const loadPromiseCountries = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
  
      <Suspense fallback={<p>Countries Is Loading.......</p>}>
       <div className="w-11/12 mx-auto">
         <Countries loadPromiseCountries={loadPromiseCountries}></Countries>
       </div>
      </Suspense>
    </>
  );
}

export default App;
