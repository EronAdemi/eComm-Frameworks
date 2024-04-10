import { toast } from "react-toastify";


const toasterFade = {
  autoClose: 7000,
  hideProgressBar: true,
  position: "bottom-right",
}

const customFade = (autoClose) => {
  const style = {
    autoClose: autoClose || 5000,
    hideProgressBar: true,
    position: "bottom-right",
  };

  return style;
}


export const customToast = (type = '', message = '', autoClose = 5000) => {
  toast[type](
    message, autoClose ?
    { ...customFade(autoClose) }
    :
    { ...toasterFade }
  );
}