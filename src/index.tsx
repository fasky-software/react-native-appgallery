import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-appgallery' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

export enum RATE_RESULT {
  'UNKNOWN_ERROR' = 0,
  'APP_NOT_RELEASED' = 101,
  'RATING_SUBMITTED' = 102,
  'COMMENT_SUBMITTED' = 103,
  'HUAWEI_ID_SIGN_IN_STATUS_INVALID' = 104,
  'USER_NOT_MEET_CONDITIONS' = 105,
  'COMMENT_DISABLED' = 106,
  'NOT_SUPPORTED' = 107,
  'CANCELLED' = 108,
}

const AppGallery = NativeModules.AppGallery
  ? NativeModules.AppGallery
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function rate(): Promise<RATE_RESULT> {
  return AppGallery.rate();
}
