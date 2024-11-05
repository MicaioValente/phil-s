export interface DeviceInfoApi {
  isAndroid: boolean;
  isIOS: boolean;
  getBuildNumber(): string;
  getPlatform(): OS;
  getPackageName(): string;
  getSystemVersion(): string;
  getVersion(): string;
}
