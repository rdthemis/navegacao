import React from 'react';
import { Text, View, } from 'react-native';

const Information = ({ route }) => {
    return (
        <View>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereco: {route.params?.endereco}</Text>
            <Text>Cidade: {route.params?.cidade}</Text>
            <Text>email: {route.params?.email}</Text>
        </View>
    );
}

export default Information;