import React, {useEffect, useState} from "react";


import ApiPageLayout from "@/components/ApiHubLayout/ApiHubLayout";
import {useRouter} from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/api-hub')
  }, [])
  return (
    null
  )
}
