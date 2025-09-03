import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebaseConfig'; // make sure db = getFirestore(app)

type SurfSpot = {
    id: string;
    name: string;
    lat: number;
    lng: number;
    Type: string;
};

export const useSurfSpots = () => {
    const [spots, setSpots] = useState<SurfSpot[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'surfSpots'), (snapshot) => {
            const docs: SurfSpot[] = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as SurfSpot[];
            setSpots(docs);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    console.log(spots);

    return { spots, loading };
};