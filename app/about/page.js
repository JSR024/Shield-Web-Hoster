import AboutContent from "@/components/AboutContent"
import CountUpStat from "@/components/CountUpStat"
import DomainSection from "@/components/DomainSection"


const page = () => {
  return (
    <div className="py-[120px]">
      <AboutContent/>
      <CountUpStat/>
      <DomainSection/>
    </div>
  )
}

export default page