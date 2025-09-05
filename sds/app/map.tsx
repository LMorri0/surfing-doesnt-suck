import React, {useState} from 'react';
import MapView, {Callout, Marker} from 'react-native-maps';
import {View, Text, StyleSheet, Modal, Pressable} from 'react-native';
import { useSurfSpots } from '@/app/hooks/surfSpots';
import {SpotForecast } from '@/app/components/spotForecast';
import { WebView } from 'react-native-webview';


const windy = {
html: '<iframe width="612" height="450" src="https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=waves&product=ecmwfWaves&level=surface&lat=56.4907&lon=-4.204" frameborder="0"></iframe>'
};

const mapScreen = () => {
    const {spots, loading} = useSurfSpots();
    const [selectedSpot, setSelectedSpot] = useState<any>(null);
    const [selectedSpotLat, setSelectedSpotLat] = useState<any>(null)
    const [selectedSpotLng, setSelectedSpotLng] = useState<any>(null)


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
                        onPress={() => {
                            setSelectedSpot(spot); // open modal
                            setSelectedSpotLat(spot.lat);
                            setSelectedSpotLng(spot.lng)
                        }}

                    />
                ))}
            </MapView>

            <Modal
                visible={!!selectedSpot}
                animationType="slide"
                transparent={false}
                onRequestClose={() => setSelectedSpot(null)}
            >
                <View style={styles.modalContainer}>
                    {selectedSpot && <SpotForecast spot={selectedSpot} />}
                    <WebView
                        source={{
                            uri: `https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=default&metricTemp=default&metricWind=default&zoom=5&overlay=waves&product=ecmwfWaves&level=surface&lat=${selectedSpotLat}&lon=${selectedSpotLng}`
                        }}
                        style={{ width: 612, height: 450 }}
                    />
                    <Pressable style={styles.closeButton} onPress={() => setSelectedSpot(null)}>
                        <Text style={styles.closeText}>Close</Text>
                    </Pressable>
                </View>
            </Modal>
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
    modalContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
    },
    closeButton: {
        marginTop: 20,
        padding: 12,
        backgroundColor: "#CEAE3E",
        borderRadius: 8,
        alignItems: "center",
    },
    closeText: { color: "#fff", fontWeight: "bold" },
});

export default mapScreen;
