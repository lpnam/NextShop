import { SetSize } from "@/lib/define";

interface MarkIconProps {
  setSize: SetSize;
  selected?: boolean;
}

const MarkIcon = ({ setSize, selected }: MarkIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={setSize ? setSize.setWidth : 20}
      height={setSize ? setSize.setHeight : 20}
      viewBox="0 0 512 512"
      className={`${selected ? "bg-slate-500" : ""}`}
    >
      <path
        d="M128 80V64a48.14 48.14 0 0148-48h224a48.14 48.14 0 0148 48v368l-80-64"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
      <path
        d="M320 96H112a48.14 48.14 0 00-48 48v352l152-128 152 128V144a48.14 48.14 0 00-48-48z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export default MarkIcon;
