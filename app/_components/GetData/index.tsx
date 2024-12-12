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
      try {
        // Determinar o tipo de dispositivo
        const isMobile =
          /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        const device = isMobile ? "mobile" : "desktop";

        const data = {
          url: "",
          referrer: "",
          clientUserAgent: "",
          language: "",
          device: "device",
          serverUserAgent: "",
          ip: "",
        };

        console.log("Enviando dados para a API:", data);

        await axios.post("/api/trackPageView", data);
        console.log(
          "Dados de visualização de página enviados com sucesso via rota API"
        );
        toast({
          title: "Sucesso",
          description: "Dados enviados com sucesso!",
          variant: "default",
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(
            "Erro Axios ao enviar dados via rota API:",
            error.response?.data || error.message
          );
          toast({
            title: "Erro",
            description:
              error.response?.data?.message ||
              "Falha ao enviar dados de visualização da página",
            variant: "destructive",
          });
        } else {
          console.error("Erro inesperado ao enviar dados via rota API:", error);
          toast({
            title: "Erro",
            description: "Ocorreu um erro inesperado",
            variant: "destructive",
          });
        }
      }
    };

    sendPageView();
  }, [serverData, toast]); // Adicione 'toast' como dependência para evitar avisos do React

  return <div></div>;
}

export default GetData;
