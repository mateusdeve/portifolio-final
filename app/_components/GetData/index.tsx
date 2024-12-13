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
      try {
        const isMobile =
          /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        const device = isMobile ? "mobile" : "desktop";

        const data = {
          url: window.location.href || "",
          referrer: document.referrer || "",
          clientUserAgent: navigator.userAgent || "",
          language: navigator.language || "",
          device,
          serverUserAgent: serverData.userAgent || "",
          ip: serverData.ip || "",
        };

        console.log("Dados enviados para a API:", data); // Log dos dados

        await axios.post("/api/trackPageView", data);
        console.log(
          "Dados de visualização de página enviados com sucesso via rota API"
        );
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Erro Axios ao enviar dados via rota API:",
            error.response?.data || error.message
          );
        } else {
          console.error("Erro inesperado ao enviar dados via rota API:", error);
        }
      }
    };

    sendPageView();
  }, [serverData]);

  return <></>;
}

export default GetData;
