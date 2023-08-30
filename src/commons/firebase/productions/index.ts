import { firestore } from '~/commons/firebase';
import { Production } from './types';

const collection = firestore.collection('productions');

export const find = async () => {
  const data = await collection.get();
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Production));
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as Production;
};
