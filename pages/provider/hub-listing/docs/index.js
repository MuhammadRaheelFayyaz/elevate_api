import Button from "@/components/Button/Button";
import GeneralNavbar from "@/components/HubListingNavbar";
import PageLayout from "@/components/HubLayout/HubLayout";
import Typography from "@/components/Typegraphy/Typography";
import HubListingLayout from "@/components/HubListingLayout/HubListingLayout";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar/Navbar";
import {useState} from "react";

const DynamicTextEditor = dynamic(
  () => import("@/components/Editor/EditorText"),
  {ssr: false} // Prevents text editor from being server-side rendered
);

export default function Analytics() {
  const [editorValue, setEditorValue] =useState('')
  return (
    <HubListingLayout>
      <div className="pt-10 pb-6 px-6">
        <Typography variant="h3" text="Adding a Readme: Empowering your API Journey! 🌟"/>
        <Typography className="mt-2 mb-3" variant="small"
                    text="Take a moment to unlock your API's full potential by adding a README to accompany your masterpiece in the Hub. Don't underestimate the power of a well-crafted README; it's like a guidebook that paves the way for developers to understand, utilize, and appreciate your API."/>
        <div className="w-full h-[50vh] flex flex-col min-[814px]:flex-row">
          <div className="min-[814px]:w-[calc(100%_/_2)]">
            <DynamicTextEditor value={editorValue} setValue={setEditorValue} />
          </div>
          <div className="min-[814px]:w-[calc(100%_/_2)]">
            <DynamicTextEditor value={editorValue} setValue={setEditorValue} readOnly={true}/>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 border-t-[1px] border-gray-300 px-5 py-3">
        <Button text="Save"/>
        <Button text="Discard" className="bg-white !text-black border"/>
      </div>
    </HubListingLayout>
  )
}
