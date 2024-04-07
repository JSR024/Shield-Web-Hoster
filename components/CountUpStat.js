'use client'
import Flex from "./Flex"
import CountUp from 'react-countup';

const CountUpStat = () => {
  return (
    <Flex className={'bg-sColor p-10 items-center justify-center gap-5 lg:gap-0 lg:justify-between mt-20'}>
        <div className=" text-center text-white">
            <h3 className=" text-4xl font-bold mb-2"><CountUp start={0} end={70} duration={2.75}></CountUp>K</h3>
            <h4 className=" text-lg font-light">Shared Web Hosting</h4>
        </div>
        <div className=" text-center text-white">
            <h3 className=" text-4xl font-bold mb-2"><CountUp start={0} end={100} duration={2.75}></CountUp>M</h3>
            <h4 className=" text-lg font-light">VPS Hosting</h4>
        </div>
        <div className=" text-center text-white">
            <h3 className=" text-4xl font-bold mb-2"><CountUp start={0} end={11} duration={2.75}></CountUp>K</h3>
            <h4 className=" text-lg font-light">Dedicated Server</h4>
        </div>
        <div className=" text-center text-white">
            <h3 className=" text-4xl font-bold mb-2"><CountUp start={0} end={199} duration={2.75}></CountUp>+</h3>
            <h4 className=" text-lg font-light">Cloud Hosting</h4>
        </div>
    </Flex>
  )
}

export default CountUpStat