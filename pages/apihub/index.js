import ApiHubLayout from "@/components/ApiHubLayout/ApiHubLayout";
import ApiHubCard from "@/components/Crad/ApiHubCard";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Slider from "react-slick";

export default function ApiHub() {
  return (
    <div>
      <ApiHubLayout>
        {/* <Slider> */}
        <div className="flex flex-wrap justify-center">
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 1" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 2" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 3" />
        </div>
        {/* </Slider> */}
      </ApiHubLayout>
    </div>
  );
}
