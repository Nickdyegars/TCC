import { Container, Text, Image, Icon } from "./styles"
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

interface CardAlunosProps {
    image: any;
    name: string;
}

export function CardAlunos({ image, name }: CardAlunosProps) {
    return (
        <Container>
            <Image source={image}/>
            <Text>{name}</Text>
            <Icon>
                <SimpleLineIcons name="options-vertical" size={24} color="black" />
            </Icon>
        </Container>
    )
}