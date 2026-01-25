import { useState, useEffect, useCallback } from "react";
import { getTodos, addTodo, deleteTodo, changeTodoStatus} from "../services/home";
import logo from "../assets/images/logo.svg";
import add from "../assets/images/add.svg";
import checked from "../assets/images/check.svg";
import close from "../assets/images/close.svg";

const tabs = [
  { id: "all", label: "全部" },
  { id: "active", label: "待完成" },
  { id: "completed", label: "已完成" },
];

function Home() {
  const [tab, setTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [todolist, setTodoList] = useState([]);
  const [unfinishItemsCount, setUnfinishItemsCount] = useState(0);
  const [newIteminputValue, setNewItemInputValue] = useState("");

  // 抓到清單列表
  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await getTodos();
      setTodoList(res.data || []);
    } catch (err) {
      console.error("抓取失敗", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // 初始化拿一次
  useEffect(() => {
    fetchData();
  }, []);

  // 拿到資料之後算出現在未完成的清單項目有多少
  useEffect(() => {
    const unfinishCount = todolist.filter((item) => {
      return item.status == false;
    }).length;
    setUnfinishItemsCount(unfinishCount);
  }, [todolist]);

  // 新增清單項目
  const addTodoItem = async () => {
    if (!newIteminputValue) {
      return;
    }
    const para = {
      content: newIteminputValue,
    };
    try {
      await addTodo(para);
      setNewItemInputValue("");
      await fetchData();
    } catch (err) {
      console.error("新增失敗", err);
    }
  };

  const deleteTodoItem = async (id) => {
    try {
      await deleteTodo(id);
      await fetchData();
    } catch (err) {
      console.error("刪除失敗", err);
    }
  };

  const switchStatus = async (id) => {
    try {
      await changeTodoStatus(id);
      await fetchData();
    } catch (err) {
      console.error("更新狀態失敗", err)
    }
  }

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
              value={newIteminputValue}
              onChange={(e) => setNewItemInputValue(e.target.value)}
            />
            <button
              className="bg-[#333333] w-10 h-10 py-[9.8px] px-2.5 rounded-[10px] flex items-center justify-center cursor-pointer"
              onClick={() => addTodoItem()}
            >
              <img className="w-5 h-5" src={add} alt="add" />
            </button>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start w-full bg-white rounded-[10px] shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] max-w-78 lg:max-w-125 ">
          <div className="flex w-full text-center filter-btns max-w-78 lg:max-w-125">
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
          <div className="flex flex-col items-center justify-center w-full gap-4 px-4 pb-4 list">
            {isLoading ? (
              <p>資料讀取中...</p>
            ) : (
              todolist.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="group flex items-center justify-between w-full transition-colors  border-b border-[#E5E5E5] hover:bg-[#FAFAFA] lg:border-0"
                  >
                    <div className="group  flex  py-4 w-full lg:border-b lg:border-[#E5E5E5]">
                      <div className="flex gap-4 item-content" onClick={() => switchStatus(item.id)}>
                        {item.status ? (
                          <img src={checked} alt="checked" />
                        ) : (
                          <div className="w-5 h-5 bg-[#FFFFFF] border border-[#9F9A91] rounded-[5px]"></div>
                        )}
                        <label
                          htmlFor="check-1"
                          className={`${item.status ? "line-through text-[#9F9A91]" : ""}`}
                        >
                          {item.content}
                        </label>
                      </div>
                    </div>
                    <div
                      className="transition-opacity duration-200 opacity-100 cursor-pointer item-close lg:opacity-0 lg:group-hover:opacity-100"
                      onClick={() => deleteTodoItem(item.id)}
                    >
                      <img src={close} alt="close" />
                    </div>
                  </div>
                );
              })
            )}
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
