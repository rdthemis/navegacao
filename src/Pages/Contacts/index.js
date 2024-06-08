import React from 'react';
import { Text, View, } from 'react-native';

const Contacts = ({ navigation }) => {
    return (
        <View>
            <View>
                <Text>Nome: João da Silva</Text>
                <Text>Telefone: (44) 99811-4493</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                        nome: 'João da Silva',
                        telefone: '(44) 99811-4493',
                        endereco: 'Rua Guarani 191',
                        cidade: 'Corumbataí do Sul - PR',
                        email: 'joao_da_silva@email.com'
                    }
                )}
                >Information...</Text>
            </View>
            <View>
                <Text>Nome: José Antonio</Text>
                <Text>Telefone: (44) 99832-4343</Text>
                <Text onPress={() => navigation.navigate('Information',
                    {
                        nome: 'José Antonio',
                        telefone: '(44) 99832-4343',
                        endereco: 'Av. Caramuru 231',
                        cidade: 'Corumbataí do Sul - PR',
                        email: 'jose_antonio@email.com'
                    }
                )}
                >Information...</Text>
            </View>
        </View>
    );
}

export default Contacts;