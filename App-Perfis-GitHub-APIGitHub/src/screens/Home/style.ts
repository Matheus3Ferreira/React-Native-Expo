import { StyleSheet } from 'react-native';
import { RobotoMono_500Medium } from '@expo-google-fonts/roboto-mono';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: 'RobotoMono_500Medium',
        fontSize: 32,
        marginBottom: 15,
    },
    imageDev: {
        height: 200,
        width: 200,
    },
    row: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    input: {
        width: '70%',
        height: 20,
    },
    btn: {
        width: 20,
        height: 20,
    },

});
