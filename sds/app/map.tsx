import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';

const surfSpots = [
    {
        id: '1',
        name: 'Thurso East',
        lat: 58.5959,
        lng: -3.5214,
    },
    {
        id: '2',
        name: 'Pease Bay',
        lat: 55.8666,
        lng: -2.3361,
    },
    {
        id: '3',
        name: 'Belhaven Bay',
        lat: 56.0022,
        lng: -2.5239,
    },
];

const mapScreen = () => {
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 56.4907,
                    longitude: -4.2026,
                    latitudeDelta: 3.5,
                    longitudeDelta: 3.5,
                }}
            >
                {surfSpots.map((spot) => (
                    <Marker
                        key={spot.id}
                        coordinate={{ latitude: spot.lat, longitude: spot.lng }}
                        title={spot.name}
                    />
                ))}
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default mapScreen;
