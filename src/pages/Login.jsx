import { useState, useEffect } from "react";
import { setToken, setNickName } from "../utils/storage";
import loginBanner from "../assets/images/login.png";
import logo from "../assets/images/logo.svg";
import { checkSignIn, signUp, checkoutToken } from "../services/login";
import { getToken } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { notify } from "../utils/toast.js";
import Loading from "../components/Loading.jsx";
function LoginField({
  setEmail,
  setPassword,
  email,
  password,
  handleLogin,
  showEmailInputError,
  showPasswordInputError,
  setIsRegister,
  isLoading,
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 inputs lg:gap-6">
      <div className="inputs-title">
        <p className="text-xl font-bold text-[#333333] lg:text-2xl">
          最實用的線上代辦事項服務
        </p>
      </div>
      <div className="flex flex-col justify-center gap-4 inputs-group items-between">
        <div className="flex flex-col items-start justify-start gap-1 input-email">
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
        <div className="flex flex-col items-start justify-start gap-1 input-password">
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
      <div className="flex flex-col gap-6 inputs-btn">
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
          <>
            <button
              className="bg-[#333333] py-2 px-12 border-[#333333] rounded-[10px] cursor-pointer"
              type="button"
              onClick={handleLogin}
            >
              <p className="text-[#FFFFFF] font-bold">登入</p>
            </button>
          </>
        )}
        <button className="cursor-pointer" type="button" onClick={() => setIsRegister(true)}>
          <p className="text-[#333333] font-bold">註冊帳號</p>
        </button>
      </div>
    </section>
  );
}

function RegisterField({
  setEmail,
  setNickname,
  setPassword,
  setEnsurePassword,
  nickname,
  email,
  password,
  ensurePassword,
  showNickNameInputError,
  showEnsurePasswordInputError,
  showEmailInputError,
  showPasswordInputError,
  handleRegister,
  setIsRegister,
  isLoading,
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 inputs lg:gap-6">
      <div className="inputs-title">
        <p className="text-xl font-bold text-[#333333] lg:text-2xl">註冊帳號</p>
      </div>
      <div className="flex flex-col justify-center gap-4 inputs-group items-between">
        <div className="flex flex-col items-start justify-start gap-1 input-email">
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
        <div className="flex flex-col items-start justify-start gap-1 input-nickname">
          <label className="text-[14px] font-bold">您的暱稱</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="請輸入暱稱"
            required
          ></input>
          {showNickNameInputError ? (
            <span className="text-[14px] font-bold text-[#D87355]">
              {showNickNameInputError}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start gap-1 input-password">
          <label className="text-[14px] font-bold">密碼</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="請輸入密碼"
            required
          />
          {showPasswordInputError ? (
            <span className="text-[14px] font-bold text-[#D87355]">
              {showPasswordInputError}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col items-start justify-start gap-1 input-password-ensure">
          <label className="text-[14px] font-bold">再次輸入密碼</label>
          <input
            className="bg-[#FFFFFF] w-76 px-4 py-3 border-[#FFFFFF] rounded-[10px]"
            type="password"
            value={ensurePassword}
            onChange={(e) => setEnsurePassword(e.target.value)}
            placeholder="請再次輸入密碼"
            required
          ></input>
          {showEnsurePasswordInputError ? (
            <span className="text-[14px] font-bold text-[#D87355]">
              {showEnsurePasswordInputError}
            </span>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col gap-6 inputs-btn">
        {isLoading ? (
          <Loading loading={isLoading} />
        ) : (
          <>
            <button
              className="bg-[#333333] py-2 px-12 border-[#333333] rounded-[10px] cursor-pointer"
              type="button"
              onClick={handleRegister}
            >
              <p className="text-[#FFFFFF] font-bold">註冊帳號</p>
            </button>
          </>
        )}
        <button
          className="cursor-pointer "
          type="button"
          onClick={() => setIsRegister(false)}
        >
          <p className="text-[#333333] font-bold">登入</p>
        </button>
      </div>
    </section>
  );
}

function Login() {
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [showEmailInputError, setShowEmailInputError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordInputError, setShowPasswordInputError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [ensurePassword, setEnsurePassword] = useState("");
  const [showNickNameInputError, setShowNickNameInputError] = useState("");
  const [showEnsurePasswordInputError, setShowEnsurePasswordInputError] =
    useState("");

  useEffect(() => {
    const checkToken = async () => {
      const token = getToken();

      if (!token) return;

      try {
        const res = await checkoutToken();
        if (res.status) {
          notify.success("歡迎回來！");
          navigate("/home", { replace: true });
        } else {
          localStorage.clear();
          notify.error("登入逾時，請重新登入");
        }
      } catch (err) {
        console.error("TOKEN 過期", err);
      }
    };
    checkToken();
  }, []);

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
      setIsLoading(true);
      const para = {
        email: email,
        password: password,
      };

      const res = await checkSignIn(para);

      if (res.status) {
        if (res.token) {
          setToken(res.token ? res.token : null);
          setNickName(res.nickname ? res.nickname : "");
        }
        notify.success(res.message ? res.message : "登入成功");
        navigate("/home", { replace: true });
      } else {
        setShowEmailInputError(res.message);
        setShowPasswordInputError(res.message);
        notify.error(res.message ? res.message : "登入失敗");
      }
    } catch (err) {
      notify.error(err.message ? err.message : "登入失敗");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async () => {
    setShowEmailInputError("");
    setShowPasswordInputError("");
    setShowEnsurePasswordInputError("");
    setShowNickNameInputError("");

    let hasError = false;
    if (!email) {
      setShowEmailInputError("此欄位不可為空");
      hasError = true;
    }

    if (!password) {
      setShowPasswordInputError("此欄位不可為空");
      hasError = true;
    }

    if (!nickname) {
      setShowNickNameInputError("此欄位不可為空");
      hasError = true;
    }

    if (!ensurePassword) {
      setShowEnsurePasswordInputError("此欄位不可為空");
      hasError = true;
    }

    if (ensurePassword !== password) {
      setShowEnsurePasswordInputError("第二次輸入密碼需要與第一次一致");
      hasError = true;
    }

    if (hasError) return;

    try {
      setIsLoading(true);
      const para = {
        email: email,
        password: password,
        nickname: nickname,
      };
      const res = await signUp(para);
      if (res.status) {
        setIsRegister(false);
        notify.success(res.message ? res.message : "註冊成功");
      } else {
        notify.error(res.message ? res.message : "註冊失敗");
      }
    } catch (err) {
      notify.error(err.message ? err.message : "註冊失敗");
    } finally {
      setIsLoading(false);
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
          <RegisterField
            setEmail={setEmail}
            setNickname={setNickname}
            setPassword={setPassword}
            setEnsurePassword={setEnsurePassword}
            nickname={nickname}
            email={email}
            password={password}
            ensurePassword={ensurePassword}
            showNickNameInputError={showNickNameInputError}
            showEnsurePasswordInputError={showEnsurePasswordInputError}
            showEmailInputError={showEmailInputError}
            showPasswordInputError={showPasswordInputError}
            handleRegister={handleRegister}
            setIsRegister={setIsRegister}
            isLoading={isLoading}
          />
        ) : (
          <LoginField
            setPassword={setPassword}
            setEmail={setEmail}
            showEmailInputError={showEmailInputError}
            showPasswordInputError={showPasswordInputError}
            setIsRegister={setIsRegister}
            email={email}
            password={password}
            handleLogin={handleLogin}
            isLoading={isLoading}
          />
        )}
      </main>
    </div>
  );
}

export default Login;
