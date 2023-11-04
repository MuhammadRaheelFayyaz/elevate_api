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
        <div className="mx-[11%]">
          <div className="py-5">
            <Typography
              variant="h1"
              text="Frequently Asked Questions"
              className="text-black text-center text-2xl font-semibold pb-1"
            />
            <div>
              <Typography
                variant="h3"
                text="Is my parent information secure?"
                className="font-bold text-lg text-black text-left"
              />

              <Typography
                variant="body"
                text="Credit cards are processed through a PC compliant banking partner."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="Why do you require a credit card for a freemium API?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="We work directly with API providers to implement clear trasnparent pricing for developers. The Provider may require a credit card if a plan has a quote with an average fee. If you would be no longer like to use the API you can unsubscribe from the plan at anytime by clicking the 'unsubscribe' button under the Billing section of the RapidAPI Dashboard."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="What if I exceed my plan limits?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="Depending on your plasn specification you will either incur average charges or be suspended.?"
                className="text-left text-sm text-black pb-3"
              />
              <Typography
                variant="h3"
                text="When will I be billed?"
                className="font-bold text-lg text-black text-left"
              />
              <Typography
                variant="h3"
                text="We charge your credit card upon subscription to an API's plan and at the next recurring interval."
                className="text-left text-sm text-black pb-3"
              />

              <Typography
                variant="h3"
                text="For refund requests, please contact us at support@rapidapi.com"
                className="text-left text-sm text-black pb-3"
              />
            </div>
          </div>
          <div className="my-3">
            <h2 className="text-black text-center text-2xl font-semibold pb-1">
              A Proven Platform With Scale
            </h2>
            <p className="text-black text-center sm:text-xs md:text-sm lg:text-lg">
              Starting with the Recipe-Food-Nutrution API - you have access to
              an extensive ecosystem to accelerate your development process
            </p>
          </div>

          <div className="flex justify-between gap-3 flex-wrap">
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
                text="One Dashboard, All your APIs"
                className="text-black text-2xl font-semibold pb-2"
              />
              <Typography
                variant="body"
                text="   RapidAPI provides clear visibily on all of the API you use. Worry less
            about juggling multiple keys and subscription accounts"
                className="text-black sm:text-xs md:text-sm lg:text-lg"
              />
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3">
              <DashboardCard
                number={"1"}
                heading={"Call Volume And Billings"}
                text={
                  " Ensure your apps uptime by keeping track of API errors and trends in  latency."
                }
              />
              <DashboardCard
                number={"2"}
                heading={"Errors and Latency"}
                text={
                  "Ensure your apps uptime by keeping track of API errors and trends in  latency."
                }
              />
              <DashboardCard
                number={"3"}
                heading={"Logs for  your API calls"}
                text={
                  "Ensure your apps uptime by keeping track of API errors and trends in  latency."
                }
              />
            </div>
          </div>
          <div className="flex justify-between my-12">
              <div className="w-full mx-[11%]">
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
