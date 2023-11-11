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
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
              verified={true}
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
              verified={true}
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
              verified={true}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
              verified={true}
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
              verified={true}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
              verified={true}
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
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
              verified={true}
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
              verified={true}
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
              verified={true}
            />
          </Slider>
        </div>
        <div className="mb-8">
          <Typography
            variant="h2"
            text="Simply dummy text of the printing"
            className="text-left font-bold"
          />
          <Typography
            variant="body"
            text="Lorem Ipsum has been the industry standard dummy text ever since the 1500s"
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
              verified={true}
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
              verified={true}
            />
            <RecommendApiCard
              heading="TEST TEASED"
              text="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
              time="23"
              tick="02"
              trend="30"
              onClick={onClick}
              verified={true}
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
