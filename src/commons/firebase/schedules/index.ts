import { firestore } from '~/commons/firebase';

import { Schedule, Status } from './types';

const collection = firestore.collection('schedules');

export const find = async () => {
  const data = await collection.orderBy('order', 'asc').get();
  return data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Schedule));
};

export const findById = async (id: string) => {
  const data = await collection.doc(id).get();
  return { id: data.id, ...data.data() } as Schedule;
};

export const updateStatus = async (id: string, status: Status) => {
  await collection.doc(id).update({ status });
  return findById(id);
};

export const create = async (data: Schedule) => {
  const schedule = await collection.add(data);
  return findById(schedule.id);
};
