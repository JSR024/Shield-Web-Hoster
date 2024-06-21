import ContactContent from "@/components/ContactContent";

const page = () => {
  return (
    <div className="py-[120px]">
      <h2 className=" text-5xl font-bold text-pColor text-center leading-[55px] mb-5">
        Contact Us
      </h2>
      <p className="text-tColor text-center  text-lg lg:w-[800px] m-auto">
        Don't worry! We have support premium 24/7/365. We are looking forward
        waiting for your contact.
      </p>
      <ContactContent />
    </div>
  );
};

export default page;
