export function getOs() {
  let userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = osMap.ios;
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = osMap.ios;
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = osMap.windows;
  } else if (/Android/.test(userAgent)) {
    os = osMap.android;
  } else if (!os && /Linux/.test(platform)) {
    os = osMap.linux;
  }

  return os;
}

export const osMap = {
  macOs: "Mac OS",
  ios: "IOS",
  windows: "Windows",
  android: "Android",
  linux: "Linux",
};
