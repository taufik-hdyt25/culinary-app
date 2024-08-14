import { TestIds } from "react-native-google-mobile-ads";

// src/config/AdMobConfig.js
const adMobConfig = {
    banner: {
        testBanner: TestIds.BANNER,
        bannerProduction: "ca-app-pub-9903584691242938/2293467056",
    },
    interstial: {
        testBanner: TestIds.INTERSTITIAL,
        interstialProduction: "ca-app-pub-9903584691242938/3994681094",
    }
}

const getAdMobUnitId = () => {
  return {
    banner: __DEV__ ? adMobConfig.banner.testBanner : adMobConfig.banner.bannerProduction,
    interstial: __DEV__ ? adMobConfig.interstial.testBanner : adMobConfig.interstial.interstialProduction
  }
};

export default getAdMobUnitId;
