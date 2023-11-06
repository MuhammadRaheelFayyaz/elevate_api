import React from "react";
import { useRouter } from "next/router";
import ApiHubLayout from "@/components/ApiHubLayout/ApiHubLayout";
import ApiHubCard from "@/components/Crad/ApiHubCard";
import RecommendApiCard from "@/components/Crad/RecommendApiCard";
import Typography from "@/components/Typegraphy/Typography";
import Slider from "@/components/Slider/Slider";

export default function ApiHub() {
  const router = useRouter();
  const onClick = () => {
    router.push("/api-details");
  };
  return (
    <ApiHubLayout>
      <div className="p-4">
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Discover More APIs"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Browse through our collections to learn about new use cases to implement in your app"
            className="text-left mb-4"
          />
          <Slider>
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 1"
              onClick={onClick}
            />
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 2"
              onClick={onClick}
            />
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 3"
              onClick={onClick}
            />
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 4"
              onClick={onClick}
            />
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 5"
              onClick={onClick}
            />
            <ApiHubCard
              image="/images/chart.webp"
              heading="Api 6"
              onClick={onClick}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Recommended APIs"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="APIs curated by RapidAPI and recommended based on functionality offered, performance, and support!"
            className="text-left mb-4"
          />
          <Slider>
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Popular APIs"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Discover and connect to thousands of APIs"
            className="text-left mb-4"
          />
          <Slider>
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Free Public APIs for Developers"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="APIs that are popular and frequently used on RapidAPI"
            className="text-left mb-4"
          />
          <Slider>
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Top AI Based APIs"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Discover and connect to thousands of APIs"
            className="text-left mb-4"
          />
          <Slider>
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
          </Slider>
        </div>
        <div>
          <Typography
            variant="h2"
            text="Tax APIs"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Discover and connect to thousands of APIs"
            className="text-left mb-4"
          />
          <Slider>
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
            />
          </Slider>
        </div>
      </div>
    </ApiHubLayout>
  );
}
