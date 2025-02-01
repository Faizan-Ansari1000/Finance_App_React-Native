import { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import ApiInstance from '../../config/Apis/ApiInstance';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function Wedding() {
    const [model, setModel] = useState({});
    const [modalForm, setModalForm] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const post = async () => {
        setModalVisible(true);
    };

    const postForm = async () => {
        try {
            await ApiInstance.post('/loan/guarantier', modalForm)
                .then((res) => {
                    console.log(res, 'response');
                    Toast.show({ type: 'success', position: 'top', text1: 'Send', text2: 'Your Forim is Submited' })

                })
                .catch((err) => {
                    console.log(err, 'error')
                    Toast.show({ type: 'error', position: 'top', text1: 'Error', text2: 'Please Try Again' })
                })
        } catch (error) {
            console.log(error, 'error')
        }
    }

    const submit = async () => {
        await ApiInstance.post('/wedding/userWedding', model)
            .then((res) => {
                console.log(res, 'response');
                Toast.show({ type: 'success', position: 'top', text1: 'Success', text2: 'Data Submitted Successfully' });
            })
            .catch((err) => {
                console.log(err, 'error');
                Toast.show({ type: 'error', position: 'top', text1: 'Error', text2: 'Please provide valid data' });
            });
    };

    const opneGallery = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: false,
        })
        console.log(result.data, 'result');
    }

    const openCamera = () => {
        const result = launchCamera({
            mediaType: 'photo',
            includeBase64: true
        })
        console.log(result);
    }

    return (
        <>
            <Modal
                visible={isOpen}
                transparent={true}
                onRequestClose={() => setIsOpen(false)}
            />
            <View style={styles.container}>
                <View style={styles.formContainer}>
                    <TextInput
                        placeholder="User Name"
                        onChangeText={(e) => setModel({ ...model, name: e })}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="CNIC"
                        keyboardType='number-pad'
                        onChangeText={(e) => setModel({ ...model, cnic: e })}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Maximum Loan"
                        onChangeText={(e) => setModel({ ...model, maxLoan: e })}
                        style={styles.input}
                        keyboardType='number-pad'
                    />
                    <TextInput
                        keyboardType='number-pad'
                        placeholder="Time Period"
                        onChangeText={(e) => setModel({ ...model, period: e })}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.button} onPress={submit}>
                        <Text style={styles.buttonText}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => post()}>
                        <Text style={styles.pera}>After Post Share the Guarantier Details</Text>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.galleryButton} onPress={opneGallery}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Open Gallery</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.galleryButton} onPress={openCamera}>
                            <Text style={{color: 'white', fontWeight: 'bold'}}>Open Camera</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

            {/* Modal for Name, Email, CNIC */}
            <Modal
                transparent={true}
                visible={isModalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            onChangeText={(e) => setModalForm({ ...modalForm, name: e })}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            keyboardType="email-address"
                            onChangeText={(e) => setModalForm({ ...modalForm, email: e })}
                        />
                        <TextInput
                            placeholder="CNIC"
                            style={styles.input}
                            keyboardType="number-pad"
                            onChangeText={(e) => setModalForm({ ...modalForm, cnic: e })}
                        />
                        <TouchableOpacity style={styles.button1} onPress={postForm}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
    },
    formContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
        width: '80%',
    },
    input: {
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 2,
        borderBottomColor: '#003C43',
        backgroundColor: '#FFFFFF',
        fontSize: 16,
        color: '#333333',
    },
    button: {
        backgroundColor: '#003C43',
        paddingVertical: 15,
        borderRadius: 25,
        marginTop: 20,
        alignItems: 'center',
    },
    button1: {
        backgroundColor: '#003C43',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
    },
    closeButton: {
        marginTop: 10,
        backgroundColor: '#FF0000',
        paddingVertical: 10,
        borderRadius: 25,
        width: '100%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    pera: {
        marginTop: 4,
        textAlign: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 10,
    },
    galleryButton: {
        backgroundColor: '#003C43',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 30,
        marginTop: 20,
        alignItems: 'center',
    },
    cameraButton: {
        backgroundColor: '#003C43',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 305,
        marginTop: 20,
        alignItems: 'center',
    },
});
