import { Container, Text, ContainerTop, ContainerBody, ContainerBottom, Icon } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { CardAlunos } from "../../components/cardAlunos";
import { ScrollView } from "react-native";
import { Button } from "../../components/button";
import { useState, useEffect, use } from "react";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { app } from '../../services/firebaseConfig';
import { Aluno } from '../../types/types';
import { TextInput } from "react-native";
import SearchView from "../../components/searchView";

export default function Alunos({ navigation }: any) {

    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [alunosFiltrados, setAlunosFiltrados] = useState<Aluno[]>([]);
    const [searchVisible, setSearchVisible] = useState(false);


    useEffect(() => {
        handleBuscarAlunos();
    }, []);

    const handleFiltrarAlunos = (termo: string) => {
        const termoLower = termo.toLowerCase();
        const filtrados = alunos.filter((aluno) =>
            aluno.nome.toLowerCase().includes(termoLower)
        );
        setAlunosFiltrados(filtrados);
    };

    const handleBuscarAlunos = () => {
        const db = getDatabase(app);
        const listaRef = ref(db, `alunos`);

        const unsubscribe = onValue(listaRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const alunosArray: Aluno[] = Object.entries(data).map(
                    ([id, value]: [string, any]) => ({
                        id,
                        nome: value.nome || "Aluno sem nome",
                        contato: value.contato || "",
                        email: value.email || "",
                        imagem: value.imagem || null,
                    })
                );
                const sortedData = alunosArray.sort((a, b) => a.nome.localeCompare(b.nome));
                setAlunos(sortedData);
                setAlunosFiltrados(sortedData);
            } else {
                setAlunos([]);
                setAlunosFiltrados([]);
            }
        });

        return () => unsubscribe();
    };

    const handleVisibilityChange = (visible: boolean) => {
        setSearchVisible(visible);
        console.log("Search visível?", visible);
    };

    const handleAdicionarAluno = () => {
        navigation.navigate('CadastrarAluno');
    }

    return (
        <Container>
            <ScrollView>
                {searchVisible ? (
                    <ContainerTop>
                        <SearchView
                            onSearch={handleFiltrarAlunos}
                            onVisibilityChange={handleVisibilityChange}
                        />
                    </ContainerTop>
                ): (
                    <ContainerTop>
                        <Icon onPress={() => navigation.goBack()}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Icon>
                        <Text style={{ fontSize: 22 }}>Lista de alunos</Text>
                        <Icon onPress={() => setSearchVisible(true)}>
                            <MaterialIcons name="search" size={24} color="black" />
                        </Icon>
                    </ContainerTop>
                )}

                <ContainerBody>
                    {alunosFiltrados.map((aluno) => (
                        <CardAlunos
                            key={aluno.id}
                            aluno={aluno}
                            navigation={navigation}
                        />
                    ))}
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