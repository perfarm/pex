import { firestore } from '~/commons/firebase';
import { ProductionInput } from '~/commons/firebase/production-inputs/types';
import { User, UserData } from './types';

const collection = firestore.collection('users');

export const create = async (data: UserData) => {
  const user = await collection.add(data);
  return findById(user.id);
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as User;
};

export const findByEmailAndCPF = async (email: string, cpf: string) => {
  const data = await collection.where('email', '==', email).where('cpf', '==', cpf).get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as User;
};

export const findByEmail = async (email: string) => {
  const data = await collection.where('email', '==', email).get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as User;
};

export const saveProductionInput = async (userId: string, productionInput: ProductionInput) => {
  await collection.doc(userId).update({ productionInput });
  return findById(userId);
};
