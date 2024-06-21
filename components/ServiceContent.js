import Image from "next/image";
import Flex from "./Flex";
import ser1 from "../images/1.png";
import ser2 from "../images/2.png";
import ser3 from "../images/3.png";
import ser4 from "../images/4.png";
import ser5 from "../images/5.png";
import ser6 from "../images/6.png";

const ServiceContent = () => {
  return (
    <Flex
      className={
        " items-start justify-center gap-y-10"
      }
    >
      <div>
        <h2 className=" text-5xl font-bold text-pColor text-center leading-[55px] mb-5">
          Our Services
        </h2>
        <p className="text-tColor text-center  text-lg lg:w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          pellentesque nibh eget odio ultrices ornare. Nulla eu felis vitae nisl
          luctus blandit. Ut eu risus et turpis vulputate venenatis. Morbi
          maximus posuere luctus. Morbi tempor nunc nunc, et tincidunt risus
          ullamcorper in.
        </p>
      </div>
      <Flex className={"justify-between gap-y-5"}>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
            Shared Web Hosting
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser2} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
          VPS  Hosting
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser3} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
          Dedicated Server
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser4} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
          Cloud Hosting
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser5} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
          Domain Names
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-pColor rounded-xl">
          <Image src={ser6} alt="ser6" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-white">
          License Keys
          </h4>
          <p className="text-white font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default ServiceContent;
