import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet} from "react-native";

const API_KEY = process.env.EXPO_PUBLIC_STORMGLASS_KEY!;

type SpotForecastProps = {
    spot: { name: string; lat: number; lng: number; Type: string };
};

export const SpotForecast = ({ spot }:SpotForecastProps)  => {
    const [loading, setLoading] = useState(true);
    const [forecast, setForecast] = useState<any>(null);

    useEffect(() => {
        const fetchForecast = async () => {
            const params='waveHeight,waveDirection,windSpeed,windDirection';
            try {
                const res = await fetch(
                    `https://api.stormglass.io/v2/weather/point?lat=${spot.lat}&lng=${spot.lng}&params=${params}`,
                    {
                        headers: { Authorization: API_KEY },
                    }
                );
                const data = await res.json();
                setForecast(data.hours?.[0]); // next hour
            } catch (err) {
                console.error("Stormglass fetch failed:", err);
            } finally {
                setLoading(false);
            }

        };
        fetchForecast();
    }, [spot]);

    if (loading) {
        return (
            <View style={{ padding: 8 }}>
                <ActivityIndicator size="small" />
            </View>
        );
    }

    return (
        <View style={{ maxWidth: 200, padding: 8 }}>
            <Text style={{ fontWeight: "bold" }}>{spot.name}</Text>
            <Text>Type: {spot.Type}</Text>
            <Text>Swell Height: {forecast.waveHeight?.noaa ?? "N/a"} m</Text>
        </View>
    );
};