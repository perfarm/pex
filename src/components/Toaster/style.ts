import { CSSProperties } from "react";

export const baseToast = {
  background: '#363636',
  borderRadius: 10,
  color: '#FFFFFF',
  marginBottom: 15,
  padding: '10px 15px',
};

export const successStyle = {
  background: '#00C68E',
};

export const customStyle = {
  background: '#5593D1',
};

export const errorStyle = {
  background: '#F34E4E',
};

export const toastContainer: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
};

export const sideToastContainer = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};

export const messageContainer = {
  flex: 1,
  marginRight: 5,
};

export const closeButton: CSSProperties = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  marginLeft: 10,
  padding: 0,
};