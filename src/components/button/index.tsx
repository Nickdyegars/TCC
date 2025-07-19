import { Container, Text } from "./styles";

export function Button({text, onPress, style, ...props}: any) {
  return (
      <Container onPress={onPress} style={style}>
        <Text>{text}</Text>
      </Container>
  )
}