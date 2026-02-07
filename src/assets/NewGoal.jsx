import { useState } from "react";
import { useModal } from "./ModalContext";
import { Link } from "react-router-dom";
import AppBar from "./AppBar";
import BackButton from "./BackButton";
import TitleColorPicker from "./TitleColorPicker";
import Button from './Button';


function NewGoal() {
  const { showModal } = useModal();
  const [newTask, setNewTask] = useState({
    title: "",
    color: "",
    description: "",
    time: "",
    date: "",
  });

  const [goalColor, setGoalColor] = useState(null);
  const handleColorClick = (color) => {
    if (goalColor === color) {
      setGoalColor("text-black");
      setNewTask((prev) => ({ ...prev, color: "" }));
    } else {
      setGoalColor(color);
      setNewTask((prev) => ({ ...prev, color }));
    }
  };
  const taskHandler = (event) => {
    const { name, value } = event.target;
    setNewTask((prev) => {
      prev.color = goalColor;
      return { ...prev, [name]: value };
    });
  };
  const addHandler = () => {
    {
      if (newTask.title)
        showModal(
          <p>
            رفتی تو کار <span className={`text-${newTask.color}-500`}>{newTask.title}؛ </span>
            موفق باشی!
          </p>
        );
      else {
        showModal(<p>حداقل عنوان هدفتو مشخص کن.</p>);
      }
      console.log(newTask);
    }
  };
  return (
    <>
      <AppBar />
      <BackButton />

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-8 py-24 gap-3 w-11/12 md:w-3/4 lg:w-2/4">
          <h2>هدف جدید</h2>
          <div className=" border-4 border-sky-950 bg-white w-full  h-12 flex justify-between items-center">
            <input
              id="goalname"
              type="text"
              className={`border-none w-2/4 h-3/4 focus:border-none focus:outline-none text-${newTask.color}-500`}
              placeholder="عنوان هدف..."
              name="title"
              value={newTask.title}
              onChange={taskHandler}
            />
            <div className="w-2/4 flex justify-end items-center p-3 gap-1">
              <TitleColorPicker onClick={() => handleColorClick("blue")} color="blue" />
              <TitleColorPicker onClick={() => handleColorClick("red")} color="red" />
              <TitleColorPicker onClick={() => handleColorClick("yellow")} color="yellow" />
              <TitleColorPicker onClick={() => handleColorClick("green")} color="green" />
              <TitleColorPicker onClick={() => handleColorClick("purple")} color="purple" />

            </div>
          </div>
          <textarea
            id=""
            placeholder="توضیح هدف..."
            onChange={taskHandler}
            className="border-4 border-sky-950 w-full h-28"
            name="description"
            value={newTask.description}
          ></textarea>
          <div className="flex justify-between w-full bg-white p-3">
            <div>
              <label htmlFor="date">تاریخ شروع</label>
              <input
                id="date"
                type="date"
                name="date"
                value={newTask.date}
                onChange={taskHandler}
              />
            </div>
            <div>
              <label htmlFor="time">زمان شروع</label>
              <input
                id="time"
                type="time"
                name="time"
                value={newTask.time}
                onChange={taskHandler}
              />
            </div>{" "}
          </div>

          <Button onClick={addHandler} bgColor="blue" w="24" p="2">برو بریم</Button>

          <div className="bg-gray-100 mt-5 w-full p-4 text-black text-center">
            <h2>آخرین هدف‌ها:</h2>
            <div className="p-3 flex flex-col gap-3 text-right">
              <div className=" text-black p-2 border-b-2 border-sky-600">
                <h3 className=" font-extrabold">سئو</h3>
                <h4 className="text-sm text-gray-500">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h4>
              </div>
              <div className=" text-black p-2 border-b-2 border-sky-600">
                <h3 className="text-yellow-600 font-extrabold">جاوااسکریپت</h3>
                <h4 className="text-sm text-gray-500 ">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم
                  ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h4>
              </div>
              <div className=" text-black p-2 border-b-2 border-sky-600">
                <h3 className="text-blue-600 font-extrabold">ریکت</h3>
                <h4 className="">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </h4>
              </div>
            </div>
            <Link to="/GoalsPage">همه هدف‌ها...</Link>
          </div>
          <div className=""></div>
        </div>
      </div>
    </>
  );
}

export default NewGoal;
