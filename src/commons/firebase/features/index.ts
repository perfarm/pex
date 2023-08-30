import { firestore } from '~/commons/firebase';
import { Feature } from './types';

const collection = firestore.collection('features');

const ID = 'fqcnFrbME85V3QQqgNjZ';

export const find = async () => {
  const data = await collection.doc(ID).get();
  return { id: data.id, ...data.data() } as any as Feature;
};

export const release = async (key: keyof Feature) => {
  await collection.doc(ID).update({ [key]: true });
  return find();
};

export const disable = async (key: keyof Feature) => {
  await collection.doc(ID).update({ [key]: false });
  return find();
};
