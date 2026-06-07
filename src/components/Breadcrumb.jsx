import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Breadcrumb() {
  const fullPath = useLocation().pathname.split("/").slice(1);
  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex items-center justify-start">
      {fullPath.map((path, i) => {
        if (path.includes("-")) path = path.replaceAll("-", " ");
        return (
          <div className=" flex">
            <span
              className={`${i == fullPath.length - 1 && "font-bold"} cursor-pointer`}
              onClick={() => i != fullPath.length - 1 && navigate(-1)}
            >
              {path}
            </span>
            {i != fullPath.length - 1 && <span className="mx-1">{">"}</span>}
          </div>
        );
      })}
    </div>
  );
}

export default Breadcrumb;
