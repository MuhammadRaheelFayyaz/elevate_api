import PageLayout from "@/components/HubLayout/HubLayout";
import HubListingNavbar from "@/components/HubListingNavbar";

export default function HubListingLayout({children}){
  return (
    <PageLayout>
      <HubListingNavbar />
      {children}
    </PageLayout>
  )
}