import Button from "@/components/Button/Button";
import GeneralNavbar from "@/components/GeneralNavbar";
import PageLayout from "@/components/HubLayout/HubLayout";
import Typography from "@/components/Typegraphy/Typography";

export default function Analytics() {

  return (
    <PageLayout>
      <GeneralNavbar />
      <div className="pt-10 pb-6 px-6">
        <Typography  variant="h3" text="Adding a Readme: Empowering your API Journey! 🌟" />
        <Typography  className="mt-2 mb-3" variant="small" text="Take a moment to unlock your API's full potential by adding a README to accompany your masterpiece in the Hub. Don't underestimate the power of a well-crafted README; it's like a guidebook that paves the way for developers to understand, utilize, and appreciate your API." />
        <div className="h-[500px] w-full border rounded-lg flex">
            <div className="w-[calc(100%_/_2)] border-r-[1px] border-gray-300 h-full"></div>
            <div className="w-[calc(100%_/_2)] h-full"></div>
        </div>
      </div>
      <div className="flex gap-2 border-t-[1px] border-gray-300 px-5 py-3">
        <Button text="Save" />
        <Button text="Discard" className="bg-white !text-black border" />
      </div>
    </PageLayout>
  )
}
