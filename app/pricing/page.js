"use client";

import Flex from "@/components/Flex";
import PricingCard from "@/components/PricingCard";
import { useState } from "react";

const page = () => {
  const [selectTime, setSelectTime] = useState(false);
  return (
    <Flex className="py-[120px] flex-col justify-center items-center">
      <h2 className="text-5xl font-bold text-pColor text-center lg:w-[670px] m-auto ">Buy a domain and everything else you need</h2>
      <h3 className=" text-2xl text-center text-tColor mt-9 mb-14">Choose the package that suits you</h3>
      <Flex className={' items-center gap-x-5'}>
        <p className=" text-lg font-semibold text-tColor">Monthly</p>
        <label className="price-switch">
          <input
            className="price-checkbox"
            onChange={() => {
              setSelectTime((prev) => !prev);
            }}
            type="checkbox"
          />
          <div className="switch-slider"></div>
        </label>
        <p className="text-lg font-semibold text-tColor">Yearly</p>
      </Flex>
      <Flex className={'gap-y-10 md:gap-10 items-end mt-20 justify-center'}>
        <PricingCard
          title={"Starter"}
          text={"Everything you need to create your website"}
          price={selectTime? '2.99' : '11.99'}
          time={selectTime? 'Monthly' : 'Yearly'}
          meter={'Standard'}
          number={'100'}
          digit={'100'}
          day={'Weekly'}
        />
        <PricingCard
          title={"Deluxe"}
          text={"Level-up with more power and enhanced features"}
          price={selectTime? '3.99' : '12.99'}
          time={selectTime? 'Monthly' : 'Yearly'}
          meter={'Advance'}
          number={'200'}
          digit={'200'}
          day={'Daily'}
          className={' border-4 absolute bottom-0'}
          tag={'w-[300px] h-[630px] bg-pColor relative rounded-lg mt-5 md:mt-0'}
          tagTitle={'Most Popular'}
        />
        <PricingCard
          title={"Ultimate"}
          text={"Enjoy optimized performance & powerful resources"}
          price={selectTime? '6.99' : '16.99'}
          time={selectTime? 'Monthly' : 'Yearly'}
          meter={'Advance'}
          number={'300'}
          digit={'300'}
          day={'Daily'}
        />
      </Flex>
    </Flex>
  );
};

export default page;
