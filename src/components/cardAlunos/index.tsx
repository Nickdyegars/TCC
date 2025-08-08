import { Container, Text, Image, Icon } from "./styles"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Aluno } from "../../types/types";

interface CardAlunosProps {
    aluno: Aluno;
    navigation?: any;
}

export function CardAlunos({ aluno, navigation }: CardAlunosProps) {

    const imageSource = typeof aluno.imagem === 'string'
        ? { uri: `data:image/jpeg;base64,${aluno.imagem}` }
        : aluno.imagem;

    const navigationPerfil = () => {
        navigation.navigate('PerfilAluno', { aluno });
    }

    return (
        <Container onPress={navigationPerfil}>
            {imageSource !== null ? (
                <Image source={imageSource} />
            ) : (
                <Image source={require("../../../assets/perfil.png")} />
            )}
            <Text>{aluno.nome}</Text>
            <Icon>
                <SimpleLineIcons name="options-vertical" size={24} color="black" />
            </Icon>
        </Container>
    )
}