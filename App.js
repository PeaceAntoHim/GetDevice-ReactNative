// import React in our code
import React, {useState} from 'react';

// import all the components we are going to use
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
} from 'react-native';

import DeviceInfoAsync from './pages/DeviceInfoAsync';
import DeviceInfoConstants from './pages/DeviceInfoConstants';
import DeviceInfoSync from './pages/DeviceInfoSync';
import DeviceInfoHooks from './pages/DeviceInfoHooks';

const App = () => {
  const [activeTab, setActiveTab] = useState('constant');
  const [] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      {activeTab === 'constant' ? (
        <DeviceInfoConstants
          title="React Native Device Info - Constant Info" 
        />
      ) : activeTab === 'sync' ? (
        <DeviceInfoSync
          title="React Native Device Info - Sync Info"
        />
      ) : activeTab === 'async' ? (
        <DeviceInfoAsync
          title="React Native Device Info - Device info Async"
        />
      ) : activeTab === 'hooks' ? (
        <DeviceInfoHooks
          title="React Native Device Info - Device info Hook"
        />
      ) : null}

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('constant')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'constant' && styles.boldText,
            ]}>
            Constant
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('sync')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'sync' && styles.boldText
            ]}>
            Sync
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('async')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'async' && styles.boldText
            ]}>
            Async
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tab}
          onPress={() => setActiveTab('hooks')}>
          <Text
            style={[
              styles.tabText,
              activeTab === 'hooks' && styles.boldText
            ]}>
            Hooks
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabBar: {
    flexDirection: 'row',
    borderTopColor: '#333333',
    borderTopWidth: 1,
  },
  tab: {
    height: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: '#333333',
  },
  boldText: {
    fontWeight: '700',
  },
});