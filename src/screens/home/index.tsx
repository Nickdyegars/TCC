import { Container, Text } from "./styles";
import { Button } from "../../components/button";

export default function Home({navigation}: any) {

    const handleAlunos = () => {
        navigation.navigate('Alunos');
    }

    return (
        <Container>
            <Text>Home</Text>
            <Button text="Alunos" onPress={() => handleAlunos()} />
        </Container>
    );
}