import logo from "../assets/images/logo.svg";
import add from "../assets/images/add.svg";
function Home() {
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
        <section className="flex flex-col items-center justify-center w-full bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] pt-18.5 px-4 pb-4 max-w-78 lg:max-w-125 lg:px-6 lg:pb-4">
        </section>
      </main>
    </div>
  );
}

export default Home;
