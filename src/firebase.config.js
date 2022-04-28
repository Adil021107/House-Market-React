import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyAqmakJOd5mc7xpQfNotU6cYLyOS9FViEI',
	authDomain: 'house-market-b5e20.firebaseapp.com',
	projectId: 'house-market-b5e20',
	storageBucket: 'house-market-b5e20.appspot.com',
	messagingSenderId: '647895877109',
	appId: '1:647895877109:web:71711bc572b5e217de4cbc',
}

export const db = getFirestore()
