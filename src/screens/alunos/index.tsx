import { Container, Text, ContainerTop, ContainerBody, ContainerBottom, Icon } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CardAlunos } from "../../components/cardAlunos";
import { ScrollView } from "react-native";
import { Button } from "../../components/button";

export default function Alunos({ navigation }: any) {

    const handleAdicionarAluno = () => {
        navigation.navigate('CadastrarAluno');
    }

    return (
        <Container>
            <ScrollView>
                <ContainerTop>
                    <Icon onPress={() => navigation.goBack()}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </Icon>
                    <Text style={{ fontSize: 22 }}>Lista de alunos</Text>
                    <Icon>
                        <MaterialIcons name="search" size={24} color="black" />
                    </Icon>
                </ContainerTop>
                <ContainerBody>
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                    <CardAlunos
                        image={require('../../../assets/perfil.png')}
                        name="João Silva"
                    />
                </ContainerBody>
            </ScrollView>
            <ContainerBottom>
                <Button
                    text="+"
                    style={{ width: 50, height: 50 }}
                    radius={32}
                    onPress={() => handleAdicionarAluno()}
                />
            </ContainerBottom>
        </Container>
    );
}