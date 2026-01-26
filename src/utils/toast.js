import { toast } from 'react-toastify';

const defaultOptions = {
  position: "top-center",
  autoClose: 1500,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

export const notify = {
  success: (msg, options) => {
    toast.success(msg, { ...defaultOptions, ...options });
  },
  error: (msg, options) => {
    toast.error(msg, { ...defaultOptions, ...options });
  },
  info: (msg, options) => {
    toast.info(msg, { ...defaultOptions, ...options });
  },
  warn: (msg, options) => {
    toast.warn(msg, { ...defaultOptions, ...options });
  },
  promise: (promise, msg = { pending: '讀取中...', success: '完成！', error: '出錯了！' }) => {
    return toast.promise(promise, msg, defaultOptions);
  }
};