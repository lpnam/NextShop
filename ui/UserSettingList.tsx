"use client";
import { useAppSelector } from "@/app/cushook/hooks";
export default function UserSettingList() {
  const state_setting = useAppSelector((state) => state.userClickAvatarState);
  console.log(state_setting);
  return (
    <div
      className={`${
        state_setting.value ? "absolute" : "hidden"
      } z-[999] ssm:left-[17%] md:left-[10%] top-[3%] ssm:w-[25%] md:w-[10%] flex flex-col items-center gap-4 rounded-md bg-slate-400 overflow-hidden`}
    >
      <div className="hover:bg-slate-500 w-full p-4 text-center cursor-pointer">
        User detail
      </div>
      <div className="hover:bg-slate-500 w-full p-4 text-center cursor-pointer">
        Setting
      </div>
      <div className="hover:bg-slate-500 w-full p-4 text-center cursor-pointer">
        History
      </div>
      <div className="hover:bg-slate-500 w-full p-4 text-center cursor-pointer">
        Payment method
      </div>
    </div>
  );
}
