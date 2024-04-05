import type { NextPage } from "next";
import Head from "next/head";
import SideBar from "../components/side-bar";
import CustomerDash from "../components/customer-dash";

const CustomersPage: NextPage = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-row items-start justify-start gap-[0.4px] tracking-[normal] mq1050:pl-[0.39999999999997726px] mq1050:pr-[0.39999999999997726px] mq1050:box-border">
      <SideBar />
      <CustomerDash />
    </div>
  );
};

export default CustomersPage;
