import Link from "next/link";
import Btn from "./Btn";
import Flex from "./Flex";
import { FaCheck } from "react-icons/fa";

const PricingCard = ({ title, text, price, time, meter, number, digit, day, className, tag, tagTitle, tagClass }) => {
  return (
    <div className={` hover:scale-110 hover:drop-shadow-xl transition-all ${tag}`}>
      <h4 className={`text-white font-semibold text-center my-1 ${tagClass}`}>{tagTitle}</h4>
      <Flex
      className={
        `flex-col w-[300px] h-[600px] gap-y-8  justify-center items-center border mt-5 bg-white rounded-lg border-pColor px-3  ${className}`
      }
    >
      <div>
        <h4 className="text-pColor font-medium text-2xl text-center">{title}</h4>
        <p className="text-tColor mt-5 text-center">{text}</p>
      </div>
      <div>
        <h2 className="text-pColor font-bold text-center text-5xl"><span className=" text-2xl">$</span>{price}</h2>
        <p className="text-tColor text-center mt-2">{time}</p>
      </div>
      <Link href={"/"}>
        <Btn
          className={
            "border-pColor border-[2px] py-2 px-4 rounded-md text-pColor hover:bg-pColor hover:text-white transition-all"
          }
        >
          <h6 className=" text-lg font-medium">Choose this plan</h6>
        </Btn>
      </Link>
      <Flex className={'flex-col gap-y-3'}>
        <h5 className="font-medium text-pColor text-xl text-center">Features</h5>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"{meter}"</span> Performance
          </p>
        </Flex>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"{number}"</span> Website
          </p>
        </Flex>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"{digit} GB"</span> Storage
          </p>
        </Flex>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"{day}"</span> Backups
          </p>
        </Flex>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"Unlimited Free"</span> SSL
          </p>
        </Flex>
        <Flex className={'items-center gap-x-2'}>
          <FaCheck  className="text-pColor"/>
          <p className="font-light text-tColor">
            <span className=" font-bold text-pColor">"Unlimited"</span> Bandwidth
          </p>
        </Flex>
      </Flex>
    </Flex>
    </div>
  );
};

export default PricingCard;
