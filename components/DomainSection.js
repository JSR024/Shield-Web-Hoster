import Flex from "./Flex"
import Nbtn from "./Nbtn"


const DomainSection = () => {
  return (
    <Flex className={' mt-10 '}>
        <div>
            <h3>Search Your Domain Now</h3>
            <Flex>
                <div>
                    <input type="text" className="" placeholder="search domain"/>
                </div>
                <Nbtn className={''}>Search</Nbtn>
            </Flex>
        </div>
    </Flex>
  )
}

export default DomainSection