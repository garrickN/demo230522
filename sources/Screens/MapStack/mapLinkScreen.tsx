import * as React, { useEffect }  from 'react';
import { View, Linking, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default function MapLinkScreen(props) {
  const { startPoint, endPoint, waypoints } = props;

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      topBar: {
        backButton: {
          visible: true,
        },
      },
    });
  }, []);

  const openMapWithDirections = () => {
    const waypointsString = waypoints.map(waypoint => `${waypoint.latitude},${waypoint.longitude}`).join('|');
    const mapLinkUrl = `https://www.openstreetmap.org/directions?engine=osrm_car&route=${startPoint.latitude},${startPoint.longitude};${waypointsString};${endPoint.latitude},${endPoint.longitude}`;

    Linking.openURL(mapLinkUrl);
  };

  return (
    <View style={styles.container}>
      {/* You can add any additional UI components here */}

      <TouchableOpacity style={styles.button} onPress={openMapWithDirections}>
        <Text style={styles.buttonText}>Open Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
