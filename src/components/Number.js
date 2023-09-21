import { useState } from "react";
import CreateButton from "./CreateButton";

const Number = () => {
  const [countNumber, setCountNumber] = useState();
  const [number, setNumber] = useState();
  const [buttonActivity, setButtonActivity] = useState(false);

  const setNumberHandler = () => {
    setButtonActivity(true);
    setNumber();
    const randomNumber = Math.floor(Math.random()*10);
    const Interval = setInterval(() => {

      setCountNumber((prev) => {
        if (prev === undefined) {
          prev = 0 ;
        }
        prev < 9 ? prev += 1 :  prev = 0 ;
        return prev;
      } );
    },100);

    setTimeout(() => {
      clearInterval(Interval);
      setNumber(randomNumber);
      setCountNumber(null);
      setButtonActivity(false);
    },3000);

  }
  return (
    <>
      <h3>
        <p>{countNumber === undefined & number === undefined ? "Get Number!" : ""}</p>
        <span>
          {countNumber}{number}
        </span>
      </h3>
      <CreateButton
        setNumberHandler={setNumberHandler}
        buttonActivity={buttonActivity}
      />
    </>
  );
};

export default Number;
