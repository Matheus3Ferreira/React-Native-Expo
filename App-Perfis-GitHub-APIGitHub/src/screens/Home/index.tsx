import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator, Image, TextInput, TouchableOpacity, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './style'

import api from '../../services/api';



function Home() {
    const [perfil, setPerfil] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                Perf_Dev
            </Text>

            <Image
                source={{ uri: 'https://st.depositphotos.com/1748335/1340/i/600/depositphotos_13408873-stock-photo-mean-bull.jpg' }}
                style={styles.imageDev}
            />

            <View style={styles.row}>
                <TextInput />
                <TouchableOpacity />
            </View>

            <View style={styles.row}>
                <Text>Nome: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Nome: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Id: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Repositorio: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Criado em: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Seguidores: </Text>
                <Text>Uiui</Text>
            </View>

            <View style={styles.row}>
                <Text>Seguindo: </Text>
                <Text>Uiui</Text>
            </View>

        </View >
    )
}


export default Home;
