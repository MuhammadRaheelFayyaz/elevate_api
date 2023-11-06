import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Provider() {
  const router = useRouter();
  useEffect(() => {
    router.push("/provider/hub-listing/general");
  }, []);
  return <div></div>;
}
