import React from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import { View, Text,StyleSheet } from 'react-native';
import { useSurfSpots } from '@/app/hooks/surfSpots';
import {SpotForecast } from '@/app/components/spotForecast';

const mapScreen = () => {
    const {spots, loading} = useSurfSpots();
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
                {spots.map((spot) => (
                    <Marker
                        key={spot.id}
                        coordinate={{ latitude: spot.lat, longitude: spot.lng }}
                        title={spot.name}
                    >
                        <Callout>
                            {/*<SpotForecast spot={spot}/>*/}
                        </Callout>
                    </Marker>
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
        flex: 2,
    },
});

export default mapScreen;
