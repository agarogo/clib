import React from "react";
import styles from "@/styles/Home.module.scss";
import { useRouter } from "next/router";
import { UploadButton } from "@/components/UploadButton";
import { Menu } from "antd";
import {
  DeleteOutlined,
  FileImageOutlined,
  FileOutlined,
} from "@ant-design/icons";

export const DashboardLayout: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <>
      <main>
        <div className="h-[1080px] w-full">
          <div className="h-1/4">
            <div className="text-5xl font-semibold">Новости</div>
            <div className="text-5xl mt-10 w-[30%]">Что же нового у нас произошло?</div>
          </div>
          
          <div className="reee2 flex mt-16">
            <div className="mr-10 rounded-[22px] w-1/3 bg-black ">
              <div className="mt-5 w-1/2 ml-5 text-3xl text-white">Мы начали сотрудничать с...</div>
            </div>
            <div className="ml-10 rounded-[22px] w-1/3 bg-black ">
              <div className="mt-5 w-2/3 ml-5 text-3xl text-white">У нас теперь появился виртуальный учитель</div>
            </div>
          </div>
          <div className="h-20"></div>
          <div className="h-1/4">
            <div className="text-5xl font-semibold">Задания</div>
            <div className="text-5xl mt-10 w-[30%]">Недавно вы проходили</div>
          </div>
          
          <div className="reee3 flex mt-16">
            <div className="mr-10 rounded-[22px] reee4 bg-[#F5F5F5]">
              <div className="mt-5 w-1/3 ml-5 text-2xl rounded-[22px] bg-[#86F37D] h-10 flex">
                <div className="text-center w-[98%] h-[90%] my-auto mx-auto bg-[#F5F5F5] rounded-[22px]">тест №1</div>
              </div>
              <div className="h-20"></div>
              <div className="h-[100px] ml-5 mr-6  mt-[117px]">
                <div className="text-2xl">пройдено 87%</div>
                <div className=" mt-5 rounded-[22px] bg-black">
                  <div className="h-full w-10/12 rounded-[22px] bg-[#86F37D] text-transition">.</div>
                </div>
              </div>
            </div>
            <div className="ml-10 rounded-[22px] reee4 bg-[#F5F5F5] ">
            <div className="mt-5 w-1/3 ml-5 text-2xl rounded-[22px] bg-[#86F37D] h-10 flex">
                <div className="text-center w-[98%] h-[90%] my-auto mx-auto bg-[#F5F5F5] rounded-[22px]">тест №2</div>
              </div>
              <div className="h-20"></div>
              <div className="h-[100px] ml-5 mr-6  mt-[117px]">
                <div className="text-2xl">пройдено 45%</div>
                <div className=" mt-5 rounded-[22px] bg-black">
                  <div className="h-full w-5/12 rounded-[22px] bg-[#86F37D] text-transition">.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="derrr2">
          <div className="text-5xl font-semibold">Подборки заданий</div>
          <div className="reee2 mt-10 flex">
            <div className="h-full derrr bg-[#F5F5F5] rounded-[22px] mr-auto"></div>
            <div className="h-full  w-[30%] bg-[#F5F5F5] rounded-[22px] mx-auto"></div>
            <div className="h-full w-[30%] bg-[#F5F5F5] rounded-[22px] ml-auto"></div>  
          </div>
          <div className="reee2 mt-5 flex">
            <div className="h-full derrr bg-[#F5F5F5] rounded-[22px] mr-auto"></div>
            <div className="h-full derrr1 bg-[#F5F5F5] rounded-[22px] ml-auto"></div>
          </div>
          <div className="reee2 mt-5 flex">
            <div className="h-full w-[30%] bg-[#F5F5F5] rounded-[22px] mr-auto"></div>
            <div className="h-full  w-[30%] bg-[#F5F5F5] rounded-[22px] mx-auto"></div>
            <div className="h-full derrr bg-[#F5F5F5] rounded-[22px] ml-auto"></div>
          </div>
        </div>
        
      </main>
      <div className="reee3">
        <div className="h-10"></div>
        <div className=" w-[184.26px] rew h-[16px] mx-auto"></div>
        <div className="h-10"></div>
        <div className="h-[30px]  mx-auto text-base text-center">
          <a href="/dashboard/ZAD" className="ml-10">Задания</a>
          <a href="/dashboard/Mag" className="ml-10">Магазин</a>
          <a href="/dashboard/cha" className="ml-10">Виртуальный учитель</a>
        </div>
        <div className="h-10"></div>
        <p className="text-xl  text-center">2023</p>
      </div>
    </>
    
    
  );
};
