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
        "bg-[#ffffff] w-[1280px] h-[588px] relative overflow-hidden "
      }
    >
        <form action="/dashboard/ZAD2di2">
            <button className="rounded-[20px] border-solid border-[#000000] border pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-center absolute left-[45px] top-[528px]">
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
                    id="mask0_419_52"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                >
                    <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_419_52)">
                    <path
                    d="M10.5885 12.5H15C15.1417 12.5 15.2604 12.452 15.3562 12.3561C15.4521 12.2601 15.5 12.1412 15.5 11.9993C15.5 11.8575 15.4521 11.7388 15.3562 11.6433C15.2604 11.5478 15.1417 11.5 15 11.5H10.5885L12.3539 9.73463C12.4474 9.64531 12.4942 9.53163 12.4942 9.3936C12.4942 9.25555 12.4474 9.13973 12.3539 9.04615C12.2603 8.95257 12.1445 8.90578 12.0064 8.90578C11.8684 8.90578 11.7547 8.95257 11.6654 9.04615L9.27693 11.4346C9.11538 11.5962 9.0346 11.7846 9.0346 12C9.0346 12.2154 9.11538 12.4038 9.27693 12.5654L11.6654 14.9538C11.759 15.0474 11.8737 15.091 12.0096 15.0846C12.1455 15.0782 12.2603 15.0282 12.3539 14.9346C12.4474 14.841 12.4942 14.7252 12.4942 14.5872C12.4942 14.4491 12.4474 14.3355 12.3539 14.2462L10.5885 12.5ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
                    fill="#1C1B1F"
                    />
                </g>
                </svg>

                <div className="text-[#000000] text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
                Назад{" "}
                </div>
            </button>
        </form>
      
      <div className="bg-foundation-black-black-13 rounded-[20px] pt-2.5 pr-5 pb-2.5 pl-5 flex flex-row gap-2.5 items-center justify-center absolute left-[180px] top-[528px]">
        <div className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex items-center justify-start">
          Отправить{" "}
        </div>
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
            id="mask0_419_61"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_419_61)">
            <path
              d="M13.4115 12.5L11.6462 14.2654C11.5526 14.359 11.509 14.4705 11.5154 14.6C11.5218 14.7295 11.5718 14.841 11.6654 14.9346C11.759 15.0282 11.8748 15.075 12.0128 15.075C12.1509 15.075 12.2645 15.0282 12.3539 14.9346L14.7231 12.5654C14.8846 12.4038 14.9654 12.2154 14.9654 12C14.9654 11.7846 14.8846 11.5962 14.7231 11.4346L12.3346 9.04615C12.241 8.95257 12.1295 8.90578 12 8.90578C11.8705 8.90578 11.759 8.95257 11.6654 9.04615C11.5718 9.13973 11.525 9.25555 11.525 9.3936C11.525 9.53163 11.5718 9.64531 11.6654 9.73463L13.4115 11.5H9C8.85833 11.5 8.73958 11.548 8.64375 11.644C8.54792 11.7399 8.5 11.8588 8.5 12.0007C8.5 12.1425 8.54792 12.2612 8.64375 12.3567C8.73958 12.4522 8.85833 12.5 9 12.5H13.4115ZM12.0034 21C10.7588 21 9.58872 20.7638 8.4931 20.2915C7.39748 19.8192 6.44444 19.1782 5.63397 18.3685C4.82352 17.5588 4.18192 16.6066 3.70915 15.512C3.23638 14.4174 3 13.2479 3 12.0034C3 10.7588 3.23616 9.58872 3.70848 8.4931C4.18081 7.39748 4.82183 6.44444 5.63153 5.63398C6.44123 4.82353 7.39337 4.18192 8.48795 3.70915C9.58255 3.23638 10.7521 3 11.9966 3C13.2412 3 14.4113 3.23616 15.5069 3.70847C16.6025 4.18081 17.5556 4.82182 18.366 5.63152C19.1765 6.44122 19.8181 7.39337 20.2908 8.48795C20.7636 9.58255 21 10.7521 21 11.9966C21 13.2412 20.7638 14.4113 20.2915 15.5069C19.8192 16.6025 19.1782 17.5556 18.3685 18.366C17.5588 19.1765 16.6066 19.8181 15.512 20.2909C14.4174 20.7636 13.2479 21 12.0034 21ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className="flex flex-col gap-4 items-start justify-start absolute left-10 top-4">
        <div className="text-[#000000] text-left font-desktoppre-font-family text-desktoppre-font-size font-desktoppre-font-weight uppercase relative flex items-center justify-start">
          01/ Eget molestie eget dictum accumsan urna mattis cursus id eleifend
          pellentesque lacinia.{" "}
        </div>
        <div className="bg-white rounded-[20px] border-solid border-foundation-black-black-6 border pt-2.5 pr-4 pb-2.5 pl-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[260px] relative">
          <div className="text-foundation-black-black-6 text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex-1 flex items-center justify-start">
            Placeholder{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start justify-start absolute left-10 top-[111px]">
        <div className="text-[#000000] text-left font-desktoppre-font-family text-desktoppre-font-size font-desktoppre-font-weight uppercase relative flex items-center justify-start">
          02/ Justo sed nunc elit. Non non sed arcu ultricies. Leo, arcu cursus
          id elit. Nulla nis.{" "}
        </div>
        <div className="bg-white rounded-[20px] border-solid border-foundation-black-black-6 border pt-2.5 pr-4 pb-2.5 pl-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[260px] relative">
          <div className="text-foundation-black-black-6 text-left font-buttonmedium-font-family text-buttonmedium-font-size font-buttonmedium-font-weight relative flex-1 flex items-center justify-start">
            Placeholder{" "}
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
