import Link from "next/link";

const MenuBtnItems = () => {
  return (
    <ul className=' text-lg absolute right-3 top-20 bg-pColor font-medium  text-white text-right w-[50%] cursor-pointer py-2 rounded-l-lg'>
      <li className="hover:text-sColor transition-all py-4 pr-2 hover:pr-5">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-sColor transition-all py-4 pr-2 hover:pr-5">
        <Link href={"/about"}>About Us</Link>
      </li>
      <li className="hover:text-sColor transition-all py-4 pr-2 hover:pr-5">
        <Link href={"/service"}>Services</Link>
      </li>
      <li className="hover:text-sColor transition-all py-4 pr-2 hover:pr-5">
        <Link href={"/pricing"}>Pricing</Link>
      </li>
      <li className="hover:text-sColor transition-all py-4 pr-2 hover:pr-5">
        <Link href={"/contact"}>Contact Us</Link>
      </li>
    </ul>
  );
};

export default MenuBtnItems;
