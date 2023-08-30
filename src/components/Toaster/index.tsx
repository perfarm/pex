import {
  Toaster as ReactHotToast,
  Toast as ReactToast,
  ToastBar,
  toast as reactHotToast,
} from "react-hot-toast";

import { Close } from "../Icons/Close";
import { Stack } from "../Icons/Stack";

import {
  baseToast,
  closeButton,
  customStyle,
  errorStyle,
  messageContainer,
  sideToastContainer,
  successStyle,
  toastContainer,
} from "./style";

export const toast = reactHotToast;

export const Toaster = () => (
  <ReactHotToast
    gutter={3}
    position="top-right"
    toastOptions={{
      duration: 5000,
      style: baseToast,
      success: {
        style: successStyle,
        ariaProps: {
          closeIconColor: "#00946A",
          divisorColor: "#00B380",
        } as any,
      },
      error: {
        style: errorStyle,
        ariaProps: {
          closeIconColor: "#B63A3A",
          divisorColor: "#DB4646",
        } as any,
      },
      custom: {
        style: customStyle,
        ariaProps: {
          closeIconColor: "#494949",
          divisorColor: "#494949",
        } as any,
      },
    }}
  >
    {(toast) => <Toast toast={toast} />}
  </ReactHotToast>
);

export const Toast = ({ toast }: { toast: ReactToast }) => (
  <ToastBar
    toast={toast}
    style={{
      ...toast.style,
      animation: toast.visible ? "custom-enter 1s ease" : "custom-exit 1s ease",
    }}
  >
    {({ icon, message }) => {
      const { closeIconColor, divisorColor } = (toast as any)[toast.type]
        .ariaProps;
      const onClose = () => reactHotToast.remove(toast.id);

      return (
        <div style={toastContainer}>
          <div style={sideToastContainer}>
            <Stack size={18} />
          </div>

          <div style={messageContainer}>{message}</div>

          {toast.type !== "loading" && (
            <div
              style={{
                ...sideToastContainer,
                borderLeft: `1px solid ${divisorColor}`,
              }}
            >
              <button style={closeButton} onClick={onClose}>
                <Close color={closeIconColor} size={18} />
              </button>
            </div>
          )}
        </div>
      );
    }}
  </ToastBar>
);
