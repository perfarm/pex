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

export const identifyBrowser = () => {
  if (typeof window === undefined) {
    return;
  }

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
    return 'safari';
  }

  if (userAgent.includes('chrome')) {
    return 'chrome';
  }

  return 'other';
};
