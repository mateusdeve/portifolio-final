// app/api/trackPageView/route.ts

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validação dos dados recebidos
    if (
      !data.url ||
      !data.referrer ||
      !data.clientUserAgent ||
      !data.language ||
      !data.device ||
      !data.serverUserAgent ||
      !data.ip
    ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Envie os dados para o webhook externo
    await axios.post(
      "https://n8n.vtsd.com.br/webhook/548fcdc7-03e9-4cf0-88c2-5af6926c4298",
      data
    );

    // Retorne uma resposta de sucesso
    return NextResponse.json(
      { message: "Page view tracked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error forwarding page view data:", error);

    // Retorne uma resposta de erro genérica
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb", // Ajuste conforme necessário
    },
  },
};
