import {useContext} from 'react'
import {FirebaseError} from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth'
import {autenticacao, bancoDados} from '@/app/services/Firebase'
import {AutenticacaoContexto} from '@/app/context/AutenticacaoContexto'
import { doc, getDoc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore'

export type TipoConta = 'usuario' | 'instituicao'

// As funções de autenticação serão disponibilizadas como um Custom Hook
export function useAutenticacao(){

  // Esse hook depende do contexto AutenticacaoContexto para ser executado
  // Por segurança é recomendável testá-lo antes

  const autenticacaoContexto = useContext(AutenticacaoContexto)

  if (autenticacaoContexto === undefined) {
    throw new Error('Falta o <AutenticacaoProvider> na aplicação!')
  }

  // Garantida sua existencia, recupera os dados gerados  
  const { usuarioContexto, carregando, logarContexto, deslogarContexto } = autenticacaoContexto

  const criarAutenticacaoUsuario = async (email: string, senha: string): Promise<string> => {
    let retorno = 'sucesso'
    try {
      // Cria a autenticação do usuário e retorna suas credenciais
      await createUserWithEmailAndPassword(autenticacao, email, senha)
    } catch (error) {

      if (error instanceof FirebaseError) {

        switch (error.code) {
          case 'auth/email-already-in-use':
            retorno = `E-mail já utilizado por outra conta. ${error.code}`
            break

          default:
            retorno = `Erro na criação da autenticação do usuário! (${error.code}: ${error.message})`
            break          
        }
      } else {
            retorno = `Erro imprevisto! (${error})`
      }
    }
    return retorno
  }


  const validarUsuario = async (email: string, senha: string, tipo: TipoConta): Promise<string> => {
    let retorno = 'sucesso'
    try {
      // Verifica se o email e senha informados condizem com um usuário autenticado
      const credencial = await signInWithEmailAndPassword(autenticacao, email, senha)

      // Confere se a conta existe no tipo escolhido (as regras liberam a leitura para autenticados)
      const colecao = tipo === 'usuario' ? 'usuarios' : 'instituicoes'
      const documento = await getDoc(doc(bancoDados, colecao, credencial.user.uid))

      if (!documento.exists()) {
        await signOut(autenticacao)
        retorno = tipo === 'usuario'
          ? 'Esta conta não está cadastrada como usuário.'
          : 'Esta conta não está cadastrada como instituição.'
      }
    } catch (error) {

      if (error instanceof FirebaseError) {

        switch (error.code) {
          case 'auth/invalid-email':
            retorno = 'E-mail inválido.'
            break

          case 'auth/user-not-found':
          case 'auth/wrong-password':
          case 'auth/invalid-credential':
            retorno = 'E-mail ou senha incorretos.'
            break

          case 'auth/too-many-requests':
            retorno = 'Muitas tentativas. Tente novamente mais tarde.'
            break

          case 'auth/network-request-failed':
            retorno = 'Sem conexão com a internet.'
            break

          default:
            retorno = `Erro na autenticação do usuário! (${error.code}: ${error.message})`
            break         
        }
      } else {
        retorno = `Erro imprevisto! (${error})`
      }
    }
    return retorno
  }

  const deslogar = async (): Promise<string> => {
    let retorno = 'sucesso'
    try {
      await signOut(autenticacao)
    } catch (error) {

      if (error instanceof FirebaseError) {

        switch (error.code) {
          default:
            retorno = `Erro ao deslogar o usuário! (${error.code}: ${error.message})`
            break         
        }
      } else {
        retorno = `Erro imprevisto! (${error})`
      }
    }
    return retorno
  }

  const cadastrarUsuario = async (
    nome: string,
    email: string,
    senha: string,
    tipo: TipoConta
  ) => {
    try {
      const credencial = await createUserWithEmailAndPassword(autenticacao, email, senha)
      await updateProfile(credencial.user, { displayName: nome })
      const colecao = tipo === 'usuario' ? 'usuarios' : 'instituicoes'
      await setDoc(doc(bancoDados, colecao, credencial.user.uid), {
        nome,
        email,
        criadoEm: serverTimestamp(),
      })

      return 'sucesso'
    } catch (erro: any) {
      switch (erro.code) {
        case 'auth/email-already-in-use':
          return 'Este e-mail já está cadastrado.'
        case 'auth/invalid-email':
          return 'E-mail inválido.'
        case 'auth/weak-password':
          return 'A senha deve possuir pelo menos 6 caracteres.'
        case 'auth/network-request-failed':
          return 'Sem conexão com a internet.'
        default:
          return 'Não foi possível realizar o cadastro.'
      }
    }
  }

  const salvarPerfilOnboarding = async (dados: Record<string, unknown>): Promise<string> => {
    try {
      const uid = autenticacao.currentUser?.uid

      if (!uid) {
        return 'Usuário não autenticado.'
      }

      // O Firestore não aceita campos com valor undefined
      const dadosLimpos = Object.fromEntries(
        Object.entries(dados).filter(([, valor]) => valor !== undefined)
      )

      await updateDoc(doc(bancoDados, 'usuarios', uid), dadosLimpos)

      return 'sucesso'
    } catch (error) {
      if (error instanceof FirebaseError) {
        return `Erro ao salvar o perfil! (${error.code}: ${error.message})`
      }

      return `Erro imprevisto! (${error})`
    }
  }

  return {criarAutenticacaoUsuario, validarUsuario, deslogar, logarContexto, deslogarContexto, salvarPerfilOnboarding, usuarioContexto, carregando, cadastrarUsuario }
}