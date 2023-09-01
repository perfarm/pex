import { ProfileValues } from '~/commons/api/postRegisterProfile/types';

export const isValidName = (value: string) => new RegExp(/(\w.+\s).+/i).test(value);

export const isValidEmail = (value: string) => new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(value);

export const isValidPhone = (value: string) => new RegExp(/^\(\d{2}\)\s\d{5}-\d{4}$/g).test(value);

export const isValidCpf = (cpf: string) => {
  if (typeof cpf !== 'string') return false;
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false;
  const cpfSplit = cpf.split('').map((el) => +el);
  const rest = (count: number) =>
    ((cpfSplit.slice(0, count - 12).reduce((soma, el, index) => soma + el * (count - index), 0) * 10) % 11) % 10;
  return rest(10) === cpfSplit[9] && rest(11) === cpfSplit[10];
};

export const checkErrorWhenFilledWithMask = (value: string, validation: (value: string) => boolean) => {
  if (value === '') {
    return false;
  }

  return !validation(value);
};

export const maskPhone = (telefone: string | number): string => {
  let v = telefone.toString().replace(/\D/g, '');
  v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  v = v.replace(/(\d{5})(\d{0,4})$/, '$1-$2');

  return v;
};

export const maskCpf = (cpf: string | number): string => {
  let v = cpf.toString().replace(/\D/g, '');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return v;
};

export const isProfileFieldsValid = (values: ProfileValues): boolean =>
  isValidName(values.name) && isValidPhone(values.phone) && isValidEmail(values.email) && isValidCpf(values.cpf);
