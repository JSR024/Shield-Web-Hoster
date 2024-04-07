import Flex from "@/components/Flex";
import Image from "next/image";
import banner from '../images/banner.png'
import Btn from "./Btn";
import Link from "next/link";


const Hero = () => {
  return (
    <Flex className={' flex-col lg:flex-row justify-center lg:justify-between items-center py-[100px] lg:py-[120px]'}>
      <div className=" text-center lg:text-left lg:w-[50%]">
        <h1 className="font-bold text-6xl lg:w-[530px] text-pColor">Premium Web Hosting for Your Website.</h1>
        <p className=" text-lg text-tColor font-light lg:w-[448px] my-10">Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
        <Flex className={' justify-center lg:justify-start items-center gap-x-6 gap-y-3 lg:gap-y-0 mb-5 lg:mb-0 text-base font-medium'}>
          <Link href={'/'}><Btn className={'bg-pColor text-white py-2 px-4 rounded-md'}><h6>Create an Account</h6></Btn></Link>
          <Link href={'/'}><Btn className={'border-pColor border py-2 px-4 rounded-md text-pColor'}><h6>Choose your plan</h6></Btn></Link>
        </Flex>
      </div>
      <Image src={banner} alt="banner" className="lg:w-[50%]"/>
    </Flex>
  );
};

export default Hero;
