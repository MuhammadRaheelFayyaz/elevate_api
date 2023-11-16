// import Header from "@/components/Header/Header";
import Tables from "@/components/PriceTable/Table";
import Typography from "@/components/Typegraphy/Typography";
import React from "react";
import PlatformCard from "@/components/Pricing/PlatformCard";
import Image from "next/image";
import DashboardCard from "@/components/Pricing/DashboardCard";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
export default function Pricing() {
  return (
    <>
      {/* <Header /> */}
      <Navbar/>
      <div>
        <Tables />
        <div className="mx-3 sm:mx-[11%]">
          <div className="py-5">
            <Typography
              variant="h1"
              text="Common Queries"
              className="text-black text-center text-2xl font-semibold pb-1"
            />
            <div>
              <Typography
                variant="h3"
                text="Is my personal information secure?"
                className="font-bold text-lg text-black text-left"
              />

              <Typography
                variant="body"
                text="Credit card transactions are securely processed through our PCI-compliant banking partner."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="Why is a credit card necessary for a freemium API?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="We collaborate directly with API providers to establish transparent pricing for developers. If a plan includes an average fee, the provider may request a credit card. If you no longer wish to use the API, you can unsubscribe from the plan at any time by clicking the 'unsubscribe' button under the Billing section of the RapidAPI Dashboard."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="What happens if I surpass my plan limits?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="Depending on your plan specifications, you may incur standard charges or face suspension.?"
                className="text-left text-sm text-black pb-3"
              />
              <Typography
                variant="h3"
                text="When is the billing date?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="Your credit card will be charged upon subscribing to an API's plan and subsequently at the next recurring interval."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="To initiate a refund, kindly reach out to us at support@elevate.com."
                className="text-left text-sm text-black pb-3"
              />
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-black text-center text-2xl font-semibold pb-1">
              A Reliable Platform at Scale
            </h2>
            <p className="text-black text-center sm:text-xs md:text-sm lg:text-lg">
              Embark on your development journey with the Recipe-Food-Nutrition API, gaining access to a comprehensive ecosystem to accelerate your progress.
            </p>
          </div>

          <div className="flex justify-between gap-3 flex-wrap border shadow-lg p-5 rounded-lg mt-5">
            <PlatformCard image={"/images/user.png"} />
            <PlatformCard image={"/images/apis.png"} />
            <PlatformCard image={"/images/call.png"} />
            <PlatformCard image={"/images/server.png"} />
          </div>

          <div className="flex justify-between my-12">
            {/* {Array.from({ length: 5 }).map((index) => {
              return ( */}
            <div className="w-full">
              <Image
                src={"/images/logoss.png"}
                alt="placeholder logo"
                quality={100} // Set quality to 100
                unoptimized={true}
                width={100}
                height={100}
                className="w-full"
              />
            </div>
            {/* );
            })} */}
          </div>
            <div className="my-10 text-center">
              <Typography
                variant="h2"
                text="Unified API Management Dashboard"
                className="text-black text-2xl font-semibold pb-2"
              />
              <Typography
                variant="body"
                text="ElevateAPI ensures transparent visibility for all the APIs you use. Relax and worry less about managing multiple keys and subscription accounts."
                className="text-black sm:text-xs md:text-sm lg:text-lg"
              />
            </div>
            <div className="flex flex-wrap justify-center items-center gap-3">
              <DashboardCard
                number={"1"}
                heading="Usage Metrics and Billing Information"
                text="Ensure the continuous operation of your app by monitoring API errors and latency trends."
              />
              <DashboardCard
                number={"2"}
                heading={"Errors and Latency"}
                text="Enhance your app's reliability by monitoring API errors and latency trends."
              />
              <DashboardCard
                number={"3"}
                heading={"API Call Logs"}
                text="Safeguard your app's uptime by monitoring API errors and latency trends."
              />
            </div>
          </div>
          <div className="flex justify-between my-12">
              <div className="w-full mx-3 sm:mx-[11%] lg:max-w-[1100px] lg:mx-auto">
                <Image
                  src={"/images/graphs.png"}
                  alt="placeholder logo"
                  quality={100} // Set quality to 100
                  unoptimized={true}
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
          </div>
        <Footer />
      </div>
    </>
  );
}
