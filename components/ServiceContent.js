import Image from "next/image";
import Flex from "./Flex";
import ser1 from "../images/1.png";

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
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
            Shared Web Hosting
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
          VPS  Hosting
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
          Dedicated Server
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
          Cloud Hosting
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
          Domain Names
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
        <div className="lg:w-[32%] text-center px-3 py-5 bg-[#ddf1f9] rounded-xl">
          <Image src={ser1} alt="ser1" className="inline" />
          <h4 className=" text-[20px] font-bold py-4 text-pColor">
          License Keys
          </h4>
          <p className="text-tColor font-light text-sm">
            Vestibulum tristique urna eget odio interdum pellentesque. In
            sodales venenatis lectus, ac tincidunt quam placerat egestas.
          </p>
        </div>
      </Flex>
    </Flex>
  );
};

export default ServiceContent;
