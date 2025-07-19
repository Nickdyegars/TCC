import React from 'react';
import { Container, ContainerLogo, ContainerBody, Text } from './styles';
import { EditText } from '../../components/editText';
import { Button } from '../../components/button';

export default function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <Container>
            <ContainerLogo>
                <Text>Logo</Text>
            </ContainerLogo>
            <ContainerBody>
                <EditText
                    text="Email"
                    icone="email"
                    placeholder="Digite seu email"
                    keyboardType="email-address"
                    onChangeText={(text: string) => setEmail(text)}
                />
                <EditText
                    text="Senha"
                    icone="eye-with-line"
                    isPassword={true}
                    placeholder="Digite sua senha"
                    onChangeText={(text: string) => setPassword(text)}
                />
                <Text style={{ marginTop: 16 }}>Esqueci minha senha</Text>
                <Button style={{ marginTop: 16, width: '100%' }} text="Entrar" onPress={() => {}} />
            </ContainerBody>
        </Container>
    );
}