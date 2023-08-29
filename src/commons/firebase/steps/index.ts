import { firestore } from '~/commons/firebase';
import { Step } from './types';

const collection = firestore.collection('steps');

const ID = 'fqcnFrbME85V3QQqgNjZ';

export const find = async () => {
  const data = await collection.doc(ID).get();
  return { ...data.data() } as Step;
};

export const release = async (key: keyof Step) => {
  await collection.doc(ID).update({ [key]: true });
  return find();
};

export const disable = async (key: keyof Step) => {
  await collection.doc(ID).update({ [key]: false });
  return find();
};
