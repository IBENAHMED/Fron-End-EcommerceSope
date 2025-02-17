import './Breadcrums.css';

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Breadcrums ({ product }: any) {
  return (
    <div className="py-4">
      <p className="text-sm flex flex-wrap gap-4 items-center text-gray-600 sm:text-md">
        <span>HOME</span>
        <FaLongArrowAltRight className="text-slate-300" />
        <span>SHOP</span>
        <FaLongArrowAltRight className="text-slate-300" />
        <span>{product && product.category}</span>
        <FaLongArrowAltRight className="text-slate-300" />
        <span>{product && product.name}</span>
      </p>
    </div>
  );
};