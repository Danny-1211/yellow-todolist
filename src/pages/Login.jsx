import loginBanner from "../assets/images/login.png";
import logo from "../assets/images/logo.svg";
function Login() {
  return (
    <div className="w-full h-screen bg-[#FFD370] flex justify-center items-center">
      <main className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-26.5">
        <section className="images">
          <img src={logo} alt="Logo" className=" w-78.25 h-11.75 object-contain lg:hidden" />
          <img src={loginBanner} alt="banner" className="hidden lg:block" />
        </section>
        <section className="inputs flex flex-col items-center justify-center gap-8 lg:gap-6">
          <div className="inputs-title">
            <p className="text-[20px] font-bold text-[#333333]">最實用的線上代辦事項服務</p>
          </div>
          <div className="inputs-group flex flex-col items-between justify-center gap-4">
            <div className="input-email flex flex-col justify-start items-start gap-1">
              <label>Email</label>
              <input className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]" type="email" placeholder="請輸入Email" required></input>
              <span className="text-[14px] font-bold text-[#D87355]">此欄位不可為空</span>
            </div>
            <div className="input-password flex flex-col justify-start items-start gap-1">
              <label>密碼</label>
              <input className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]" type="password" placeholder="請輸入密碼" required/>
              <span className="text-[14px] font-bold text-[#D87355]">此欄位不可為空</span>
            </div>
          </div>
          <div className="inputs-btn flex flex-col gap-6">
            <button  className="bg-[#333333] py-2 px-12 border-[#333333] rounded-[10px]" type="button">
              <p className="text-[#FFFFFF] font-bold">登入</p>
            </button>
            <button type="button">
              <p className="text-[#333333] font-bold">註冊帳號</p>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
