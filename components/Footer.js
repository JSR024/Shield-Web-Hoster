import Link from "next/link";
import Flex from "./Flex";
import { FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <div className={" lg:flex items-center justify-center gap-y-3 lg:gap-y-0 lg:justify-between py-3"}>
      <Flex className={" gap-x-3 items-center justify-center "}>
        <h5 className=" text-tColor font-bold">Follow Us |</h5>
        <Link href={""} className=" text-pColor text-lg hover:text-sColor transition">
          <FaFacebookF />
        </Link>
        <Link href={""} className=" text-pColor text-lg hover:text-sColor transition">
          <FaXTwitter />
        </Link>
        <Link href={""} className=" text-pColor text-xl hover:text-sColor transition">
          <FaYoutube />
        </Link>
      </Flex>
      <div className=" text-center lg:text-end">
        <h5 className="text-tColor font-light">Privacy Policy | Terms Condition.</h5>
        <h5 className="text-tColor font-light">{year} Copyright Ⓒ Sheild. All Rights Reserved.</h5>
      </div>
    </div>
  );
};

export default Footer;
