import React from 'react'
import { useModal } from "./ModalContext";
import { useNavigate } from "react-router-dom";
import Button from './Button';


function TodayGoalCard({ borderColor, statusColor, titleColor, title }) {
    let navigate = useNavigate();
    const { showModal } = useModal();
    let rejectGoal = () => {
        showModal(
            <div className="flex flex-col gap-3">
                <p>بیخیال سئو شدی...</p>
                <button className={`${statusColor}1 text-white p-1 rounded-full`}>نه هنوز</button>
            </div>
        );
    };
    return (
        <>
            <div className={` text-black p-2 shadow-md shadow-slate-500 flex justify-between items-center w-full border-3 border-${borderColor}-300`}>
                <div className="flex w-2/4 sm:w-3/5 lg:w-4/6 items-center gap-2">
                    <svg
                        onClick={rejectGoal}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="stroke-red-500 size-6 hover:stroke-red-700"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18 18 6M6 6l12 12"
                        />
                    </svg>
                    <div className="flex flex-col w-2/4 ">
                        <h3 className={`text-${titleColor}-600 font-extrabold`}>{title}</h3>
                        <h4 className="">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                            چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ
                        </h4>
                    </div>
                </div>
                <div className={`bg-gradient-to-br from-${statusColor}-300 to-${statusColor}-200 w-2/4 sm:w-2/5 lg:w-2/6 h-16 px-3 py-1 gap-2 flex items-center justify-between rounded-full`}>
                    <div className="flex justify-center items-center w-3/5 bg-white p-1">
                        <span className={`text-xl text-${statusColor}-600`}>12:30</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 26 26"
                            stroke-width="1.5"
                            stroke={statusColor}
                            class="size-6"
                        >
                            <path
                                className={`stroke-${statusColor}-600`}
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                            />
                        </svg>
                    </div>

                    <Button onClick={() => navigate("/Timing")} bgColor={statusColor} w="2/5" p="2">شروع</Button>
                </div>
            </div>
        </>
    )
}

export default TodayGoalCard