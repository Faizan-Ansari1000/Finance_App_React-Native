import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ApiInstance from "../../config/Apis/ApiInstance";

export default function ConstructionLoan() {

    const [postData, setPostData] = useState([]);

    const getData = async () => {
        await ApiInstance.get('/home/Construction')
            .then((res) => {
                setPostData(res.data.data);
            })
            .catch((err) => {
                console.log(err, 'error');
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Construction Loan</Text>
            <FlatList
                data={postData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <View style={styles.cardDetails}>
                            <Text style={styles.cardText}>CNIC: <Text style={styles.highlightText}>{item.cnic}</Text></Text>
                            <Text style={styles.cardText}>Max Loan: <Text style={styles.highlightText}>{item.maxLoan}</Text></Text>
                            <Text style={styles.cardText}>Period: <Text style={styles.highlightText}>{item.period}</Text></Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f5f5f5",
        flex: 1,
        margin: 3
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#003C43',
        marginBottom: 25,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 6,
        elevation: 8,
        borderLeftWidth: 5,
        borderLeftColor: '#003C43',  
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#003C43',
        marginBottom: 12,
    },
    cardDetails: {
        marginTop: 8,
    },
    cardText: {
        fontSize: 16,
        color: '#555',
        marginBottom: 7,
        fontWeight: 'bold'
    },
    highlightText: {
        fontWeight: 'bold',
    },
});
