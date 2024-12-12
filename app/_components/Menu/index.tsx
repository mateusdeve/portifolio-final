// import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { GitGraph } from "lucide-react";
import { Saira_Condensed } from "next/font/google";
const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
function Menu() {
  return (
    <nav className="container lg:mt-[1rem] bg-[rgba(40,39,36,0.7)] backdrop-blur-[7.95px] lg:rounded-[0.5rem] border border-solid border-[#3E3B37] lg:py-[0.5rem] py-[1rem] lg:pl-[2rem] lg:pr-[0.5rem] flex lg:justify-between justify-center items-center fixed lg:top-[1rem] lg:left-[50%] lg:translate-x-[-50%] z-50">
      <div className="flex lg:gap-[1.5rem] gap-[1.11rem] items-center">
        <GitGraph className="text-white" />
        <div className="h-[2rem] w-[2px] bg-[#FFFFFF]"></div>
        <div className={saira.className}>
          <p className="lg:text-[1.5rem] text-[1.1875rem] lg:leading-[2rem] leading-[1rem] font-semibold text-linnear uppercase">
            Levando sua marca
          </p>
          <p className="lg:text-[1.2rem] text-[.875rem] lg:leading-[.875rem] leading-[1rem] text-white uppercase">
            ao próximo nível digital
          </p>
        </div>
      </div>
      <div className="lg:flex hidden gap-[2rem] items-center text-white">
        {/* <a href="#sobre">Informações</a>

        <a href="#faq">FAQ</a> */}
        <a href="https://wa.link/d57b9g" target="_blank">
          <Button className="bg-[#FF348D] text-[#fff] hover:bg-[#FF348D] shadow-[0px_20px_40px_-20px_#E50065]  rounded-[0.5rem] px-[2rem] h-[3.5rem] text-[1.125rem] font-semibold flex items-center gap-[2rem]">
            Solicite agora
          </Button>
        </a>
      </div>
    </nav>
  );
}

export default Menu;
