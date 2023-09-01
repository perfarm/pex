import { firestore } from '~/commons/firebase';
import { ProductionInput } from '~/commons/firebase/production-inputs/types';
import { Machine } from '../machines/types';
import { Production } from '../productions/types';
import { User, UserData } from './types';

const collection = firestore.collection('users');

export const create = async (data: UserData) => {
  const feature = { 'REGISTER': true };
  const user = await collection.add({ ...data, feature });

  return findById(user.id);
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as User;
};

export const find = async () => {
  const data = await collection.get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as User);
};

export const findByEmailAndCPF = async (email: string, cpf: string) => {
  const data = await collection.where('email', '==', email).where('cpf', '==', cpf).get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as User;
};

export const findByEmail = async (email: string) => {
  const data = await collection.where('email', '==', email).get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as User;
};

export const findByCPF = async (cpf: string) => {
  const data = await collection.where('cpf', '==', cpf).get()
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))[0] as User;
};

export const saveProductionInput = async (userId: string, productionInput: ProductionInput) => {
  const user = await findById(userId);
  const feature = { ...user.feature, 'SELECT_PRODUCTION_INPUT': true };

  await collection.doc(userId).update({ productionInput, feature });

  return findById(userId);
};

export const saveMachine = async (userId: string, machine: Machine) => {
  const user = await findById(userId);
  const feature = { ...user.feature, 'SELCET_MACHINE': true };

  await collection.doc(userId).update({ machine, feature });

  return findById(userId);
};

export const saveProduction = async (userId: string, production: Production) => {
  const user = await findById(userId);
  const feature = { ...user.feature, 'SELECT_PRODUCTION': true };

  await collection.doc(userId).update({ production, feature });

  return findById(userId);
};
