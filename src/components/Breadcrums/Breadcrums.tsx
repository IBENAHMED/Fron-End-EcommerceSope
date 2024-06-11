import './Breadcrums.css';
import arrow_image from '../../Assets/arrow.png';
import { FaLongArrowAltRight } from "react-icons/fa";

const Breadcrums = ({ product }: any) => {

    return (
        <div className="py-4">
            <p className="flex flex-wrap gap-4 items-center text-gray-600">
                <span>HOME</span>
                <FaLongArrowAltRight className="text-slate-300" />
                <span>SHOP</span>
                <FaLongArrowAltRight className="text-slate-300" />
                <span>{product && product.category}</span>
                <FaLongArrowAltRight className="text-slate-300" />
                <span>{product && product.name}</span>
            </p>
        </div>
    )
}

export default Breadcrums
