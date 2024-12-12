// app/page.tsx

import React from "react";
import Menu from "./_components/Menu";
import Topo from "./_components/Topo";
import GetData from "./_components/GetData";
import { headers } from "next/headers";

export type ServerData = {
  userAgent: string;
  ip: string;
};

const Home = async () => {
  const headersList = headers(); // This returns a Promise<ReadonlyHeaders>

  // Await the headers to get the ReadonlyHeaders object
  const resolvedHeaders = await headersList;

  // Extract user-agent
  const userAgent = resolvedHeaders.get("user-agent") || "Unknown";

  // Extract IP address
  // Note: 'x-forwarded-for' can contain multiple IPs, the first one is usually the client's IP
  const xForwardedFor = resolvedHeaders.get("x-forwarded-for");

  // Attempt to extract the IP from 'x-forwarded-for' or fallback to 'remote-address'
  const ip = xForwardedFor
    ? xForwardedFor.split(",")[0].trim()
    : resolvedHeaders.get("remote-address") || "Unknown";

  const serverData: ServerData = {
    userAgent,
    ip,
  };

  return (
    <div>
      <GetData serverData={serverData} />
      <Menu />
      <Topo />
    </div>
  );
};

export default Home;
