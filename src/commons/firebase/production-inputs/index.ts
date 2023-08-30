import { firestore } from '~/commons/firebase';
import { ProductionInput } from './types';

const collection = firestore.collection('production_inputs');

export const find = async () => {
  const data = await collection.get();
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as ProductionInput));
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as ProductionInput;
};
