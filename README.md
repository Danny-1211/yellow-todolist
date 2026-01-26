# 黃黃的待辦事項清單 | yellow-Todolist

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat&logo=react&color=61DAFB) ![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?style=flat&logo=vite&color=646CFF) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat&logo=tailwindcss&color=38B2AC) ![React Router](https://img.shields.io/badge/React_Router-7.12-CA4245?style=flat&logo=react-router&color=CA4245) ![React-Spinners]([https://www.davidhu.io/react-spinners/](https://img.shields.io/badge/React--Spinners-0.15-blue?style=flat&logo=react)) ![React-toastify]([https://fkhadra.github.io/react-toastify/introduction/](https://img.shields.io/badge/React--Toastify-11.0-orange?style=flat&logo=react))

使用 React 製作的 TodoList 待辦事項清單。
使用者註冊帳號之後,便可以記錄自己想做的待辦事項

## 📂 專案架構 | Project Structure

```text
yellow-todolist/
├── public/              # 靜態資源
├── src/                 # 原始碼目錄
│   ├── assets/          # 靜態資源 (圖片、圖示)
│   ├── components/      # 共用元件
│   ├── pages/           # 頁面元件
│   ├── router/          # 路由設定
│   ├── services/        # 抓取 api 資料服務
│   ├── utils/           # 共用的函式
│   └── index.css        # 共用全域的樣式
│   ├── App.jsx          # 應用程式主入口
│   └── main.jsx         # 渲染入口
├── index.html           # 應用程式入口 HTML
├── package.json         # 專案資訊與相關套件
├── vite.config.js       # Vite 設定檔
└── eslint.config.js     # ESLint 設定檔
```


## 🚀 啟動專案 | Quick Start

### 📦 安裝環境 (Requirement)

請確認電腦已安裝以下版本：
- **Node.js**: `v22.20.0`
- **npm**: `v11.6.1`

### ⚙️ 安裝與啟動 (Setup & Dev)

```bash
npm install
npm run dev
```
