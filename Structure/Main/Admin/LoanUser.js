import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ApiInstance from '../../config/Apis/ApiInstance';

export default function LoanUser() {
    const [postData, setPostData] = useState([]);

    const getApiData = async () => {
        try {
            const res = await ApiInstance.get('/wedding/userWedding');
            setPostData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Wedding Loan Details</Text>
            <FlatList
                data={postData}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.card}>
                        <Text style={styles.cardTitle}>{item.name}</Text>
                        <Text style={styles.cardText}>CNIC: {item.cnic}</Text>
                        <Text style={styles.cardText}>Max Loan: {item.maxLoan}</Text>
                        <Text style={styles.cardText}>Loan Period: {item.period} months</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F9F9F9',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#003C43',
    },
    card: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 2,
        marginVertical: 6,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
        borderLeftWidth: 5, 
        borderLeftColor: '#003C43', 
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#003C43',
    },
    cardText: {
        fontSize: 16,
        color: '#555',
        marginTop: 5,
    },
});
