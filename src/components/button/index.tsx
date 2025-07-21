import { Container, Text } from "./styles";

export function Button({text, onPress, style, borderRadius, ...props}: any) {
  return (
      <Container onPress={onPress} radius={props.radius} style={style}>
        <Text>{text}</Text>
      </Container>
  )
}