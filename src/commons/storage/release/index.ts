import { Release } from './types';

export const getReleaseValue = (key: keyof typeof Release) => localStorage.getItem(`FEATURE_${key}`) === 'true';

export const setReleaseValue = (key: keyof typeof Release) => {
  return localStorage.setItem(`FEATURE_${key}`, 'true');
};

export const removeReleaseValue = (key: keyof typeof Release) => {
  localStorage.removeItem(`FEATURE_${key}`);
};
