import {
  FaDumbbell,
  FaRunning,
  FaBookOpen,
  FaMoneyBillWave,
  FaCar,
} from "react-icons/fa";
import { useRouter } from "next/router";
import clsx from "clsx";
import Link from "next/link";

const categoryIcons = {
  developer: {
    icon: <FaDumbbell className="category-icons" aria-hidden="true" />,
  },
  running: {
    icon: <FaRunning className="category-icons" aria-hidden="true" />,
  },
  book: {
    icon: <FaBookOpen className="category-icons" aria-hidden="true" />,
  },
  money: {
    icon: <FaMoneyBillWave className="category-icons" aria-hidden="true" />,
  },
  car: {
    icon: <FaCar className="category-icons" aria-hidden="true" />,
  },
};

export default function Category({ category }) {
  const router = useRouter();

  return (
    <Link
      href={category.href}
      className={clsx(
        "shadow-style bg-orange-500 hover:bg-orange-400 relative flex h-56 w-56 flex-col justify-center items-center overflow-hidden rounded-md",
        { "xl:w-auto": router.pathname === "/" }
      )}
    >
      <span aria-hidden="true" className="mb-4">
        {categoryIcons[category.category].icon}
      </span>
      <span className="relative text-center text-xl font-bold text-white">
        {category.name}
      </span>
      <span className="relative text-center text-xl font-bold text-white">
        {category.amount}
      </span>
    </Link>
  );
}
