import { useState } from "react";
import BillInput from "./Components/BillInput";
import BillShowcase from "./Components/BillShowcase";

import { CalcProvider } from "./CalcContext";

function App() {
  const defaultValue = "";
  const [bill, setBill] = useState(defaultValue);
  const [people, setPeople] = useState(defaultValue);
  const [customPer, setCustomPer] = useState(defaultValue);
  const [billResultTip, setBillResultTip] = useState(defaultValue);
  const [billResultPerson, setBillResultPerson] = useState(defaultValue);

  const [data, setData] = useState([
    {
      tip: 0.0,
      person: 0.0,
    },
  ]);
  const handleReset = () => {
    setBill(defaultValue);
    setPeople(defaultValue);
    setCustomPer(defaultValue);
    setBillResultTip(defaultValue);
    setBillResultPerson(defaultValue);
    setData([
      {
        tip: 0,
        person: 0,
      },
    ]);
  };

  const perFunc = (num, per, ppl) => {
    if (ppl >= 1 && num >= 1 && per >= 1) {
      const resultTip = ((num / 100) * per) / ppl;
      const resultPerson = num / ppl;
      // data[0].tip = resultTip;
      // data[0].person = resultPerson;
      setBillResultTip(resultTip);
      setBillResultPerson(resultPerson);
      console.log("render");
      setData([
        {
          tip: billResultTip,
          person: billResultPerson,
        },
      ]);
      // console.log("Tip:", billResultTip, "PerPerson:", billResultPerson);
    }
  };

  return (
    <CalcProvider>
      <div className="app">
        <p className="title" style={{color}}>
          SPLI
          <br />
          TTER
        </p>
        <main>
          <BillInput
          // setData={setData}
          // perFunc={perFunc}
          // handleReset={handleReset}
          // bill={bill}
          // setBill={setBill}
          // people={people}
          // setPeople={setPeople}
          // customPer={customPer}
          // setCustomPer={setCustomPer}
          // billResultTip={billResultTip}
          // setBillResultTip={setBillResultTip}
          // billResultPerson={billResultPerson}
          // setBillResultPerson={setBillResultPerson}
          />
          <BillShowcase data={data} handleReset={handleReset} />
        </main>
      </div>
    </CalcProvider>
  );
}

export default App;
