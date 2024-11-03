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
        "bg-[#ffffff] w-[2171px] h-[900.19px] relative overflow-hidden "
      }
    >
      <div className="bg-[#F5F5F5]-black-3 rounded-[33.92px] w-[339.22px] h-[407.06px] absolute left-[556.32px] top-[100.25px] overflodw-hiden">
        <div className="text-[#000000] text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium absolute left-[25.44px] top-[25.44px] w-[286.64px] flex items-center justify-start">
          Промокод на скидку 40% на годовой курс по UX/UI{" "}
        </div>
        <div className="bg-[#B328F6] rounded-[33.92px] pt-[6.78px] pr-[20.35px] pb-[6.78px] pl-[20.35px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[264.59px]">
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium relative flex items-center justify-start">
            5 000 A{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-[#000000] border-[1.7px] pt-[13.57px] pr-[27.14px] pb-[13.57px] pl-[27.14px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[323.95px]">
          <form action="/dashboard/ski">
            <button className="text-[#000000] text-left font-buttonsmall-font-family text-buttonsmall-font-size font-buttonsmall-font-weight relative flex items-center justify-start">
                Приобрести{" "}
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#F5F5F5]-black-3 rounded-[33.92px] w-[339.22px] h-[407.06px] absolute left-[909.11px] top-[100.94px] overflow-hidden">
        <div className="text-[#000000] text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium absolute left-[25.44px] top-[25.44px] flex items-center justify-start">
          Футболка МПИТ{" "}
        </div>
        <div className="bg-[#B328F6] rounded-[33.92px] pt-[6.78px] pr-[20.35px] pb-[6.78px] pl-[20.35px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[264.59px]">
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium relative flex items-center justify-start">
            4 000 A{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-[#000000] border-[1.7px] pt-[13.57px] pr-[27.14px] pb-[13.57px] pl-[27.14px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[323.95px]">
          <div className="text-[#000000] text-left font-buttonsmall-font-family text-buttonsmall-font-size font-buttonsmall-font-weight relative flex items-center justify-start">
            Приобрести{" "}
          </div>
        </div>
      </div>
      <div className="text-[#000000] text-left font-['Inter-SemiBold',_sans-serif] text-[67.84375px] font-semibold absolute left-[556.32px] top-[.39px]">
        От спонсоров{" "}
      </div>
      <div className="bg-black rounded-[33.92px] w-[461.34px] h-[850.95px] absolute left-[67.84px] top-[.39px] overflow-hidden">
        <div className="bg-white rounded-[33.92px] border-solid border-foundation-black-black-6 border-[1.7px] pt-[16.96px] pr-[27.14px] pb-[16.96px] pl-[27.14px] flex flex-row gap-[13.57px] items-center justify-start w-[334.13px] absolute left-[25.44px] top-[40.71px]">
          <div className="text-foundation-black-black-6 text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex-1 flex items-center justify-start">
            Поиск{" "}
          </div>
        </div>
        <div className="bg-pink rounded-[33.92px] pt-[3.39px] pr-[13.57px] pb-[3.39px] pl-[13.57px] flex flex-row gap-[16.96px] items-center justify-center h-[67.84px] absolute left-[366.36px] top-[40.71px]">
          <svg
            className="shrink-0 w-[40.71px] h-[40.71px] relative overflow-visible"
            style={{}}
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_408_10"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="42"
              height="42"
            >
              <rect
                x="0.769043"
                y="0.668762"
                width="40.7063"
                height="40.7063"
                fill="#D9D9D9"
              />
            </mask>
            <g mask="url(#mask0_408_10)">
              <path
                d="M33.8166 34.8516L23.1965 24.2314C22.3484 24.9534 21.3732 25.5122 20.2707 25.9079C19.1682 26.3037 18.0603 26.5016 16.947 26.5016C14.2304 26.5016 11.9313 25.5612 10.0496 23.6806C8.1679 21.7999 7.22705 19.502 7.22705 16.7869C7.22705 14.0718 8.16738 11.7722 10.048 9.88799C11.9287 8.0038 14.2266 7.06171 16.9417 7.06171C19.6568 7.06171 21.9565 8.00254 23.8406 9.88422C25.7248 11.7659 26.6669 14.065 26.6669 16.7816C26.6669 17.9602 26.4582 19.1007 26.0407 20.2032C25.6232 21.3056 25.0752 22.2483 24.3968 23.0311L35.017 33.6512L33.8166 34.8516ZM16.947 24.8055C19.1976 24.8055 21.0975 24.0308 22.6468 22.4815C24.1962 20.9322 24.9708 19.0322 24.9708 16.7816C24.9708 14.5311 24.1962 12.6311 22.6468 11.0818C21.0975 9.53246 19.1976 8.7578 16.947 8.7578C14.6964 8.7578 12.7965 9.53246 11.2471 11.0818C9.69784 12.6311 8.92319 14.5311 8.92319 16.7816C8.92319 19.0322 9.69784 20.9322 11.2471 22.4815C12.7965 24.0308 14.6964 24.8055 16.947 24.8055Z"
                fill="white"
              />
            </g>
          </svg>
        </div>
        <div className="rounded-[33.92px] border-solid border-white border-[1.7px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[130.6px]">
          <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
            Стажировка{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-white border-[1.7px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[203.53px]">
          <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
            Курсы{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-white border-[1.7px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[276.46px]">
          <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
            Товары{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-white border-[1.7px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[349.4px]">
          <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
            Услуги{" "}
          </div>
        </div>
        <div className="rounded-[33.92px] border-solid border-white border-[1.7px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[25.44px] top-[422.33px]">
          <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
            Промокоды{" "}
          </div>
        </div>
      </div>
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
