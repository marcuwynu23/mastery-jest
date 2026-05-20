import os from "os";

export const getSystemInfo = () => {
  return {
    platform: os.platform(),
    hostname: os.hostname(),
    freemem: os.freemem(),
  };
};
