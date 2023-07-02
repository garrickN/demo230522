import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Linking } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

export default function MapScreen() {
    const initialRegion = {
        latitude: 21.0285, // Vĩ độ tọa độ ban đầu
        longitude: 105.8542, // Kinh độ tọa độ ban đầu
        latitudeDelta: 0.01, // Độ chênh lệch vĩ độ hiển thị trên bản đồ
        longitudeDelta: 0.01, // Độ chênh lệch kinh độ hiển thị trên bản đồ
    };

    const routeCoordinates = [
        { latitude: 21.0285, longitude: 105.8542 },
        { latitude: 21.0363, longitude: 105.8007 },
        { latitude: 21.0188, longitude: 105.8372 },
    ];

    const openMapWithDirections = () => {
        const startPoint = { latitude: routeCoordinates[0].latitude, longitude: routeCoordinates[0].longitude };
        const endPoint = { latitude: routeCoordinates[routeCoordinates.length - 1].latitude, longitude: routeCoordinates[routeCoordinates.length - 1].longitude };
        const waypoints = routeCoordinates.slice(1, -1).map(coordinate => ({ latitude: coordinate.latitude, longitude: coordinate.longitude }));

        const waypointsString = waypoints.map(waypoint => `${waypoint.latitude},${waypoint.longitude}`).join('|');
        const mapLinkUrl = `https://www.openstreetmap.org/directions?engine=osrm_car&route=${startPoint.latitude},${startPoint.longitude};${waypointsString};${endPoint.latitude},${endPoint.longitude}`;

        Linking.openURL(mapLinkUrl);
    };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {/* Vẽ đường đi */}
        <Polyline coordinates={routeCoordinates} strokeColor="#0000FF" strokeWidth={2} />

        {/* Đánh dấu các điểm trên đường đi */}
        {routeCoordinates.map((coordinate, index) => (
          <Marker key={index} coordinate={coordinate} />
        ))}
      </MapView>

      {/* Nút để mở ứng dụng bản đồ */}
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
  map: {
    width: '100%',
    height: '100%',
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
