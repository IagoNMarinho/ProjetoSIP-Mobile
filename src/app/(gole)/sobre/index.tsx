import MaterialIcons from "@react-native-vector-icons/material-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Linking,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

import { NivelCard } from "./components/NivelCard";
import {
  niveisPH,
  niveisTDS,
  niveisTurbidez,
} from "./constants/niveis";
import { Aba } from "./types/Sobre";
import { styles } from "./styles/styles";

export default function Sobre() {
  const [aba, setAba] = useState<Aba>("projeto");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function enviarMensagem() {
    if (!email.trim()) {
      Alert.alert("Atenção", "Digite seu e-mail.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Atenção", "Digite um e-mail válido.");
      return;
    }

    if (mensagem.trim().length < 12) {
      Alert.alert(
        "Atenção",
        "A mensagem precisa ter pelo menos 12 caracteres."
      );
      return;
    }

    Alert.alert(
      "Mensagem enviada",
      `Mensagem enviada com sucesso! Em breve entraremos em contato pelo e-mail ${email}.`
    );

    setEmail("");
    setMensagem("");
  }

  function abrirInstagram() {
    Linking.openURL(
      "https://www.instagram.com/oprojetosip/"
    );
  }

  return (
    <LinearGradient
      colors={["#72DDF3", "#7CCFF4", "#6677E8"]}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        <View style={styles.menuTopo}>
          <Pressable
            style={[
              styles.menuItem,
              aba === "projeto" && styles.menuItemAtivo,
            ]}
            onPress={() => setAba("projeto")}
          >
            <MaterialIcons
              name="water-drop"
              size={18}
              color={
                aba === "projeto"
                  ? "#FFFFFF"
                  : "#164B91"
              }
            />

            <Text
              style={[
                styles.menuTexto,
                aba === "projeto" &&
                  styles.menuTextoAtivo,
              ]}
            >
              Projeto
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.menuItem,
              aba === "metodologia" &&
                styles.menuItemAtivo,
            ]}
            onPress={() => setAba("metodologia")}
          >
            <MaterialIcons
              name="science"
              size={18}
              color={
                aba === "metodologia"
                  ? "#FFFFFF"
                  : "#164B91"
              }
            />

            <Text
              style={[
                styles.menuTexto,
                aba === "metodologia" &&
                  styles.menuTextoAtivo,
              ]}
            >
              Metodologia
            </Text>
          </Pressable>

          <Pressable
            style={[
              styles.menuItem,
              aba === "contato" && styles.menuItemAtivo,
            ]}
            onPress={() => setAba("contato")}
          >
            <MaterialIcons
              name="mail-outline"
              size={18}
              color={
                aba === "contato"
                  ? "#FFFFFF"
                  : "#164B91"
              }
            />

            <Text
              style={[
                styles.menuTexto,
                aba === "contato" &&
                  styles.menuTextoAtivo,
              ]}
            >
              Contato
            </Text>
          </Pressable>
        </View>

        {aba === "projeto" && (
          <View>
            <View style={styles.heroProjeto}>
              <View style={styles.heroTexto}>
                <Text style={styles.tag}>
                  PROJETO SIP
                </Text>

                <Text style={styles.tituloGrande}>
                  O que é e o que fazemos?
                </Text>

                <Text style={styles.textoHero}>
                  Um sistema criado por alunos da ETEC
                  de Hortolândia, a fim de garantir um
                  consumo seguro da água escolar!
                </Text>
              </View>

              <View style={styles.logoContainer}>
                <View style={styles.logoCirculo}>
                  <MaterialIcons
                    name="water-drop"
                    size={76}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.logoTexto}>
                  SIP
                </Text>
              </View>
            </View>

            <Text style={styles.tituloSecao}>
              SERVIÇOS SIP
            </Text>

            <View style={styles.servicoCard}>
              <View style={styles.iconeCard}>
                <MaterialIcons
                  name="sensors"
                  size={30}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.cardTitulo}>
                Detecção
              </Text>

              <Text style={styles.cardTexto}>
                O SIP utiliza um dispositivo com placa
                Arduino e sensores de pH, TDS, turbidez
                e temperatura para monitorar a qualidade
                da água nos reservatórios. O sistema
                emite alertas quando a água estiver
                imprópria para consumo, permitindo que
                escolas e equipes de manutenção ajam
                rapidamente.
              </Text>
            </View>

            <View style={styles.servicoCard}>
              <View style={styles.iconeCard}>
                <MaterialIcons
                  name="monitor"
                  size={30}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.cardTitulo}>
                Consulta
              </Text>

              <Text style={styles.cardTexto}>
                Escolas, profissionais e alunos podem
                consultar, em tempo real, os resultados
                da potabilidade da água e receber
                notificações preventivas para garantir
                um consumo seguro. Além disso, todos
                têm acesso ao histórico das detecções,
                permitindo acompanhar a evolução da
                qualidade da água ao longo do tempo e
                identificar possíveis alterações nos
                reservatórios.
              </Text>
            </View>

            <View style={styles.servicoCard}>
              <View style={styles.iconeCard}>
                <MaterialIcons
                  name="info-outline"
                  size={30}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.cardTitulo}>
                Informação
              </Text>

              <Text style={styles.cardTexto}>
                O sistema oferece um mapa com alertas
                sobre a qualidade da água em outras
                escolas, além de permitir que o usuário
                defina metas de consumo diário de água.
                Também disponibiliza conteúdos educativos
                sobre os parâmetros monitorados (pH,
                turbidez, TDS e temperatura) e explica
                como esses indicadores contribuem para
                um consumo de água seguro.
              </Text>
            </View>

            <View style={styles.equipeContainer}>
              <Text style={styles.tituloSecaoEscuro}>
                NOSSA EQUIPE
              </Text>

              <Text style={styles.subtituloEquipe}>
                Conheça os estudantes responsáveis pelo
                projeto SIP.
              </Text>

              <View style={styles.equipeCard}>
                <View style={styles.avatar}>
                  <MaterialIcons
                    name="person"
                    size={48}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nomePessoa}>
                  Arthur Soares
                </Text>

                <Text style={styles.funcaoPessoa}>
                  Estudante - Desenvolvedor de Sistemas
                </Text>

                <Text style={styles.bioPessoa}>
                  Tenho 17 anos e sou estudante do curso
                  técnico de Desenvolvimento de Sistemas
                  integrado ao Ensino Médio na ETEC de
                  Hortolândia. Busco contribuir com
                  planejamento, organização e criatividade
                  em todos os projetos dos quais participo,
                  desenvolvendo elementos gráficos
                  autorais e priorizando a qualidade em
                  cada etapa do processo.
                </Text>
              </View>

              <View style={styles.equipeCard}>
                <View style={styles.avatar}>
                  <MaterialIcons
                    name="person"
                    size={48}
                    color="#FFFFFF"
                  />
                </View>

                <Text style={styles.nomePessoa}>
                  Iago Marinho
                </Text>

                <Text style={styles.funcaoPessoa}>
                  Estudante - Desenvolvedor de Sistemas
                </Text>

                <Text style={styles.bioPessoa}>
                  Jovem de 18 anos, cursando Técnico em
                  Desenvolvimento de Sistemas integrado
                  ao Ensino Médio na instituição de ensino
                  Etec Hortolândia. Valorizo as experiências
                  e aprendizados adquiridos ao longo da
                  minha trajetória, buscando evoluir
                  continuamente, aprimorar minhas
                  competências e estar preparado para
                  futuras oportunidades profissionais.
                </Text>
              </View>
            </View>
          </View>
        )}

        {aba === "metodologia" && (
          <View>
            <View style={styles.metodologiaHeader}>
              <Text style={styles.tituloMetodologia}>
                Metodologia
              </Text>

              <Text style={styles.subtituloMetodologia}>
                Entenda os sensores do projeto SIP!
              </Text>
            </View>

            <View style={styles.metodologiaCard}>
              <View style={styles.metodologiaTituloLinha}>
                <MaterialIcons
                  name="waves"
                  size={28}
                  color="#164B91"
                />

                <View>
                  <Text style={styles.metodologiaTitulo}>
                    PH
                  </Text>

                  <Text style={styles.metodologiaSubtitulo}>
                    Indicativo de acidez
                  </Text>
                </View>
              </View>

              <Text style={styles.metodologiaTexto}>
                O sensor de pH é um dispositivo utilizado
                para medir o grau de acidez, neutralidade
                ou alcalinidade de uma solução aquosa. A
                escala de pH varia de 0 a 14, sendo que
                valores menores que 7 indicam soluções
                ácidas, iguais a 7 indicam soluções neutras
                e maiores que 7 representam soluções
                básicas.
              </Text>

              <Text style={styles.metodologiaTexto}>
                Seu funcionamento é baseado em um eletrodo
                de vidro sensível aos íons hidrogênio (H+)
                presentes na água. Quando o eletrodo é
                imerso na solução, ocorre uma diferença de
                potencial elétrico entre o eletrodo de
                medição e o eletrodo de referência.
              </Text>

              <Text style={styles.metodologiaTexto}>
                O circuito eletrônico do módulo amplifica
                esse pequeno sinal elétrico e o envia ao
                Arduino como um sinal analógico. A partir
                desse valor, o microcontrolador realiza os
                cálculos necessários para determinar o pH
                da solução.
              </Text>

              <Text style={styles.metodologiaTexto}>
                Como a resposta do eletrodo sofre influência
                da temperatura e do desgaste natural do
                sensor, recomenda-se realizar calibrações
                periódicas utilizando soluções tampão de
                pH conhecido.
              </Text>

              {niveisPH.map((nivel) => (
                <NivelCard
                  key={nivel.titulo}
                  nivel={nivel}
                />
              ))}
            </View>

            <View style={styles.metodologiaCard}>
              <View style={styles.metodologiaTituloLinha}>
                <MaterialIcons
                  name="blur-on"
                  size={28}
                  color="#164B91"
                />

                <View>
                  <Text style={styles.metodologiaTitulo}>
                    Turbidez
                  </Text>

                  <Text style={styles.metodologiaSubtitulo}>
                    Indicativo de partículas em suspensão
                  </Text>
                </View>
              </View>

              <Text style={styles.metodologiaTexto}>
                A turbidez indica a quantidade de partículas
                em suspensão presentes na água. Essas
                partículas podem alterar a passagem da luz
                pela solução.
              </Text>

              <Text style={styles.metodologiaTexto}>
                O sensor utiliza uma fonte de luz, como um
                LED, e um fototransistor para analisar a
                quantidade de luz que atravessa ou é
                dispersada pela água. Esse comportamento
                está relacionado ao efeito Tyndall.
              </Text>

              <Text style={styles.metodologiaTexto}>
                A medição é apresentada em NTU e necessita
                de calibração para obter resultados
                consistentes.
              </Text>

              {niveisTurbidez.map((nivel) => (
                <NivelCard
                  key={nivel.titulo}
                  nivel={nivel}
                />
              ))}
            </View>

            <View style={styles.metodologiaCard}>
              <View style={styles.metodologiaTituloLinha}>
                <MaterialIcons
                  name="water"
                  size={28}
                  color="#164B91"
                />

                <View>
                  <Text style={styles.metodologiaTitulo}>
                    TDS
                  </Text>

                  <Text style={styles.metodologiaSubtitulo}>
                    Total de Sólidos Dissolvidos
                  </Text>
                </View>
              </View>

              <Text style={styles.metodologiaTexto}>
                TDS significa Total de Sólidos Dissolvidos.
                A medição está relacionada à condutividade
                elétrica da água e à presença de íons
                dissolvidos.
              </Text>

              <Text style={styles.metodologiaTexto}>
                O resultado normalmente é apresentado em
                ppm. É importante destacar que o TDS não
                identifica quais substâncias estão presentes
                na água e não determina diretamente a
                potabilidade.
              </Text>

              {niveisTDS.map((nivel) => (
                <NivelCard
                  key={nivel.titulo}
                  nivel={nivel}
                />
              ))}
            </View>

            <View style={styles.metodologiaCard}>
              <View style={styles.metodologiaTituloLinha}>
                <MaterialIcons
                  name="thermostat"
                  size={28}
                  color="#164B91"
                />

                <View>
                  <Text style={styles.metodologiaTitulo}>
                    Temperatura
                  </Text>

                  <Text style={styles.metodologiaSubtitulo}>
                    Indicativo de temperatura
                  </Text>
                </View>
              </View>

              <Text style={styles.metodologiaTexto}>
                O projeto utiliza o sensor DS18B20 para
                realizar a medição da temperatura. O sensor
                possui faixa de operação de aproximadamente
                -55°C a +125°C e utiliza comunicação 1-Wire.
              </Text>

              <Text style={styles.metodologiaTexto}>
                A temperatura também pode influenciar outras
                medições realizadas pelo sistema.
              </Text>

              <View style={styles.influenciaCard}>
                <MaterialIcons
                  name="science"
                  size={25}
                  color="#FFFFFF"
                />

                <Text style={styles.influenciaTitulo}>
                  Influência para PH
                </Text>

                <Text style={styles.influenciaTexto}>
                  A temperatura altera a resposta
                  eletroquímica do eletrodo, sendo necessária
                  compensação adequada.
                </Text>
              </View>

              <View style={styles.influenciaCard}>
                <MaterialIcons
                  name="water"
                  size={25}
                  color="#FFFFFF"
                />

                <Text style={styles.influenciaTitulo}>
                  Influência para TDS
                </Text>

                <Text style={styles.influenciaTexto}>
                  O aumento da temperatura pode aumentar a
                  condutividade da água, sendo utilizada
                  compensação automática de temperatura.
                </Text>
              </View>

              <View style={styles.influenciaCard}>
                <MaterialIcons
                  name="visibility"
                  size={25}
                  color="#FFFFFF"
                />

                <Text style={styles.influenciaTitulo}>
                  Influência para Turbidez
                </Text>

                <Text style={styles.influenciaTexto}>
                  A influência da temperatura é praticamente
                  inexistente considerando o princípio óptico
                  utilizado na medição.
                </Text>
              </View>
            </View>
          </View>
        )}

        {aba === "contato" && (
          <View>
            <View style={styles.contatoHeader}>
              <Text style={styles.tituloContato}>
                FALE CONOSCO!
              </Text>

              <Text style={styles.subtituloContato}>
                Conheça nossos meios de comunicação
              </Text>
            </View>

            <View style={styles.formCard}>
              <Text style={styles.labelInput}>
                Email:
              </Text>

              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Digite seu e-mail"
                placeholderTextColor="#7294B5"
                keyboardType="email-address"
                autoCapitalize="none"
                style={styles.input}
              />

              <Text style={styles.labelInput}>
                Mensagem:
              </Text>

              <TextInput
                value={mensagem}
                onChangeText={setMensagem}
                placeholder="Digite sua mensagem"
                placeholderTextColor="#7294B5"
                multiline
                textAlignVertical="top"
                style={styles.textarea}
              />

              <Pressable
                style={styles.botaoEnviar}
                onPress={enviarMensagem}
              >
                <Text style={styles.textoBotaoEnviar}>
                  Enviar mensagem
                </Text>

                <MaterialIcons
                  name="send"
                  size={20}
                  color="#FFFFFF"
                />
              </Pressable>
            </View>

            <View style={styles.mascoteCard}>
              <View style={styles.mascoteCirculo}>
                <MaterialIcons
                  name="water-drop"
                  size={90}
                  color="#FFFFFF"
                />
              </View>

              <Text style={styles.mascoteTitulo}>
                SIP
              </Text>

              <Text style={styles.mascoteTexto}>
                Sistema Informativo de Potabilidade
              </Text>
            </View>

            <View style={styles.contatoCard}>
              <MaterialIcons
                name="phone"
                size={38}
                color="#1676B5"
              />

              <Text style={styles.contatoTitulo}>
                Telefone
              </Text>

              <Text style={styles.contatoValor}>
                (+55) 19 1111111-1111
              </Text>

              <Text style={styles.contatoDescricao}>
                nosso número de telefone para contato direto
              </Text>
            </View>

            <Pressable
              style={styles.contatoCard}
              onPress={abrirInstagram}
            >
              <MaterialIcons
                name="camera-alt"
                size={38}
                color="#1676B5"
              />

              <Text style={styles.contatoTitulo}>
                Instagram
              </Text>

              <Text style={styles.contatoValor}>
                @oprojetosip
              </Text>

              <Text style={styles.contatoDescricao}>
                nossa página no Instagram para contato direto
              </Text>
            </Pressable>

            <View style={styles.contatoCard}>
              <MaterialIcons
                name="email"
                size={38}
                color="#1676B5"
              />

              <Text style={styles.contatoTitulo}>
                E-mail
              </Text>

              <Text style={styles.contatoValor}>
                oprojetosip@gmail.com
              </Text>

              <Text style={styles.contatoDescricao}>
                nosso e-mail para contato direto
              </Text>
            </View>

            <Pressable
              style={styles.voltarSite}
              onPress={() => router.back()}
            >
              <MaterialIcons
                name="arrow-back"
                size={20}
                color="#FFFFFF"
              />

              <Text style={styles.voltarSiteTexto}>
                Voltar
              </Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}