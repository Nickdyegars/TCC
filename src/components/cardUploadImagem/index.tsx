import { Container, Text, UploadButton, UploadButtonText, ImageContainer, ImageStyled, RemoveButton } from "./styles";
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useState } from "react";
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

interface UploadImageProps {
    onSelectImage: (image: string) => void;
}

export function UploadImage({ onSelectImage }: UploadImageProps) {

    const [image, setImage] = useState<string | null>(null);

    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5, // compressão leve
            base64: true, 
        });

        if (!result.canceled) {
            const selected = result.assets[0];

            if (selected.base64) {
                const base64Data = `data:image/jpeg;base64,${selected.base64}`;
                setImage(base64Data); // mostra a imagem no componente
                onSelectImage(selected.base64); // envia a base64 pura (sem prefixo)
            }
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        onSelectImage(''); // Envia imagem vazia para Formik (campo vazio)
    };

    return (
        <Container>
            {!image ? (
                <UploadButton onPress={pickImage}>
                    <Feather name="upload" size={24} color="black" />
                    <UploadButtonText>Subir Imagem</UploadButtonText>
                </UploadButton>
            ) : (
                <ImageContainer>
                    <ImageStyled source={{ uri: image }} />
                    <RemoveButton onPress={handleRemoveImage}>
                        <FontAwesome name="remove" size={24} color="black" />
                    </RemoveButton>
                </ImageContainer>
            )}
        </Container>
    );
}