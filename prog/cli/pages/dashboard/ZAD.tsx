import { GetServerSidePropsContext, NextPage } from "next";
import { User } from "@/api/dto/auth.dto";
import { Button } from "antd";

import styles from "@/styles/Profile.module.scss";
import { checkAuth } from "@/utils/checkAuth";
import * as Api from "@/api";
import React from "react";
import { Layout } from "@/layouts/Layout";
import DashboardPage from "@/pages/dashboard/index";

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <div
      className={
        "bg-[#ffffff] w-[1920px] h-[704px] relative overflow-hidden "
      }
    >
      <div className="bg-[#F578C5] rounded-[20px] pt-0.5 pr-2 pb-0.5 pl-2 flex flex-row gap-2.5 items-center justify-center h-10 absolute left-[1700px] top-4">
        <svg
          className="shrink-0 w-6 h-6 relative overflow-visible"
          style={{}}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_419_14"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_419_14)">
            <path
              d="M19.4846 20.1539L13.223 13.8923C12.723 14.318 12.148 14.6474 11.498 14.8808C10.848 15.1141 10.1948 15.2308 9.53839 15.2308C7.93673 15.2308 6.58118 14.6764 5.47177 13.5676C4.36233 12.4587 3.80762 11.1039 3.80762 9.50313C3.80762 7.90233 4.36203 6.54648 5.47084 5.43558C6.57966 4.32468 7.93447 3.76923 9.53527 3.76923C11.1361 3.76923 12.4919 4.32393 13.6028 5.43335C14.7137 6.54277 15.2692 7.89832 15.2692 9.5C15.2692 10.1949 15.1461 10.8673 14.8999 11.5173C14.6538 12.1673 14.3307 12.7231 13.9307 13.1846L20.1923 19.4462L19.4846 20.1539ZM9.53839 14.2308C10.8653 14.2308 11.9855 13.774 12.899 12.8606C13.8124 11.9471 14.2692 10.8269 14.2692 9.5C14.2692 8.17309 13.8124 7.05289 12.899 6.13943C11.9855 5.22596 10.8653 4.76923 9.53839 4.76923C8.21147 4.76923 7.09128 5.22596 6.17782 6.13943C5.26437 7.05289 4.80764 8.17309 4.80764 9.5C4.80764 10.8269 5.26437 11.9471 6.17782 12.8606C7.09128 13.774 8.21147 14.2308 9.53839 14.2308Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className="bg-white rounded-[20px] border-solid border-foundation-black-black-6 border pt-2.5 pr-4 pb-2.5 pl-4 flex flex-row gap-2 items-center justify-start w-[1656px] absolute left-10 top-4">
        <div className="text-foundation-black-black-6 text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex-1 flex items-center justify-start">
          Поиск{" "}
        </div>
      </div>
      <div className="bg-[#F5F5F5] rounded-[20px] w-[336px] h-44 absolute  top-[136px] overflow-hidden">
        <div className="rounded-[20px] border-solid border-[#86F37D] border pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2.5 items-center justify-center absolute left-[15px] top-3">
          <div className="text-[#000000] text-left font-desktopbl-font-family text-desktopbl-font-size font-desktopbl-font-weight relative">
            тест №1{" "}
          </div>
        </div>
        <div className="text-[#000000] text-left font-desktopbl-font-family text-desktopbl-font-size font-desktopbl-font-weight absolute left-[15px] top-[107px]">
          пройдено 87%{" "}
        </div>
        <div className="bg-black rounded-[20px] w-[307px] h-5 absolute left-[calc(50%_-_153px)] top-[137px]"></div>
        <div className="bg-[#86F37D] rounded-[20px] w-[263px] h-5 absolute left-[calc(50%_-_153px)] top-[137px]"></div>
      </div>
      <div className="text-[#000000] text-left text-5xl font-semibold absolute  top-[72px]">
        Недавно пройденные{" "}
      </div>
      <div className="text-[#000000] text-left text-5xl font-semibold text-desktoph-2-font-size font-desktoph-2-font-weight absolute  top-[336px]">
        Все{" "}
      </div>
      <div className="bg-[#F5F5F5] text-xl rounded-[20px] w-[336px] h-44 absolute  top-[136px] overflow-hidden">
        <div className="rounded-[20px] border-solid border-[#86F37D] border pt-1 pr-3 pb-1 pl-3 flex flex-row gap-2.5 items-center justify-center absolute left-[15px] top-3">
          <div className="text-[#000000] text-left font-desktopbl-font-family text-desktopbl-font-size font-desktopbl-font-weight relative">
            тест №2{" "}
          </div>
        </div>
        <div className="text-[#000000] text-left font-desktopbl-font-family text-desktopbl-font-size font-desktopbl-font-weight absolute left-[15px] top-[107px]">
          пройдено 12%{" "}
        </div>
        <div className="bg-black  rounded-[20px] w-[307px] h-5 absolute left-[calc(50%_-_153px)] top-[137px]"></div>
        <div className="bg-[#86F37D] rounded-[20px] w-9 h-5 absolute left-[calc(50%_-_153px)] top-[137px]"></div>
      </div>
      <form action="/dashboard/ZAD1">
        <button className="bg-[#B328F6] text-2xl rounded-[20px] w-[1780px] h-[140px] absolute  top-[400px] overflow-hidden">
          <div className="text-white text-left font-desktopsub-font-family text-desktopsub-font-size font-desktopsub-font-weight absolute left-5 top-7 flex items-center justify-start">
            Кроссворд МПИТ{" "}
          </div>
          <div className="text-white text-left font-desktoppre-font-family text-desktoppre-font-size font-desktoppre-font-weight uppercase absolute left-5 top-[93px] flex items-center justify-start">
            от МПИТ{" "}
          </div>
          <div className="bg-black rounded-[20px] p-6 flex flex-row gap-2.5 items-center justify-center absolute left-[1620px] top-[32px]">
            <div className="text-white text-left font-desktoph-2-font-family text-desktoph-2-font-size font-desktoph-2-font-weight relative flex items-center justify-start">
              10 A{" "}
            </div>
          </div>
        </button>
      </form>
      <form action="/dashboard/ZAD2di">
        <button className="bg-[#B328F6] text-2xl rounded-[20px] w-[1780px] h-[140px] absolute top-[548px] overflow-hidden">
          <div className="text-white text-left font-desktopsub-font-family text-desktopsub-font-size font-desktopsub-font-weight absolute left-5 top-7 flex items-center justify-start">
            Основы Figma{" "}
          </div>
          <div className="text-white text-left font-desktoppre-font-family text-desktoppre-font-size font-desktoppre-font-weight uppercase absolute left-5 top-[93px] flex items-center justify-start">
            от МПИТ{" "}
          </div>
          <div className="bg-black rounded-[20px] p-6 flex flex-row gap-2.5 items-center justify-center absolute left-[1600px] top-[32px]">
            <div className="text-white text-left font-desktoph-2-font-family text-desktoph-2-font-size font-desktoph-2-font-weight relative flex items-center justify-start">
              1 000 A{" "}
            </div>
          </div>
        </button>
      </form>
      
    </div>
  );
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Dashboard / Задание">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ("redirect" in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
