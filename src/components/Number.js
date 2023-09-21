import { useState } from "react";
import CreateButton from "./CreateButton";

const Number = () => {
  const [countNumber, setCountNumber] = useState("*");
  const [number_1, setNumber_1] = useState();
  const [number_2, setNumber_2] = useState();
  const [number_3, setNumber_3] = useState();
  const [number_4, setNumber_4] = useState();
  const [buttonActivity, setButtonActivity] = useState(false);

  const setNumberHandler = () => {
    setButtonActivity(true);
    setCountNumber("*");
    setNumber_1();
    setNumber_2();
    setNumber_3();
    setNumber_4();
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const randomNumber3 = Math.floor(Math.random() * 10);
    const randomNumber4 = Math.floor(Math.random() * 10);
    const Interval = setInterval(() => {
      setCountNumber((prev) => {
        if (prev === undefined) {
          prev = 0;
        }
        prev < 9 ? (prev += 1) : (prev = 0);
        return prev;
      });
    }, 10);

    setTimeout(() => {
      setNumber_1(randomNumber1);
    }, 3000);
    setTimeout(() => {
      setNumber_2(randomNumber2);
    }, 3500);
    setTimeout(() => {
      setNumber_3(randomNumber3);
    }, 4000);
    setTimeout(() => {
      clearInterval(Interval);
      setNumber_4(randomNumber4);
      setCountNumber(null);
      setButtonActivity(false);
    }, 4500);
  };
  return (
    <>
      <h3>
        <span>
          {number_1 === undefined && countNumber}
          {number_1}
        </span>
        <span>
          {number_2 === undefined && countNumber}
          {number_2}
        </span>
        <span>
          {number_3 === undefined && countNumber}
          {number_3}
        </span>
        <span>
          {number_4 === undefined && countNumber}
          {number_4}
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
