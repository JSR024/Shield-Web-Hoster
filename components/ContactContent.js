import Image from "next/image"
import Flex from "./Flex"
import contactImg from '../images/contact.png'
import chat from '../images/live-chat.png'
import call from '../images/customer-service.png'
import map from '../images/location.png'


const ContactContent = () => {
  return (
    <Flex className={' items-center lg:justify-between justify-center mt-12 gap-y-10 lg:gap-y-0'}>
        <div className="lg:w-[40%]">
        <Image src={contactImg} alt="contactImg"/>
        </div>
        <div className="lg:w-[40%]">
            <Flex className="bg-white border border-pColor p-2 rounded lg:w-[400px] hover:drop-shadow-md lg:hover:ml-3 transition-all items-center gap-x-5">
                <div className=" p-5 border-r border-pColor border-opacity-20">
                    <Image src={chat} alt="chat"/>
                </div>
                <div>
                  <h5 className=" text-2xl font-bold text-pColor mb-1">Live Chat</h5>
                  <p className="text-tColor">We are online-always</p>
                </div>
            </Flex>
            <Flex className="bg-white border border-pColor p-2 rounded lg:w-[400px] hover:drop-shadow-md lg:hover:ml-3 transition-all items-center gap-x-5 my-6">
                <div className=" p-5 border-r border-pColor border-opacity-20">
                    <Image src={call} alt="chat"/>
                </div>
                <div>
                  <h5 className=" text-2xl font-bold text-pColor mb-1">Phone Now</h5>
                  <p className="text-tColor">Call Us @ +88013xxxxxxxx</p>
                </div>
            </Flex>
            <Flex className="bg-white border border-pColor p-2 rounded lg:w-[400px] hover:drop-shadow-md lg:hover:ml-3 transition-all items-center gap-x-5">
                <div className=" p-5 border-r border-pColor border-opacity-20">
                    <Image src={map} alt="map"/>
                </div>
                <div>
                  <h5 className=" text-2xl font-bold text-pColor mb-1">Get In Touch</h5>
                  <p className="text-tColor">Address @ Dhaka-BD</p>
                </div>
            </Flex>
        </div>
    </Flex>
  )
}

export default ContactContent