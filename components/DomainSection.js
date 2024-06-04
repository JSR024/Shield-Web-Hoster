import Flex from "./Flex"
import Nbtn from "./Nbtn"


const DomainSection = () => {
  return (
    <Flex className={' mt-16 justify-center lg:justify-between items-center gap-y-5 lg:gap-y-0'}>
        <div className="text-center lg:text-left lg:w-[50%]">
            <h3 className=" font-bold text-2xl mb-9">Search Your Domain Now</h3>
            <Flex>
                <div>
                    <input type="text" className=" py-4 px-5 w-[460px] border-none outline-none bg-white text-pColor" placeholder="search domain"/>
                </div>
                <Nbtn className={' py-4 px-9 bg-sColor text-white font-medium'}>Search</Nbtn>
            </Flex>
        </div>
        <Flex className={'lg:w-[30%] justify-between items-center gap-y-5'}>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.com</h4>
            <p className="text-pColor font-light text-xs">$10 / month</p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.co</h4>
            <p className="text-pColor font-light text-xs">$30 / month</p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.shop</h4>
            <p className="text-pColor font-light text-xs">$12 / month</p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.in</h4>
            <p className="text-pColor font-light text-xs">$11 / month</p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.de</h4>
            <p className="text-pColor font-light text-xs">$17 / month</p>
          </div>
          <div className="w-[30%]">
            <h4 className="text-sColor font-bold text-xl">.nl</h4>
            <p className="text-pColor font-light text-xs">$20 / month</p>
          </div>
        </Flex>
    </Flex>
  )
}

export default DomainSection