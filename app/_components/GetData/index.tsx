"use client";

import React, { useEffect } from "react";
import axios from "axios";

function GetData({
  serverData,
}: {
  serverData: { userAgent: string; ip: string };
}) {
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
      } catch (error) {
        console.error("Error sending page view data via API route:", error);
      }
    };

    sendPageView();
  }, [serverData]);
  return <div></div>;
}

export default GetData;
