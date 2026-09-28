import MaterialIcons from "@react-native-vector-icons/material-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { Atividade } from "./components/Atividade";
import { Badge } from "./components/Badge";
import { Stat } from "./components/Stat";
import { PERFIL_PADRAO, STORAGE_KEY } from "./constants/perfil";
import { PerfilDados } from "./types/Perfil";
import { styles } from "./styles/styles";

export default function Perfil() {
  const [perfil, setPerfil] = useState<PerfilDados>(PERFIL_PADRAO);
  const [editar, setEditar] = useState(false);
  const [nome, setNome] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    carregarPerfil();
  }, []);

  async function carregarPerfil() {
    try {
      const salvo = await AsyncStorage.getItem(STORAGE_KEY);

      if (salvo) {
        const dados = JSON.parse(salvo);

        setPerfil({
          ...PERFIL_PADRAO,
          ...dados,
        });
      }
    } catch (erro) {
      console.log("Erro ao carregar perfil:", erro);
    } finally {
      setCarregando(false);
    }
  }

  async function salvarPerfil() {
    if (nome.trim().length < 3) {
      Alert.alert(
        "Nome inválido",
        "O nome deve ter no mínimo 3 caracteres."
      );
      return;
    }

    if (username.trim().length < 3) {
      Alert.alert(
        "Username inválido",
        "O username deve ter no mínimo 3 caracteres."
      );
      return;
    }

    if (bio.length > 150) {
      Alert.alert(
        "Bio muito longa",
        "A bio pode ter no máximo 150 caracteres."
      );
      return;
    }

    const novoPerfil: PerfilDados = {
      ...perfil,
      nome: nome.trim(),
      username: username.trim(),
      bio: bio.trim() || "Fale um pouco sobre você!",
    };

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novoPerfil)
      );

      setPerfil(novoPerfil);
      setEditar(false);

      Alert.alert(
        "Sucesso",
        "Perfil atualizado com sucesso!"
      );
    } catch (erro) {
      console.log("Erro ao salvar perfil:", erro);

      Alert.alert(
        "Erro",
        "Não foi possível salvar as alterações."
      );
    }
  }

  function abrirEdicao() {
    setNome(perfil.nome);
    setUsername(perfil.username);
    setBio(perfil.bio);
    setEditar(true);
  }

  function cancelarEdicao() {
    setEditar(false);
  }

  async function trocarFoto() {
    const permissao =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissao.granted) {
      Alert.alert(
        "Permissão necessária",
        "Permita o acesso às fotos para escolher uma foto de perfil."
      );
      return;
    }

    const resultado =
      await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.85,
      });

    if (
      resultado.canceled ||
      !resultado.assets?.length
    ) {
      return;
    }

    const foto = resultado.assets[0].uri;

    const novoPerfil = {
      ...perfil,
      foto,
    };

    setPerfil(novoPerfil);

    try {
      await AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(novoPerfil)
      );

      Alert.alert(
        "Sucesso",
        "Foto de perfil atualizada!"
      );
    } catch (erro) {
      console.log("Erro ao salvar foto:", erro);
    }
  }

  if (carregando) {
    return (
      <LinearGradient
        colors={["#73DDF3", "#6FAFEF", "#6575E8"]}
        style={styles.carregando}
      >
        <MaterialIcons
          name="person"
          size={45}
          color="#FFFFFF"
        />

        <Text style={styles.carregandoTexto}>
          Carregando perfil...
        </Text>
      </LinearGradient>
    );
  }

  return (
    <LinearGradient
      colors={["#73DDF3", "#6FAFEF", "#6575E8"]}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.perfilCard}>
          <View style={styles.banner}>
            <View style={styles.bolha1} />
            <View style={styles.bolha2} />
            <View style={styles.bolha3} />

            <Text style={styles.bannerTexto}>
              MEU PERFIL
            </Text>
          </View>

          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              {perfil.foto ? (
                <Image
                  source={{ uri: perfil.foto }}
                  style={styles.avatarImagem}
                />
              ) : (
                <MaterialIcons
                  name="person"
                  size={85}
                  color="#FFFFFF"
                />
              )}
            </View>

            <Pressable
              style={styles.botaoFoto}
              onPress={trocarFoto}
            >
              <MaterialIcons
                name="edit"
                size={20}
                color="#FFFFFF"
              />
            </Pressable>
          </View>

          <View style={styles.infoPerfil}>
            <Text style={styles.nome}>
              {perfil.nome}
            </Text>

            {perfil.username ? (
              <Text style={styles.username}>
                @{perfil.username}
              </Text>
            ) : null}

            {perfil.email ? (
              <Text style={styles.email}>
                {perfil.email}
              </Text>
            ) : null}

            <View style={styles.level}>
              <MaterialIcons
                name="water-drop"
                size={17}
                color="#315DBD"
              />

              <Text style={styles.levelTexto}>
                Bebedouro de Água
              </Text>
            </View>

            <Text style={styles.bio}>
              {perfil.bio}
            </Text>

            <View style={styles.stats}>
              <Stat valor="12" texto="Amigos" />
              <Stat valor="120" texto="Análises" />
              <Stat valor="97%" texto="Água Potável" />
              <Stat
                valor="18"
                texto="Dias Consecutivos"
              />
            </View>

            <Pressable
              style={styles.botaoEditar}
              onPress={abrirEdicao}
            >
              <MaterialIcons
                name="edit"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.botaoEditarTexto}>
                Editar Perfil
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.tituloCardLinha}>
            <View style={styles.iconeTitulo}>
              <MaterialIcons
                name="emoji-events"
                size={23}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.tituloCard}>
              Conquistas
            </Text>
          </View>

          <View style={styles.badges}>
            <Badge
              texto="Primeira Detecção"
              icone="water-drop"
            />

            <Badge
              texto="100 Análises"
              icone="analytics"
            />

            <Badge
              texto="Guardião"
              icone="shield"
            />

            <Badge
              texto="Mestre Ambiental"
              icone="eco"
            />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.tituloCardLinha}>
            <View style={styles.iconeTitulo}>
              <MaterialIcons
                name="history"
                size={23}
                color="#FFFFFF"
              />
            </View>

            <Text style={styles.tituloCard}>
              Atividade Recente
            </Text>
          </View>

          <Atividade
            icone="water-drop"
            texto="Detectou água do Rio Azul"
          />

          <Atividade
            icone="local-drink"
            texto="Registrou 500 ml de água"
          />

          <Atividade
            icone="emoji-events"
            texto="Nova conquista desbloqueada"
          />

          <Atividade
            icone="trending-up"
            texto="Sequência de 18 dias"
          />
        </View>
      </ScrollView>

      <Modal
        visible={editar}
        transparent
        animationType="fade"
        onRequestClose={cancelarEdicao}
      >
        <KeyboardAvoidingView
          style={styles.modalOverlay}
          behavior={
            Platform.OS === "ios"
              ? "padding"
              : undefined
          }
        >
          <View style={styles.modal}>
            <View style={styles.modalTituloLinha}>
              <View style={styles.modalIcone}>
                <MaterialIcons
                  name="person"
                  size={25}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.modalTitulo}>
                Editar Perfil
              </Text>
            </View>

            <Text style={styles.label}>Nome</Text>

            <TextInput
              value={nome}
              onChangeText={setNome}
              placeholder="Nome"
              placeholderTextColor="#8197AD"
              style={styles.input}
            />

            <Text style={styles.label}>
              Username
            </Text>

            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Username"
              placeholderTextColor="#8197AD"
              autoCapitalize="none"
              style={styles.input}
            />

            <View style={styles.bioLabelLinha}>
              <Text style={styles.label}>Bio</Text>

              <Text style={styles.contador}>
                {bio.length}/150
              </Text>
            </View>

            <TextInput
              value={bio}
              onChangeText={setBio}
              placeholder="Fale um pouco sobre você!"
              placeholderTextColor="#8197AD"
              multiline
              maxLength={150}
              textAlignVertical="top"
              style={[
                styles.input,
                styles.inputBio,
              ]}
            />

            <View style={styles.botoesModal}>
              <Pressable
                style={styles.botaoSalvar}
                onPress={salvarPerfil}
              >
                <MaterialIcons
                  name="check"
                  size={20}
                  color="#FFFFFF"
                />

                <Text style={styles.botaoSalvarTexto}>
                  Salvar
                </Text>
              </Pressable>

              <Pressable
                style={styles.botaoCancelar}
                onPress={cancelarEdicao}
              >
                <Text
                  style={styles.botaoCancelarTexto}
                >
                  Cancelar
                </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </LinearGradient>
  );
}