import { useState } from "react";
import Typography from "@/components/Typegraphy/Typography";
import SearchInput from "@/components/Search/Search";
import Button from "@/components/Button/Button";
import Table from "@/components/custom-table/table";

const columns = [
  { key: "endpoints", label: "Endpoints" },
  { key: "method", label: "Method" },
  { key: "action", label: "Action" },
];
const data = [
  {
    endpoints: "/api/users",
    method: "REST API",
    action: "Edit",
  },
  {
    endpoints: "/api/products",
    method: "REST API",
    action: "Edit",
  },
  {
    endpoints: "/api/posts",
    method: "REST API",
    action: "Edit",
  },
];
export default function EndPoints({ onTabSelect }) {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="mb-4">
        <Typography variant="h2" className="mb-4" text="Endpoints" />
        <Typography
          variant="body"
          className="mb-4"
          text="Changes made to the endpoints will be reflected in the Hub."
        />
        <Typography variant="body" text="Add and define your API endpoints." />
      </div>
      <div className="flex flex-col gap-2 lg:flex-row justify-between">
        <div className="w-[300px]">
          <SearchInput
            placeholder="Search Endpoint"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex w-full flex-col justify-end max-w-[300px] md:max-w-full md:flex-row gap-1 mb-4 mt-2 lg:mt-0">
          <Button
            text="Add REST API Endpoint"
            icon="/icons/add.svg"
            onClick={() => console.log("clicked")}
            className='justify-center'
          />
          <Button
            text="Add GraphQl Endpoint"
            icon="/icons/add.svg"
            onClick={() => console.log("clicked")}
            className='justify-center'
          />
          <Button text="Delete" className="bg-red-600 justify-center" />
        </div>
      </div>
      <div>
        <Table columns={columns} data={data} />
      </div>
    </>
  );
}
