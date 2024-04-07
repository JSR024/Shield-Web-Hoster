import Flex from "./Flex";
import Pic1 from '../images/cPanel.png'
import Pic2 from '../images/secured-by-Imunify.png'
import Pic3 from '../images/litespeed.png'
import Pic4 from '../images/Rectangle.png'
import Pic5 from '../images/Rectangle 12.png'
import Pic6 from '../images/Rectangle 13.png'
import Image from "next/image";

const AboutContent = () => {
  return (
    <Flex className={" items-center justify-center lg:justify-between"}>
      <div>
        <h2 className=" text-5xl font-bold text-pColor text-center lg:text-left lg:w-[350px] leading-[55px] mb-5">
          About SHIELD Web Host
        </h2>
        <p className="text-tColor text-center lg:text-left lg:w-[600px] text-lg">
          <span className="font-bold">SHIELD Web Hosting,</span> all of the hosting packages we offer are
          deployed instantly on our SSD powered cloud. We don’t use dedicated
          servers that operate on single pieces of hardware. Our entire
          infrastructure is built to be reliable, secure, and scalable.
        </p>
      </div>
      <Flex className={'items-center justify-between lg:gap-10 lg:w-[40%] mt-14'}>
        <Image src={Pic1} alt="pic1"/>
        <Image src={Pic2} alt="pic2"/>
        <Image src={Pic3} alt="pic3"/>
        <Image src={Pic4} alt="pic4"/>
        <Image src={Pic5} alt="pic5"/>
        <Image src={Pic6} alt="pic6"/>
      </Flex>
    </Flex>
  );
};

export default AboutContent;
