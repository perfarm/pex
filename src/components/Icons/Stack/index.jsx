import React from 'react';

export const Stack = ({ color = '#FFFFFF', size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 16.5L12 21.75L21 16.5M3 12L12 17.25L21 12M3 7.5L12 12.75L21 7.5L12 2.25L3 7.5Z" fill="transparent" stroke={color} strokeWidth="1.5" />
  </svg>
);
