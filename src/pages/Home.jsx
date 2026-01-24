import { useState } from "react";
import logo from "../assets/images/logo.svg";
import add from "../assets/images/add.svg";
import checked from "../assets/images/check.svg";
import close from "../assets/images/close.svg";
const fakeData = [
  {
    id: "123456789",
    content: "把冰箱發霉的檸檬拿去丟",
    status: false,
  },
  {
    id: "123123123",
    content: "打電話叫媽媽匯款給我",
    status: true,
  },
  {
    id: "546453413",
    content: "整理電腦資料夾",
    status: false,
  },
  {
    id: "653265214",
    content: "繳電費水費瓦斯費",
    status: true,
  },
  {
    id: "741236598",
    content: "約vicky禮拜三泡溫泉",
    status: false,
  },
  {
    id: "985698214",
    content: "約ada禮拜四吃晚餐",
    status: false,
  },
];

const tabs = [
  { id: "all", label: "全部" },
  { id: "active", label: "待完成" },
  { id: "completed", label: "已完成" },
];

function Home() {
  const [tab, setTab] = useState("all");

  const unfinishItemsCount = fakeData.filter(item =>{
    return item.status == false
  }).length

  return (
    <div className="w-full h-screen bg-[#FFD370] lg:bg-[linear-gradient(172.7deg,#FFD370_5.12%,#FFD370_53.33%,#FFD370_53.44%,#FFFFFF_53.45%,#FFFFFF_94.32%)]">
      <nav className="flex items-center justify-between w-full pt-4 mx-auto max-w-78 lg:max-w-240">
        <img src={logo} alt="logo" />
        <div className="flex items-center justify-center items gap-10.25 lg:gap-6">
          <p className="hidden text-[#333333] font-bold lg:block">
            {localStorage.getItem("nickName")}
          </p>
          <a href="#">
            <p className="font-normal text-[#333333]">登出</p>
          </a>
        </div>
      </nav>
      <main className="flex flex-col items-center justify-center gap-4 w-full mx-auto  max-w-78 lg:max-w-125 mt-4.25 lg:mt-10">
        <section className="flex items-center justify-center w-full mx-auto max-w-78 lg:max-w-240">
          <div className="flex items-center justify-center w-full max-w-125 bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] p-1 ">
            <input
              type="text"
              className="px-4 py-3 bg-transparent grow focus:outline-none"
              placeholder="新增待辦事項"
            />
            <button className="bg-[#333333] w-10 h-10 py-[9.8px] px-2.5 rounded-[10px] flex items-center justify-center cursor-pointer">
              <img className="w-5 h-5" src={add} alt="add" />
            </button>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start w-full bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] max-w-78 lg:max-w-125 ">
          <div className="filter-btns w-full flex   text-center max-w-78 lg:max-w-125">
            {tabs.map((item) => (
              <button
                key={item.id}
                onClick={() => setTab(item.id)}
                className={`flex-1 py-4 text-sm font-bold transition-colors cursor-pointer ${
                  tab === item.id
                    ? "text-[#333333] border-b-2 border-[#333333]"
                    : "text-[#9F9A91] border-b-2 border-[#9F9A91]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="list  w-full px-4 pb-4 flex flex-col items-center justify-center gap-4">
            {fakeData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="group flex items-center justify-between w-full transition-colors  border-b border-[#E5E5E5] hover:bg-[#FAFAFA] lg:border-0"
                >
                  <div className="group  flex  py-4 w-full lg:border-b lg:border-[#E5E5E5]">
                    <div className="item-content flex gap-4">
                      {item.status ? (
                        <img src={checked} alt="checked" />
                      ) : (
                        <div className="w-5 h-5 bg-[#FFFFFF] border border-[#9F9A91] rounded-[5px]"></div>
                      )}
                      <label htmlFor="check-1" className={`${item.status ? "line-through text-[#9F9A91]": ""}`}>{item.content}</label>
                    </div>
                  </div>
                  <div
                    className="item-close cursor-pointer opacity-100 
                    lg:opacity-0 
                    lg:group-hover:opacity-100 
                    transition-opacity duration-200"
                  >
                    <img src={close} alt="close" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="unfinish-count w-full px-4 pb-4 font-normal text-[#333333] text-[14px]">
            <p>{`${unfinishItemsCount} 個待完成項目`}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
