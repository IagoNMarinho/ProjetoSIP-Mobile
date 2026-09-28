import { Platform } from 'react-native'
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const configuracao = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
}

// Evita inicializar duas vezes (Fast Refresh)
const jaInicializado = getApps().length > 0
const app = jaInicializado ? getApp() : initializeApp(configuracao)

// No React Native a sessão precisa ser persistida com o AsyncStorage
// No web (e na renderização do servidor) o getAuth padrão já resolve
export const autenticacao = jaInicializado || Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, {
      persistence: getReactNativePersistence(AsyncStorage),
    })

export const bancoDados = getFirestore(app)     // Firestore