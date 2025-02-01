import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function GaurantierUsers() {
    const [postData, setPostData] = useState([]);

    const getData = async () => {
        await ApiInstance.get('/loan/guarantier')
            .then((res) => {
                console.log(res.data, 'response');
                setPostData(res.data.data);
            })
            .catch((err) => {
                console.log(err, 'error');
            });
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Guarantiers</Text>
            <FlatList
                data={postData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardText}>Email: <Text style={styles.highlightText}>{item.email}</Text></Text>
                            <Text style={styles.cardText}>CNIC: <Text style={styles.highlightText}>{item.cnic}</Text></Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        padding: 20,
    },
    heading: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#003C43',
        marginBottom: 25,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 18,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 6,
        borderLeftWidth: 5,
        borderLeftColor: '#003C43',  // Green accent border
    },
    name: {
        fontSize: 20,
        fontWeight: '600',
        color: '#003C43',
        marginBottom: 10,
    },
    cardDetails: {
        marginTop: 10,
    },
    cardText: {
        fontSize: 16,
        color: '#black',
        marginBottom: 5,
    },
    highlightText: {
        fontWeight: 'bold',
        color: '#black',
    },
});
