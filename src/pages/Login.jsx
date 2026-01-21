import { useState, useEffect } from "react";
import loginBanner from "../assets/images/login.png";
import logo from "../assets/images/logo.svg";
import { checkSignIn } from "../services/login";

function LoginField({
  setEmail,
  setPassword,
  email,
  password,
  handleLogin,
  showEmailInputError,
  showPasswordInputError,
}) {
  return (
    <section className="inputs flex flex-col items-center justify-center gap-8 lg:gap-6">
      <div className="inputs-title">
        <p className="text-xl font-bold text-[#333333] lg:text-2xl">
          最實用的線上代辦事項服務
        </p>
      </div>
      <div className="inputs-group flex flex-col items-between justify-center gap-4">
        <div className="input-email flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">Email</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="請輸入Email"
            required
          ></input>
          {showEmailInputError ? (
            <span className="text-[14px] font-bold text-[#D87355]">
              {showEmailInputError}
            </span>
          ) : null}
        </div>
        <div className="input-password flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">密碼</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="password"
            value={password}
            placeholder="請輸入密碼"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {showPasswordInputError ? (
            <span className="text-[14px] font-bold text-[#D87355]">
              {showPasswordInputError}
            </span>
          ) : null}
        </div>
      </div>
      <div className="inputs-btn flex flex-col gap-6">
        <button
          className="bg-[#333333] py-2 px-12 border-[#333333] rounded-[10px]"
          type="button"
          onClick={handleLogin}
        >
          <p className="text-[#FFFFFF] font-bold">登入</p>
        </button>
        <button type="button">
          <p className="text-[#333333] font-bold">註冊帳號</p>
        </button>
      </div>
    </section>
  );
}

function RegisterField() {
  return (
    <section className="inputs flex flex-col items-center justify-center gap-8 lg:gap-6">
      <div className="inputs-title">
        <p className="text-xl font-bold text-[#333333] lg:text-2xl">註冊帳號</p>
      </div>
      <div className="inputs-group flex flex-col items-between justify-center gap-4">
        <div className="input-email flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">Email</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="email"
            placeholder="請輸入Email"
            required
          ></input>
          <span className="text-[14px] font-bold text-[#D87355]">
            此欄位不可為空
          </span>
        </div>
        <div className="input-nickname flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">您的暱稱</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="text"
            placeholder="請輸入暱稱"
            required
          ></input>
          <span className="text-[14px] font-bold text-[#D87355]">
            此欄位不可為空
          </span>
        </div>
        <div className="input-password flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">密碼</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="password"
            placeholder="請輸入密碼"
            required
          />
          <span className="text-[14px] font-bold text-[#D87355]">
            此欄位不可為空
          </span>
        </div>
        <div className="input-password-ensure flex flex-col justify-start items-start gap-1">
          <label className="text-[14px] font-bold">再次輸入密碼</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="password"
            placeholder="請再次輸入密碼"
            required
          ></input>
          <span className="text-[14px] font-bold text-[#D87355]">
            此欄位不可為空
          </span>
        </div>
      </div>
      <div className="inputs-btn flex flex-col gap-6">
        <button
          className="bg-[#333333] py-2 px-12 border-[#333333] rounded-[10px]"
          type="button"
        >
          <p className="text-[#FFFFFF] font-bold">註冊帳號</p>
        </button>
        <button type="button">
          <p className="text-[#333333] font-bold">登入</p>
        </button>
      </div>
    </section>
  );
}

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [showEmailInputError, setShowEmailInputError] = useState("");
  const [showPasswordInputError, setShowPasswordInputError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    setShowEmailInputError("");
    setShowPasswordInputError("");

    let hasError = false;
    if (!email) {
      setShowEmailInputError("此欄位不可為空");
      hasError = true;
    }

    if (!password) {
      setShowPasswordInputError("此欄位不可為空");
      hasError = true;
    }

    if (hasError) return;

    try {
      const para = {
        email: email,
        password: password,
      };

      const res = await checkSignIn(para);
      console.log("res", res);

      if (res.status) {
        if (res.token) {
          localStorage.setItem("todoToken", res.token);
        }
      } else {
        setShowEmailInputError(res.message);
        setShowPasswordInputError(res.message);
      }
    } catch (err) {
      console.error("登入失敗:", err);
    }
  };

  return (
    <div className="w-full h-screen bg-[#FFD370] flex justify-center items-center">
      <main className="flex flex-col items-center justify-center gap-4 lg:flex-row lg:gap-26.5">
        <section className="images">
          <img
            src={logo}
            alt="Logo"
            className=" w-78.25 h-11.75 object-contain lg:hidden"
          />
          <img src={loginBanner} alt="banner" className="hidden lg:block" />
        </section>
        {isRegister ? (
          <RegisterField />
        ) : (
          <LoginField
            setPassword={setPassword}
            setEmail={setEmail}
            showEmailInputError={showEmailInputError}
            showPasswordInputError={showPasswordInputError}
            email={email}
            password={password}
            handleLogin={handleLogin}
          />
        )}
      </main>
    </div>
  );
}

export default Login;
