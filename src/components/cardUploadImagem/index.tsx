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
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        // console.log(result);

        if (!result.canceled) {
            const selectedImage = result.assets[0].uri;
            setImage(selectedImage);
            onSelectImage(selectedImage);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        onSelectImage(''); // 🔧 Envia imagem vazia para Formik (campo vazio)
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