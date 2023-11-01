import ApiHubLayout from "@/components/ApiHubLayout/ApiHubLayout";
import ApiHubCard from "@/components/Crad/ApiHubCard";
import RecommendApiCard from "@/components/Crad/RecommendApiCard";
import Navbar from "@/components/Navbar/Navbar";
import Typography from "@/components/Typegraphy/Typography";
import React from "react";
import Slider from "react-slick";

export default function ApiHub() {
  return (
    <div>
      <ApiHubLayout>
        {/* <Slider> */}
        <div className="flex  justify-center gap-3	py-8">
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 1" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 2" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 3" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 4" />
        </div>
        <Typography variant="h2" text="Recommended APIs" className="text-left font-bold" />
        <Typography variant="body" text="Discover and connect to thousands of APIs" className="text-left" />
        <div className="flex  justify-center gap-3	py-8">
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
        </div>
        <Typography variant="h2" text="Trending APIs" className="text-left font-bold" />
        <Typography variant="body" text="Discover and connect to thousands of APIs" className="text-left" />
        <div className="flex  justify-center gap-3	py-8">
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
        </div>
        <Typography variant="h2" text="New APIs" className="text-left font-bold" />
        <Typography variant="body" text="Discover and connect to thousands of APIs" className="text-left" />
        <div className="flex  justify-center gap-3	py-8">
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
        </div>
        <Typography variant="h2" text="Discovered APIs" className="text-left font-bold" />
        <Typography variant="body" text="Discover and connect to thousands of APIs" className="text-left" />
        <div className="flex  justify-center gap-3	py-8">
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
        </div>
        <Typography variant="h2" text="Favourite APIs" className="text-left font-bold" />
        <Typography variant="body" text="Discover and connect to thousands of APIs" className="text-left" />
        <div className="flex  justify-center gap-3	py-8">
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
          <RecommendApiCard heading="TEST TEASED"text="EEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEE EEEDDDDDDDDDD"time="23"tick="02"trend="30"/>
        </div>
        {/* </Slider> */}
      </ApiHubLayout>
    </div>
  );
}
