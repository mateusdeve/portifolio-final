"use client";

import React, { useEffect } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";

function GetData({
  serverData,
}: {
  serverData: { userAgent: string; ip: string };
}) {
  const { toast } = useToast();
  useEffect(() => {
    const sendPageView = async () => {
      // Determinar o tipo de dispositivo
      const isMobile =
        /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const device = isMobile ? "mobile" : "desktop";

      const data = {
        url: window.location.href,
        referrer: document.referrer,
        clientUserAgent: navigator.userAgent,
        language: navigator.language,
        device, // Adiciona o tipo de dispositivo
        serverUserAgent: serverData.userAgent,
        ip: serverData.ip,
        // Adicione outros dados conforme necessário
      };

      try {
        await axios.post("/api/trackPageView", data);
        console.log("Page view data sent via API route successfully");
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",

          variant: "default",
        });
      } catch (error) {
        console.error("Error sending page view data via API route:", error);
      }
    };

    sendPageView();
  }, [serverData]);
  return <div></div>;
}

export default GetData;
