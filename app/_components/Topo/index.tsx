import React from "react";
import { Saira_Condensed } from "next/font/google";
import { ArrowRight, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const saira = Saira_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

function Topo() {
  return (
    <div className="lg:flex justify-between lg:container  relative" id="top">
      <div className="absolute top-72 right-32 w-[40rem] h-[19rem] blur-[166.91848754882812px] rounded-[47.96456rem] bg-[#9444FE]"></div>

      <div className="lg:max-w-[39.25rem] w-full lg:pt-[3.59rem] pt-[3rem] relative">
        <h1
          className={`${saira.className}  lg:mt-[10rem] mt-[5rem] lg:text-[4.5rem] text-[3rem] lg:text-start text-center lg:leading-[4.5rem] leading-[3rem] font-bold uppercase`}
        >
          Transformamos <br /> suas ideias em <br />
          <span className="text-linnear"> soluções digitais incríveis.</span>
        </h1>
        <h2 className="mt-[2rem] lg:text-[1.5rem] text-[1.25rem] font-bold lg:text-left text-center ">
          Sites responsivos, design atraente e <br />{" "}
          <span className="text-[#9444FE]">desenvolvimento personalizado</span>{" "}
          para <br /> o seu negócio.
        </h2>
        <div className="px-4 lg:px-0">
          <a href="https://wa.link/d57b9g" target="_blank">
            <Button className=" mt-10 bg-[#9444FE] text-[#fff] hover:bg-[#9444FE] max-w-[26.0625rem] w-full shadow-[0px_20px_40px_-16px_#9444FE]  rounded-[0.5rem] px-[2rem] h-[3.5rem] text-[1.125rem] font-semibold flex items-center gap-[2rem]">
              Peça seu orçamento agora
              <div className="">
                <ArrowRight />
              </div>
            </Button>
          </a>
        </div>
      </div>

      <div className="">
        <div className="lg:max-w-[35.4375rem] w-full lg:pt-[10rem] pt-[2rem] lg:pb-[5rem] pb-[2rem] relative  bg-[#190f27] h-full lg:px-[4rem] px-[1rem] lg:mt-0 mt-[3rem] ">
          <p
            className={`${saira.className}  lg:text-[2.3rem] text-[2rem] uppercase font-semibold lg:text-left text-center`}
          >
            impulsionamos sua empresa
          </p>
          <div className="mt-[2.25rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Criamos sites que representam sua marca de forma única e
                impactante.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Desenvolvemos soluções digitais personalizadas para atender às
                necessidades do seu negócio.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Aumentamos sua presença online com design inovador e tecnologia
                de ponta.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Sites rápidos, responsivos e otimizados para conversões.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Transformamos ideias em plataformas digitais que geram
                resultados.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
          <div className="mt-[1.5rem]">
            <div className="flex items-start gap-4 ">
              <div>
                <ArrowUp className="rotate-45 text-[#9444FE]" />
              </div>
              <p className="font-medium leading-[1.5rem] text-[#fff] ">
                Ajudamos sua empresa a se destacar no mercado com designs
                profissionais e modernos.
              </p>
            </div>
            <div className="h-[1.5px] bg-[#9c9c9c] mt-[1rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topo;
