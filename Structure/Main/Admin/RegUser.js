import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ApiInstance from '../../config/Apis/ApiInstance';

export default function RegUser() {
    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const res = await ApiInstance.get('/auth/signUp');
            setUsers(res.data.data);
        } catch (err) {
            console.log(err, 'error');
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Registered Users</Text>
            <View style={styles.tableHeader}>
                <Text style={styles.tableHeaderText}>Name</Text>
                <Text style={styles.tableHeaderText}>Email</Text>
            </View>
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.tableRow}>
                            <Text style={styles.tableCell}>{item.name}</Text>
                            <Text style={styles.tableCell}>{item.email}</Text>
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
        padding: 20,
        backgroundColor: '#F9F9F9',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: '#003C43',
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#003C43',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 12,
        marginBottom: 10,
    },
    tableHeaderText: {
        fontWeight: 'bold',
        color: '#FFF',
        flex: 1,
        textAlign: 'start',
        fontSize: 16,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginVertical: 6,
        marginHorizontal: 4,
        borderRadius: 12,
        shadowColor: '#000',
        elevation: 5,
        borderLeftWidth: 5, // Add green border on the left side
        borderLeftColor: '#003C43', // Green color
    },
    tableCell: {
        flex: 1,
        textAlign: 'start',
        fontSize: 15,
        color: '#333',
    },
});
