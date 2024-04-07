'use client'
import Flex from "@/components/Flex";
import Image from "next/image";
import logo from "../images/logo.png";
import Link from "next/link";
import { ImCross, ImMenu } from "react-icons/im";
import { useState } from "react";
import NavItems from "./NavItems";
import MenuBtnItems from "./MenuBtnItems";

const Navbar = () => {
  const [menuBtn, setMenuBtn] = useState(false)
  return (
    <nav className="py-4">
      <Flex className={"justify-between items-center "}>
        <Link href="/" className="">
          <Image src={logo} alt="logo" />
        </Link>
        <div onClick={() => setMenuBtn(!menuBtn)} className=" cursor-pointer lg:hidden ">
          {menuBtn ? <ImCross className="cross"/> : <ImMenu className="menu"/>}
        </div>
        {menuBtn && (
          <MenuBtnItems/>
        )}
        <NavItems/>
      </Flex>
    </nav>
  );
};

export default Navbar;
