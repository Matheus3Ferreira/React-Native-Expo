import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputLayout from '../../components/InputLayout';


export default function Home() {


    const [name, setName] = React.useState('');
    const [age, setAge] = React.useState(0);
    const [gender, setGender] = React.useState('');
    const [school, setSchool] = React.useState('');
    const [limitCard, setlimitCard] = React.useState(0);
    const [isBrazilian, setIsBrazilian] = React.useState(false);


    return (
        <View style={styles.container}>
            <InputLayout nameInput="Nome:" setOperation={setName} />
            <InputLayout nameInput="Nome:" setOperation={setAge} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingRight: 60,
    },

});
