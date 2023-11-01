import ApiHubCard from "@/components/Crad/ApiHubCard";
import React from "react";
import ApiPageLayout from "@/components/ApiHubLayout/ApiHubLayout";

export default function ApiHub() {
  return (
    <div>
      <ApiPageLayout>
        <div className="flex flex-wrap justify-center">
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 1" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 2" />
          <ApiHubCard image="https://picsum.photos/500/300" heading="Api 3" />
        </div>
      </ApiPageLayout>
    </div>
  );
}
