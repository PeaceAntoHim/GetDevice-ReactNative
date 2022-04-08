// import React in our code
import React from 'react';

// import all the components we are going to use
import {ScrollView, StyleSheet, Text} from 'react-native';

import {
  useBatteryLevel,
  useBatteryLevelIsLow,
  usePowerState,
  useFirstInstallTime,
  useDeviceName,
  useHasSystemFeature,
  useIsEmulator,
} from 'react-native-device-info';

const DeviceInfoHooks = (props) => {
  const batteryLevel = useBatteryLevel();
  const batteryLevelIsLow = useBatteryLevelIsLow();
  const powerState = usePowerState();
  const firstInstallTime = useFirstInstallTime();
  const deviceName = useDeviceName();
  const hasSystemFeature = 
    useHasSystemFeature('amazon.hardware.fire_tv');
  const isEmulator = useIsEmulator();
  const deviceJSON = {
    batteryLevel,
    batteryLevelIsLow,
    powerState,
    firstInstallTime,
    deviceName,
    hasSystemFeature,
    isEmulator,
  };
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
export default DeviceInfoHooks;

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