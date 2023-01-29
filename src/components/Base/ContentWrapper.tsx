import { Outlet } from "react-router-dom";

export default function ContentWrapper() {
  return (
    <div className="absolute top-0 right-0 p-6 pl-[74px] flex flex-col justify-center items-center w-full">
      <Outlet />
    </div>
  );
}
