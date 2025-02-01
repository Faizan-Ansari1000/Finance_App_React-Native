import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default function Admin() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegUser')}>
                    <Text style={styles.buttonText}>View Registered Users</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoanUser')}>
                    <Text style={styles.buttonText}>View Loan Wedding</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ConstructionLoan')}>
                    <Text style={styles.buttonText}>View Loan Construction</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('GaurantierUsers')}>
                    <Text style={styles.buttonText}>View Gaurantier Users</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#003C43',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        flex: 0.48,  
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'start',
    },
    '@media (max-width: 600px)': {
        button: {
            flex: 1,  
            marginHorizontal: 0,  
            marginBottom: 10,  
        },
        buttonRow: {
            flexDirection: 'column',  
        },
    },
});
