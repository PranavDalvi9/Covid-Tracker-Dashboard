import "./App.css";
import Total from "./Component/Total";
import Home from "./Component/Home/Home";
import Countries from "./Component/Countries/Countries";
import PiechartMain from "./Component/PiechartMain/PiechartMain";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import Navbar from "./Component/Navbar/Navbar";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello Pranav</h1> */}
      {/* <Total/> */}

      <Navbar />
      {/* <IndividualCountries/> */}

      {/* <Home/> */}
      {/* <Countries/> */}
      {/* <PiechartMain/> */}

      {/* <SignIn/> */}

      {/* <SignUp/> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <PiechartMain />
            </>
          }
        />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/sign-in" element={<SignIn />} />

        <Route path="/contries" element={<Countries />} />

        <Route path="/cont" element={<Countries />} />
      </Routes>
    </div>
  );
}

export default App;
