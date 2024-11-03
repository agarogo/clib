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
        "bg-[#ffffff] w-[2171px] h-[1000.19px] relative overflow-hidden " 
      }
    >
      <div className="bg-[#F5F5F5] rounded-[33.92px] w-[651.3px] h-[271.38px] absolute left-[67.84px] top-[681.97px] overflow-hidden">
        <div className="bg-[#B328F6] rounded-[33.92px] pt-[16.96px] pr-[33.92px] pb-[16.96px] pl-[33.92px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[430.45px] top-[149.26px]">
          <form action="/dashboard/mag">
            <button className="text-white text-left font-buttonmedium-font-family text-buttonmedium-font-size text-2xl relative flex items-center justify-start">
                Оплатить{" "}
            </button>
          </form>
          
        </div>
        <div className="text-[#000000] text-left font-['Inter-SemiBold',_sans-serif] text-[27.137500762939453px] font-semibold uppercase absolute left-[42.4px] top-[66.15px] flex items-center justify-start">
          Итого{" "}
        </div>
        <div className="bg-[#F578C5] rounded-[33.92px] pt-[6.78px] pr-[20.35px] pb-[6.78px] pl-[20.35px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[463.03px] top-[59.36px]">
          <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium relative flex items-center justify-start">
            5 000 A{" "}
          </div>
        </div>
      </div>
      <div className="text-[#000000] text-left font-['Inter-SemiBold',_sans-serif] text-[47.49062728881836px] font-semibold absolute left-[67.84px] top-[50.39px] w-[612.29px] flex items-center justify-start">
        Промокод на скидку 40% на годовой курс по UX/UI{" "}
      </div>
      <div className="bg-[#B328F6] rounded-[33.92px] pt-[6.78px] pr-[20.35px] pb-[6.78px] pl-[20.35px] flex flex-row gap-[16.96px] items-center justify-center absolute left-[67.84px] top-[200.17px]">
        <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium relative flex items-center justify-start">
          5 000 A{" "}
        </div>
      </div>
      <div className="text-[#000000] text-left font-['Inter-Medium',_sans-serif] text-[27.137500762939453px] font-medium absolute left-[67.84px] top-[280.89px] w-[997.3px] flex items-center justify-start">
        Наш годовой курс по UX/UI дизайну предлагает глубокое погружение в мир
        пользовательского опыта и интерфейсного дизайна. Вы освоите основы
        теории UX и UI, изучив передовые методики и лучшие практики от ведущих
        специалистов отрасли. На протяжении года вы разработаете навыки создания
        эффективных и привлекательных пользовательских интерфейсов, а также
        проведете практические проекты, набираясь опыта под руководством
        профессионалов. Гарантируется глубокое понимание процесса проектирования
        UX/UI дизайна и подготовка к карьере в этой захватывающей сфере
        технологий.{" "}
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
