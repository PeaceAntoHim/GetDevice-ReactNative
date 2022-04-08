// import React in our code
import React from 'react';

// import all the components we are going to use
import {ScrollView, StyleSheet, Text} from 'react-native';

import DeviceInfo, {getManufacturerSync} from 'react-native-device-info';

const DeviceInfoSync = (props) => {
  let deviceJSON = {};
  deviceJSON.manufacturer = getManufacturerSync();
  deviceJSON.buildId = DeviceInfo.getBuildIdSync();
  deviceJSON.isCameraPresent = DeviceInfo.isCameraPresentSync();
  deviceJSON.deviceName = DeviceInfo.getDeviceNameSync();
  deviceJSON.usedMemory = DeviceInfo.getUsedMemorySync();
  deviceJSON.instanceId = DeviceInfo.getInstanceIdSync();
  deviceJSON.installReferrer = DeviceInfo.getInstallReferrerSync();
  deviceJSON.installerPackageName = 
    DeviceInfo.getInstallerPackageNameSync();
  deviceJSON.isEmulator = DeviceInfo.isEmulatorSync();
  deviceJSON.fontScale = DeviceInfo.getFontScaleSync();
  deviceJSON.hasNotch = DeviceInfo.hasNotch();
  deviceJSON.firstInstallTime = 
    DeviceInfo.getFirstInstallTimeSync();
  deviceJSON.lastUpdateTime = DeviceInfo.getLastUpdateTimeSync();
  deviceJSON.serialNumber = DeviceInfo.getSerialNumberSync();
  deviceJSON.androidId = DeviceInfo.getAndroidIdSync();
  deviceJSON.IpAddress = DeviceInfo.getIpAddressSync();
  // needs android.permission.ACCESS_WIFI_STATE
  deviceJSON.MacAddress = 
    DeviceInfo.getMacAddressSync();
  // needs android.permission.READ_PHONE_STATE
  deviceJSON.phoneNumber = DeviceInfo.getPhoneNumberSync();
  deviceJSON.ApiLevel = DeviceInfo.getApiLevelSync();
  deviceJSON.carrier = DeviceInfo.getCarrierSync();
  deviceJSON.totalMemory = DeviceInfo.getTotalMemorySync();
  deviceJSON.maxMemory = DeviceInfo.getMaxMemorySync();
  deviceJSON.totalDiskCapacity = 
    DeviceInfo.getTotalDiskCapacitySync();
  deviceJSON.totalDiskCapacityOld = 
    DeviceInfo.getTotalDiskCapacityOldSync();
  deviceJSON.freeDiskStorage = DeviceInfo.getFreeDiskStorageSync();
  deviceJSON.freeDiskStorageOld = 
    DeviceInfo.getFreeDiskStorageOldSync();
  deviceJSON.batteryLevel = DeviceInfo.getBatteryLevelSync();
  deviceJSON.isLandscape = DeviceInfo.isLandscapeSync();
  deviceJSON.isAirplaneMode = DeviceInfo.isAirplaneModeSync();
  deviceJSON.isBatteryCharging = DeviceInfo.isBatteryChargingSync();
  deviceJSON.isPinOrFingerprintSet =
    DeviceInfo.isPinOrFingerprintSetSync();
  deviceJSON.supportedAbis = DeviceInfo.supportedAbisSync();
  deviceJSON.hasSystemFeature = 
    DeviceInfo.hasSystemFeatureSync(
      'android.software.webview',
    );
  deviceJSON.getSystemAvailableFeatures = 
    DeviceInfo.getSystemAvailableFeaturesSync();
  deviceJSON.powerState = DeviceInfo.getPowerStateSync();
  deviceJSON.isLocationEnabled = 
    DeviceInfo.isLocationEnabledSync();
  deviceJSON.headphones = DeviceInfo.isHeadphonesConnectedSync();
  deviceJSON.getAvailableLocationProviders = 
    DeviceInfo.getAvailableLocationProvidersSync();
  deviceJSON.bootloader = DeviceInfo.getBootloaderSync();
  deviceJSON.device = DeviceInfo.getDeviceSync();
  deviceJSON.display = DeviceInfo.getDisplaySync();
  deviceJSON.fingerprint = DeviceInfo.getFingerprintSync();
  deviceJSON.hardware = DeviceInfo.getHardwareSync();
  deviceJSON.host = DeviceInfo.getHostSync();
  deviceJSON.product = DeviceInfo.getProductSync();
  deviceJSON.tags = DeviceInfo.getTagsSync();
  deviceJSON.type = DeviceInfo.getTypeSync();
  deviceJSON.baseOS = DeviceInfo.getBaseOsSync();
  deviceJSON.previewSdkInt = DeviceInfo.getPreviewSdkIntSync();
  deviceJSON.securityPatch = DeviceInfo.getSecurityPatchSync();
  deviceJSON.codename = DeviceInfo.getCodenameSync();
  deviceJSON.incremental = DeviceInfo.getIncrementalSync();
  deviceJSON.supported32BitAbis = 
    DeviceInfo.supported32BitAbisSync();
  deviceJSON.supported64BitAbis = 
    DeviceInfo.supported64BitAbisSync();

  return (
    <>
      <Text style={styles.titleStyle}>{props.title}</Text>
      <ScrollView>
        <Text style={styles.instructions}>
          {JSON.stringify(deviceJSON, null, '  ')}
        </Text>
      </ScrollView>
    </>
  );
};
export default DeviceInfoSync;

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
  },
});