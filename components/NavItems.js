import Link from "next/link";
import Nbtn from "./Nbtn";
import { FaRegUserCircle } from "react-icons/fa";

const NavItems = () => {
  return (
    <ul className="hidden text-lg lg:flex font-medium gap-x-5 items-center justify-end  text-pColor">
      <li className="hover:text-sColor transition">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-sColor transition">
        <Link href={"/about"}>About Us</Link>
      </li>
      <li className="hover:text-sColor transition">
        <Link href={"/service"}>Services</Link>
      </li>
      <li className="hover:text-sColor transition">
        <Link href={"/pricing"}>Pricing</Link>
      </li>
      <li className="hover:text-sColor transition">
        <Link href={"/contact"}>Contact Us</Link>
      </li>
      <Nbtn
        className={
          " flex items-center gap-x-2 bg-sColor hover:bg-pColor transition text-white px-4 py-2 rounded-full justify-center"
        }
      >
        <FaRegUserCircle className="" />
        <h6>Account</h6>
      </Nbtn>
    </ul>
  );
};

export default NavItems;
