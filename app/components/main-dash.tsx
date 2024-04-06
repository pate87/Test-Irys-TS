"use client";

import type { NextPage } from "next";
import Link from "next/link";
import WalletConnectionComponent from "./WalletConnectionComponent";
import { Button } from "@/components/ui/button";

const MainDash: NextPage = () => {
  return (
    <main className="flex-1 flex flex-col items-start justify-start max-w-[calc(100%_-_262px)] mq950:max-w-full">
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-mid-3 text-midnightblue font-poppins">
        <div className="flex-1 flex flex-col items-start justify-start pt-[26px] pb-[34.6px] pr-[26.4px] pl-[33.6px] box-border relative gap-[38.9px] max-w-full mq450:pt-5 mq450:pb-[22px] mq450:box-border mq700:gap-[19px_38.9px]">
          <img
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[20.48px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/card-shape.svg"
          />
          <div className="flex flex-row items-start justify-start py-0 pr-[25px] pl-[24.9px]">
            <b className="relative inline-block min-w-[125px] z-[1]">
              <WalletConnectionComponent />
            </b>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[13px] max-w-full text-lgi-5 font-inter mq975:flex-wrap">
            <div className="w-[449.3px] flex flex-col items-start justify-start gap-[19.6px] min-w-[449.2999999999999px] max-w-full mq700:min-w-full mq975:flex-1">
              <div className="self-stretch flex flex-row items-start justify-start gap-[14.1px] mq450:flex-wrap">
                <div className="flex-1 rounded-[21.65px] [background:linear-gradient(180deg,_rgba(59,_52,_187,_0.6),_rgba(39,_172,_255,_0.06))] overflow-hidden flex flex-col items-start justify-start pt-[8.9px] pb-3.5 pr-[16.2px] pl-[17.3px] box-border gap-[25.2px] min-w-[201px] z-[1]">
                  <div className="w-4 h-4 hidden" />
                  <b className="w-[93.4px] h-[12.5px] relative inline-block shrink-0">
                    <p className="m-0">Members</p>
                  </b>
                  <div className="self-stretch h-[81.2px] flex flex-col items-start justify-start gap-[13px] text-4xl-8">
                    <div className="w-[163.5px] flex-1 flex flex-row items-start justify-start py-0 pr-px pl-[1.1px] box-border">
                      <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[8.6px]">
                        <img
                          className="h-[46.6px] w-[46.6px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/trendingcontentstreamlineflex.svg"
                        />
                        <div className="flex-1 flex flex-row items-start justify-start">
                          <div className="h-[42.2px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[0.1px]">
                            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[0.2px] shrink-0 [debug_commit:f6aba90]">
                              <div className="relative font-semibold inline-block min-w-[65px] mq450:text-lgi">
                                2,041
                              </div>
                            </div>
                            <div className="relative text-2xs-8 font-medium text-steelblue-100 inline-block min-w-[75px] shrink-0 [debug_commit:f6aba90]">
                              New Members
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[21.6px] flex flex-col items-start justify-start gap-[4.3px] text-2xs-8 text-red">
                      <div className="self-stretch h-[1.1px] relative box-border border-t-[1.1px] border-solid border-dimgray" />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-4 pl-[16.2px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[7.6px]">
                          <img
                            className="h-[16.2px] w-[16.2px] relative overflow-hidden shrink-0 object-contain [debug_commit:f6aba90]"
                            loading="lazy"
                            alt=""
                            src="/arrowup-2.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0">
                            <div className="relative inline-block min-w-[72.5px] shrink-0 [debug_commit:f6aba90]">
                              <b>
                                <span>1%</span>
                                <span className="text-steelblue-200">{` `}</span>
                              </b>
                              <span className="font-medium text-steelblue-100">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-[21.65px] [background:linear-gradient(180deg,_rgba(59,_52,_187,_0.6),_rgba(39,_172,_255,_0.06))] overflow-hidden flex flex-col items-start justify-start pt-[8.7px] pb-3.5 pr-[16.2px] pl-[17.3px] box-border gap-[22.7px] min-w-[201px] z-[1]">
                  <div className="w-4 h-4 hidden" />
                  <div className="w-[121.3px] flex flex-row items-start justify-start py-0 pr-px pl-[1.1px] box-border">
                    <b className="h-[13px] flex-1 relative inline-block">
                      <p className="m-0">Customers</p>
                    </b>
                  </div>
                  <div className="self-stretch h-[83.4px] flex flex-col items-start justify-start gap-[13.1px] text-4xl-8">
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-[1.1px]">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[8.6px]">
                        <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-[2.1px]">
                          <img
                            className="w-[46.6px] h-[46.6px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/usercirclesinglestreamlineflex.svg"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-start">
                          <div className="h-[42.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[0.1px]">
                            <div className="flex flex-row items-start justify-start pt-0 pb-[0.2px] pr-[39px] pl-0 shrink-0 [debug_commit:f6aba90]">
                              <div className="relative font-semibold inline-block min-w-[68px] whitespace-nowrap mq450:text-lgi">
                                5,238
                              </div>
                            </div>
                            <div className="relative text-2xs-8 font-medium text-steelblue-100 inline-block min-w-[86px] shrink-0 [debug_commit:f6aba90]">
                              Total Customers
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[21.6px] flex flex-col items-start justify-start gap-[4.3px] text-2xs-8 text-forestgreen">
                      <div className="self-stretch h-[1.1px] relative box-border border-t-[1.1px] border-solid border-dimgray" />
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-4 pl-[16.2px]">
                        <div className="self-stretch flex flex-row items-start justify-start gap-[7.7px]">
                          <img
                            className="h-[16.2px] w-[16.2px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                            loading="lazy"
                            alt=""
                            src="/arrowup-2-1.svg"
                          />
                          <div className="flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0">
                            <div className="relative inline-block min-w-[85.5px] shrink-0 [debug_commit:f6aba90]">
                              <b>
                                <span>25%</span>
                                <span className="text-darkgray">{` `}</span>
                              </b>
                              <span className="font-medium text-steelblue-100">
                                this month
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[13px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0 box-border min-w-[142px]">
                  <div className="self-stretch h-[141.8px] rounded-[21.65px] [background:linear-gradient(180deg,_rgba(59,_52,_187,_0.6),_rgba(39,_172,_255,_0.06))] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[8.8px] pb-[14.1px] pr-[16.2px] pl-[17.3px] box-border gap-[25.2px] z-[1]">
                    <div className="w-4 h-4 hidden" />
                    <b className="w-[93.4px] h-[12.5px] relative inline-block shrink-0">
                      Uploads
                    </b>
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[13px] text-4xl-8">
                      <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[7px] pl-[1.1px]">
                        <div className="self-stretch flex flex-row items-end justify-start gap-[8.6px]">
                          <img
                            className="h-[46.6px] w-[46.6px] relative overflow-hidden shrink-0"
                            loading="lazy"
                            alt=""
                            src="/trendingcontentstreamlineflex-1.svg"
                          />
                          <div className="flex flex-row items-start justify-start">
                            <div className="h-[42.2px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border gap-[0.1px]">
                              <div className="flex flex-row items-start justify-start pt-0 pb-[0.2px] pr-6 pl-0 shrink-0 [debug_commit:f6aba90]">
                                <div className="relative font-semibold inline-block min-w-[83px] whitespace-nowrap mq450:text-lgi">
                                  50,862
                                </div>
                              </div>
                              <div className="relative text-2xs-8 font-medium text-steelblue-100 inline-block min-w-[121px] shrink-0 [debug_commit:f6aba90]">
                                Uploads in last 30 days
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch h-[21.6px] flex flex-col items-start justify-start gap-[4.3px] text-2xs-8 text-forestgreen">
                        <div className="self-stretch h-[1.1px] relative box-border border-t-[1.1px] border-solid border-dimgray" />
                        <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[15px] pl-[15.1px]">
                          <div className="self-stretch flex flex-row items-start justify-start gap-[8.7px]">
                            <img
                              className="h-[16.2px] w-[16.2px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                              loading="lazy"
                              alt=""
                              src="/arrowup-3.svg"
                            />
                            <div className="flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0">
                              <div className="relative inline-block min-w-[85.5px] shrink-0 [debug_commit:f6aba90]">
                                <b>
                                  <span>30%</span>
                                  <span className="text-darkgray">{` `}</span>
                                </b>
                                <span className="font-medium text-steelblue-100">
                                  this month
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-[0.846] rounded-[21.65px] [background:linear-gradient(180deg,_rgba(59,_52,_187,_0.6),_rgba(39,_172,_255,_0.06))] overflow-hidden flex flex-col items-start justify-start pt-[8.6px] pb-[14.1px] pr-[16.2px] pl-[17.3px] box-border gap-[13px] min-w-[142px] z-[1] mq450:flex-1">
                  <div className="w-4 h-4 hidden" />
                  <div className="w-[163.5px] flex flex-row items-start justify-start pt-0 pb-[5.4px] pr-px pl-[1.1px] box-border">
                    <b className="h-[13px] flex-1 relative inline-block">
                      Encrypted Files
                    </b>
                  </div>
                  <div className="w-[163.5px] h-[53.1px] flex flex-row items-start justify-start py-0 pr-px pl-[1.1px] box-border text-4xl-8">
                    <div className="self-stretch flex-1 flex flex-row items-end justify-start gap-[8.6px]">
                      <div className="self-stretch flex flex-col items-start justify-end pt-0 px-0 pb-[6.5px]">
                        <img
                          className="w-[46.6px] h-[46.6px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lockrotationstreamlineflex.svg"
                        />
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-start">
                        <div className="h-[42.2px] flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border">
                          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[0.2px] shrink-0 [debug_commit:f6aba90]">
                            <div className="relative font-semibold inline-block min-w-[64px] mq450:text-lgi">
                              8,091
                            </div>
                          </div>
                          <div className="relative text-2xs-8 font-medium text-steelblue-100 inline-block min-w-[80px] shrink-0 [debug_commit:f6aba90]">
                            Files encrypted
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-[21.6px] flex flex-col items-start justify-start gap-[4.3px] text-2xs-8 text-forestgreen">
                    <div className="self-stretch h-[1.1px] relative box-border border-t-[1.1px] border-solid border-dimgray" />
                    <div className="flex-1 flex flex-row items-start justify-start py-0 pr-4 pl-[16.2px]">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[7.7px]">
                        <img
                          className="h-[16.2px] w-[16.2px] relative overflow-hidden shrink-0 [debug_commit:f6aba90]"
                          loading="lazy"
                          alt=""
                          src="/arrowup-2-1.svg"
                        />
                        <div className="flex flex-col items-start justify-start pt-[2.2px] px-0 pb-0">
                          <div className="relative inline-block min-w-[85.5px] shrink-0 [debug_commit:f6aba90]">
                            <b>
                              <span>40%</span>
                              <span className="text-darkgray">{` `}</span>
                            </b>
                            <span className="font-medium text-steelblue-100">
                              this month
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-[20.85px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0))] overflow-hidden flex flex-col items-start justify-start pt-[16.7px] px-[20.2px] pb-[22.9px] box-border relative gap-[22.6px] min-w-[426px] max-w-full z-[1] text-lg-8 text-fuchsia mq700:min-w-full">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[20.85px] [backdrop-filter:blur(145.95px)] box-border border-[2.1px] border-solid border-gray-400" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[8.3px] px-0 pb-0">
                  <b className="relative z-[1]">Market Overview</b>
                </div>
                <div className="rounded-[10.43px] bg-gray-300 flex flex-row items-start justify-start pt-[10.4px] pb-[10.5px] pr-[10.3px] pl-[10.5px] gap-[15.6px] z-[1] text-mini-6">
                  <b className="relative inline-block min-w-[59px]">Monthly</b>
                  <div className="h-[13.1px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                    <img
                      className="w-[13.6px] h-[8.1px] relative overflow-hidden shrink-0"
                      alt=""
                      src="/arrow--down-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-0 h-[197px] absolute !m-[0] right-[315.9px] bottom-[41.7px] z-[2] flex items-center justify-center">
                <img
                  className="w-full h-full z-[2] object-contain absolute left-[0px] top-[0px] [transform:scale(Infinity)]"
                  alt=""
                  src="/font-family-finder.svg"
                />
              </div>
              <div className="self-stretch h-[200.2px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-0 px-0 pb-[2.1px] box-border gap-[12.2px] max-w-full z-[1] text-2xs-4 text-gray-100">
                <div className="mb-[-5px] flex flex-col items-start justify-start gap-[25px] shrink-0 [debug_commit:f6aba90]">
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                    <b className="relative inline-block min-w-[20px]">50k</b>
                  </div>
                  <b className="relative inline-block min-w-[21px]">40k</b>
                  <b className="relative inline-block min-w-[21px]">30k</b>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                    <b className="relative inline-block min-w-[20px]">20k</b>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                    <b className="relative inline-block min-w-[19px]">10k</b>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[7px] text-right">
                    <b className="w-3.5 relative inline-block min-w-[14px]">
                      0k
                    </b>
                  </div>
                </div>
                <img
                  className="h-[192.9px] flex-1 relative max-w-full overflow-hidden shrink-0 [debug_commit:f6aba90]"
                  alt=""
                  src="/graph.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-0 box-border max-w-full text-left text-22xl-1 text-deepskyblue font-poppins">
        <div className="flex-1 rounded-[16.44px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] shadow-[0px_3.5px_3.46px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(51.91px)] box-border overflow-hidden flex flex-col items-center justify-start pt-[151px] px-5 pb-[190px] gap-[39px] max-w-full border-[1.3px] border-solid border-gray-400 mq450:gap-[19px_39px] mq700:pt-[98px] mq700:pb-[123px] mq700:box-border">
          <div className="w-[771px] flex flex-row items-start justify-center max-w-full">
            <div className="overflow-hidden flex flex-row items-start justify-start p-[18px] box-border gap-[10px] max-w-full mq450:flex-wrap">
              <img
                className="h-[62px] w-[63.6px] relative object-cover min-h-[62px]"
                loading="lazy"
                alt=""
                src="/-97f6ac56445a4414801aede1a221e412-1@2x.png"
              />

              <div className="flex flex-row items-start justify-start gap-[9.2px]">
                <div className="relative tracking-[0.01em] font-semibold shrink-0 [debug_commit:f6aba90] mq450:text-6xl mq950:text-14xl">
                  ChainBase
                </div>
                <div className="flex flex-col items-start justify-start pt-[28.5px] px-0 pb-0 text-base-8">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[32px] shrink-0 [debug_commit:f6aba90]">
                    Hub
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h1 className="m-0 relative text-5xl font-bold font-inherit text-white inline-block max-w-full mq450:text-lgi">
            Catalyzing SaaS innovation with decentralized data integrity...
          </h1>
          <div className="w-[771px] flex flex-row items-start justify-center max-w-full">
            {/* <button className="cursor-pointer [border:none] py-[9px] px-3.5 bg-mediumblue rounded-xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap hover:bg-blueviolet"> */}
            {/* <div className="w-28 relative text-sm tracking-[0.01em] font-semibold font-poppins text-azure text-center inline-block min-w-[112px]"> */}
            {/* <Button onClick={WalletConnect}>Connect Wallet</Button> */}
            {/* </div> */}
            {/* </button> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainDash;
