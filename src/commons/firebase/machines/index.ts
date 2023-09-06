import { firestore } from '~/commons/firebase';
import { Machine } from './types';

const collection = firestore.collection('machines');

export const find = async () => {
  const data = await collection.orderBy('order', 'asc').get();
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Machine));
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as Machine;
};
