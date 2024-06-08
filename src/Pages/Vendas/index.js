import React, { useState } from 'react';
import { Text, View, TextInput } from 'react-native';
import Styles from './css';

const Vendas = ({ navigation }) => {

    const [nome, setNome] = useState()

    return (
        <View>
            <View>
                <Text onPress={() => navigation.navigate('Financeiro')}>Financeiro...</Text>
            </View>
            <View>
                <Text>Nome:</Text>
                <TextInput value={nome} alt='Nome' style={Styles.textInput} />
            </View>
        </View>
    );
}

export default Vendas;