export const identifyDevice = () => {
  if (typeof window === undefined) {
    return;
  }

  const userAgent = window.navigator.userAgent;
  const iOS = !!userAgent.match(/iPhone|iPad|iPod/);
  const isAndroid = /android/i.test(userAgent);

  if (isAndroid) {
    return 'android';
  }
  if (iOS) {
    return 'ios';
  }

  return 'other';
};
