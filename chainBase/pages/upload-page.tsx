import type { NextPage } from "next";
import Link from "next/link";
import UploadDash from "../components/upload-dash";

const UploadPage: NextPage = () => {
  return (
    <div className="w-full relative bg-midnightblue overflow-hidden flex flex-row items-start justify-start gap-[0.4px] tracking-[normal] text-left text-3xl-2 text-deepskyblue font-poppins mq950:pl-[0.39999999999997726px] mq950:pr-[0.39999999999997726px] mq950:box-border">
      <div className="h-[1024px] w-[261.6px] flex flex-col items-start justify-start pt-[40.2px] pb-[30.8px] pr-[23.2px] pl-[23.9px] box-border relative gap-[112.8px] mq450:gap-[56px_112.8px] mq450:pt-5 mq450:box-border mq950:hidden mq950:pt-[26px] mq950:pb-5 mq950:box-border">
        <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[16.24px] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] [backdrop-filter:blur(51.29px)] box-border border-[1.3px] border-solid border-gray-400" />
        <img
          className="w-[30.7px] h-[29.9px] absolute !m-[0] top-[41px] left-[27.4px] object-cover z-[2]"
          loading="lazy"
          alt=""
          src="/-97f6ac56445a4414801aede1a221e412-1@2x.png"
        />
        <div className="self-stretch flex-1 flex flex-col items-start justify-start pt-[61.5px] px-0 pb-[61px] relative mq700:pt-10 mq700:pb-10 mq700:box-border">
          <div className="w-full h-full !m-[0] absolute top-[0px] bottom-[0px] left-[0px] [backdrop-filter:blur(3.42px)] flex flex-col items-end justify-start gap-[639.7px] z-[1]">
            <div className="flex flex-row items-start justify-end py-0 pr-[27.3px] pl-[27px]">
              <div className="flex flex-row items-start justify-start gap-[4.9px] shrink-0 [debug_commit:f6aba90]">
                <div className="relative tracking-[0.01em] font-semibold inline-block min-w-[125px] mq450:text-lg">
                  ChainBase
                </div>
                <div className="flex flex-col items-start justify-start pt-[15.4px] px-0 pb-0 text-4xs-5">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[18px]">
                    Hub
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-[22.2px] pb-[22px] pr-[28.2px] pl-[29.1px] relative shrink-0 [debug_commit:f6aba90] text-center text-xs-1 text-azure">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mid-1 [background:linear-gradient(270deg,_#1b1769,_#fc49f5)]" />
              <div className="flex-1 relative tracking-[0.01em] font-semibold z-[1]">
                Upgrade to PRO to get access to all of ChainBase!
              </div>
              <div className="rounded-mid-1 bg-mediumblue shadow-[1.7px_3.4px_3.42px_rgba(79,_42,_234,_0.17)] hidden flex-row items-center justify-center py-[7.7px] px-[11px] whitespace-nowrap z-[2] text-xs">
                <div className="h-[18px] relative tracking-[0.01em] font-semibold inline-block">
                  Get ChainBase Pro Now!
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-[7.7px] px-[11px] bg-mediumblue !m-[0] absolute right-[19.4px] bottom-[19.6px] rounded-mid-1 overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[2]">
              <div className="w-[150px] relative text-xs tracking-[0.01em] font-semibold font-poppins text-azure text-center inline-block">
                Get ChainBase Pro Now!
              </div>
            </button>
          </div>
          <div className="self-stretch h-[372.7px] overflow-hidden shrink-0 flex flex-col items-start justify-start pt-[15.4px] pb-[15px] pr-px pl-0 box-border gap-[11.8px] z-[2] text-xs">
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch h-[39.3px] rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-center justify-between pt-[7.2px] pb-[7.3px] pr-[11px] pl-1.5 box-border gap-[20px] text-[inherit]"
              href="/"
            >
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[3.5px] pb-[3.3px] pr-[3px] pl-[3.4px] gap-[11.1px]">
                <img
                  className="h-[16.6px] w-[18.6px] relative"
                  loading="lazy"
                  alt=""
                  src="/home2doorentrancehomehouseroofroundshelter.svg"
                />
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[67px]">
                    Dashboard
                  </div>
                </div>
              </div>
              <img
                className="h-[13.7px] w-[13.7px] relative overflow-hidden shrink-0"
                alt=""
                src="/chevronright-3.svg"
              />
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch h-[39.3px] rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[10.7px] pb-[10.6px] pr-3 pl-[9.4px] box-border gap-[20px] text-[inherit]"
              href="/upload-page"
            >
              <div className="self-stretch flex flex-row items-start justify-start gap-[11.1px]">
                <img
                  className="h-[17.9px] w-[18.2px] relative min-h-[18px] shrink-0 [debug_commit:f6aba90]"
                  loading="lazy"
                  alt=""
                  src="/uploadbox1arrowboxdownloadinternetnetworkserverupupload.svg"
                />
                <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[43px] shrink-0 [debug_commit:f6aba90]">
                  Upload
                </div>
              </div>
              <div className="h-[15.8px] flex flex-col items-start justify-start pt-[2.1px] px-0 pb-0 box-border">
                <img
                  className="w-[13.7px] h-[13.7px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronright-3-1.svg"
                />
              </div>
            </Link>
            <Link
              className="cursor-pointer [text-decoration:none] self-stretch h-[39.3px] flex flex-row items-start justify-start text-[inherit]"
              href="/customers-page"
            >
              <div className="self-stretch flex-1 rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-center justify-between py-0 pr-3 pl-[1.7px] gap-[20px]">
                <div className="self-stretch overflow-hidden flex flex-row items-center justify-start py-[10.3px] pr-[5.9px] pl-1.5 gap-[12.8px]">
                  <img
                    className="h-[19px] w-[19px] relative min-h-[19px]"
                    loading="lazy"
                    alt=""
                    src="/usercirclesinglecirclegeometrichumanpersonsingleuser.svg"
                  />
                  <div className="flex flex-row items-start justify-start">
                    <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[66px]">
                      Customers
                    </div>
                  </div>
                </div>
                <img
                  className="h-[13.7px] w-[13.7px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronright-3-2.svg"
                />
              </div>
            </Link>
            <div className="self-stretch h-[39.3px] rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7.3px] pb-[7.2px] pr-[11px] pl-[4.3px] box-border gap-[20px] text-4xs-5">
              <div className="self-stretch overflow-hidden flex flex-row items-start justify-start pt-[3px] pb-[3.4px] pr-[0.9px] pl-[4.3px] gap-[11.1px]">
                <img
                  className="h-[17.7px] w-[18.5px] relative"
                  loading="lazy"
                  alt=""
                  src="/lockrotation.svg"
                />
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.01em] font-medium inline-block min-w-[47px]">
                    <span>{` `}</span>
                    <span className="text-xs">Encrypt</span>
                  </div>
                </div>
              </div>
              <div className="h-[19.2px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                <img
                  className="w-[13.7px] h-[13.7px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronright-3-3.svg"
                />
              </div>
            </div>
            <div className="self-stretch h-[39.3px] rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden shrink-0 flex flex-row items-start justify-between pt-[7.3px] pb-[7.2px] pr-[13px] pl-[1.7px] box-border gap-[20px] text-4xs-5">
              <div className="self-stretch w-[118.8px] overflow-hidden shrink-0 flex flex-row items-end justify-start pt-[2.1px] px-[4.3px] pb-[2.2px] box-border gap-[8.3px]">
                <img
                  className="h-[20.5px] w-[20.5px] relative overflow-hidden shrink-0 min-h-[21px] [debug_commit:f6aba90]"
                  loading="lazy"
                  alt=""
                  src="/starbadgestreamlineflex.svg"
                />
                <div className="w-[108.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px] box-border">
                  <div className="self-stretch flex flex-row items-start justify-start shrink-0 [debug_commit:f6aba90]">
                    <div className="flex-1 relative tracking-[-0.01em] font-medium">
                      <span className="whitespace-pre-wrap">{`  `}</span>
                      <span className="text-xs">Memberships</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[19.2px] flex flex-col items-start justify-start pt-[5.5px] px-0 pb-0 box-border">
                <img
                  className="w-[13.7px] h-[13.7px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronright-3-4.svg"
                />
              </div>
            </div>
            <div className="self-stretch rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-end justify-between pt-[7.2px] pb-[7.3px] pr-[13px] pl-[1.7px] gap-[20px]">
              <div className="h-[24.8px] w-[81.8px] overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[3px] px-1.5 pb-[3.5px] box-border gap-[8.8px]">
                <img
                  className="h-[18.3px] w-[18.3px] relative"
                  loading="lazy"
                  alt=""
                  src="/helpchat1bubblehelpmarkmessagequeryquestionspeechsquare.svg"
                />
                <div className="flex flex-row items-start justify-start">
                  <div className="h-9 relative tracking-[-0.01em] font-medium inline-block">
                    <p className="m-0">
                      <span className="text-4xs-5 whitespace-pre-wrap">{`  `}</span>
                      <span>Help</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[19.2px] flex flex-col items-start justify-end pt-0 px-0 pb-[5.5px] box-border">
                <img
                  className="w-[13.7px] h-[13.7px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chevronright-3-5.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[120.6px] h-[39.3px] flex flex-row items-start justify-start py-0 px-1.5 box-border">
          <button className="cursor-pointer [border:none] p-[9.4px] bg-[transparent] self-stretch flex-1 rounded-[6.84px] shadow-[0px_3.4px_3.42px_rgba(0,_0,_0,_0.25)] overflow-hidden flex flex-row items-end justify-start gap-[12.9px] z-[1]">
            <img
              className="h-[20.5px] w-[20.5px] relative min-h-[21px]"
              loading="lazy"
              alt=""
              src="/logout1arrowexitframeleavelogoutrectangleright.svg"
            />
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[1.2px]">
              <div className="flex flex-row items-start justify-start">
                <div className="relative text-xs tracking-[-0.01em] font-medium font-poppins text-darkslategray-200 text-left inline-block min-w-[41px]">
                  Logout
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
      <UploadDash />
    </div>
  );
};

export default UploadPage;
