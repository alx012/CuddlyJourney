// api/save-note.ts
import { VercelRequest, VercelResponse } from '@vercel/node';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'YOUR_FIREBASE_API_KEY',
  authDomain: 'YOUR_PROJECT.firebaseapp.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT.appspot.com',
  messagingSenderId: 'SENDER_ID',
  appId: 'APP_ID',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { note, location } = req.body;

  try {
    await addDoc(collection(db, 'notes'), { note, location, timestamp: new Date() });
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, error: String(err) });
  }
}