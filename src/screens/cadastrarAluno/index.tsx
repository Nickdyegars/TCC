import { Container, Text, ContainerTop, ContainerBody, ContainerBottom, Icon, ErrorText } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { EditText } from '../../components/editText';
import { useState } from 'react';
import { UploadImage } from '../../components/cardUploadImagem';
import { Button } from '../../components/button';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { maskPhone } from '../../utils/masks';
import { ref, set } from "firebase/database";
import { database } from "../../services/firebaseConfig";
import { Aluno } from '../../types/types';
import { v4 as uuidv4 } from 'uuid'
import 'react-native-get-random-values';
import Alunos from "../alunos";

export default function CadastrarAluno({ navigation }: any) {

    const validationSchema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
        contato: Yup.string().required('Contato é obrigatório'),
        email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    });

    const handleCadastrar = async (values: any) => {
        const result: Aluno = {
            id: uuidv4(),
            nome: values.nome,
            contato: values.contato,
            email: values.email,
            imagem: values.imagem
        } 
        await set(ref(database, `/alunos/${result.id}`), result);
        alert('Aluno cadastrado com sucesso');
        navigation.goBack();
        console.log(result);
    };

    return (
        <Container>
            <ContainerTop>
                <Icon onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Icon>
                <Text style={{ fontSize: 22 }}>Lista de alunos</Text>
            </ContainerTop>

            <Formik
                initialValues={{
                    nome: '',
                    contato: '',
                    email: '',
                    imagem: '',
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleCadastrar(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue }) => (
                    <>
                        <ContainerBody>
                            <EditText
                                text="Nome"
                                icone="none"
                                placeholder="Nome"
                                value={values.nome}
                                onChangeText={handleChange('nome')}
                                onBlur={handleBlur('nome')}
                            />
                            {errors.nome && touched.nome && <ErrorText>{errors.nome}</ErrorText>}
                            <EditText
                                text="Contato"
                                icone="none"
                                placeholder="Digite seu contato"
                                value={maskPhone(values.contato)}
                                onChangeText={(text: string) => setFieldValue('contato', maskPhone(text))}
                                onBlur={handleBlur('contato')}
                                keyboardType="numeric"
                            />
                            {errors.contato && touched.contato && <ErrorText>{errors.contato}</ErrorText>}
                            <EditText
                                text="Email"
                                icone="email"
                                placeholder="Digite seu email"
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                keyboardType="email-address"
                            />
                            {errors.email && touched.email && <ErrorText>{errors.email}</ErrorText>}
                            <UploadImage
                                onSelectImage={(img) => setFieldValue('imagem', img)}
                            />
                        </ContainerBody>
                        <ContainerBottom>
                            <Button text="Cadastrar Aluno" onPress={handleSubmit} />
                        </ContainerBottom>
                    </>
                )}
            </Formik>
        </Container>
    );
}