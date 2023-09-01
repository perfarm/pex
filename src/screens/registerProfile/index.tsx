import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { IconRight } from '~/commons/variants/components';
import { EnvelopeSimple } from '~/components/Icons/EnvelopeSimple';
import { IdentificationCard } from '~/components/Icons/IdentificationCard';
import { Phone } from '~/components/Icons/Phone';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import {
  isFormFieldsValid,
  isValidCpf,
  isValidEmail,
  isValidName,
  isValidPhone,
  maskCpf,
  maskPhone,
} from '~/utils/masks';
import { FormProfileValues } from '~/utils/masks/type';
import { Input } from './style';

export const ScreenRegisterProfile = () => {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const { push } = useRouter();

  const [inputValues, setInputValues] = useState<FormProfileValues>({
    cpf: '',
    email: '',
    name: '',
    phone: '',
  });

  const handleChangeInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, mask?: (e: string | number) => void) => {
      if (mask) {
        return setInputValues({
          ...inputValues,
          [event.target.name]: mask(event.target.value),
        });
      }
      setInputValues({
        ...inputValues,
        [event.target.name]: event.target.value,
      });

      console.log('aaa', inputValues);
    },
    [inputValues]
  );

  const handleNext = useCallback(() => {
    push('/register/production');
  }, [push]);

  useEffect(() => {
    if (isFormFieldsValid(inputValues)) {
      return setBtnDisabled(false);
    }
    setBtnDisabled(true);
  }, [inputValues]);

  return (
    <TemplateFlowStep
      title="CREDENCIAMENTO"
      subtitle="Preencha os campos abaixo:"
      step={1}
      handleNext={handleNext}
      isBtnNextDisabled={btnDisabled}
      btnNextDescription={
        <>
          AVANÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <Input
        hasError={!isValidName(inputValues.name)}
        label="Nome*"
        name="name"
        onChange={handleChangeInput}
        placeholder="Digite seu nome completo"
        required
        size="small"
        value={inputValues.name}
        maxLength={200}
        errorDescription="Por favor, informe nome e sobrenome"
      />
      <Input
        hasError={!isValidPhone(inputValues.phone)}
        icon={<Phone color={!isValidPhone(inputValues.phone) ? 'warningRedAlert' : 'gray'} />}
        label="Telefone*"
        name="phone"
        type="tel"
        onChange={(e) => handleChangeInput(e, maskPhone)}
        placeholder="Digite seu telefone"
        required
        size="small"
        value={inputValues.phone}
        maxLength={15}
        errorDescription="Por favor, digite um telefone válido"
      />
      <Input
        hasError={!isValidEmail(inputValues.email)}
        icon={<EnvelopeSimple color={!isValidEmail(inputValues.email) ? 'warningRedAlert' : 'gray'} />}
        label="E-mail*"
        name="email"
        type="email"
        onChange={(e) => handleChangeInput(e)}
        placeholder="Digite seu email"
        required
        size="small"
        value={inputValues.email}
        errorDescription="Por favor, digite um e-mail válido"
      />
      <Input
        hasError={!isValidCpf(inputValues.cpf)}
        icon={<IdentificationCard color={!isValidCpf(inputValues.cpf) ? 'warningRedAlert' : 'gray'} />}
        label="CPF*"
        name="cpf"
        type="tel"
        onChange={(e) => handleChangeInput(e, maskCpf)}
        placeholder="Digite seu CPF"
        required
        size="small"
        value={inputValues.cpf}
        maxLength={14}
        errorDescription=" Por favor, digite um CPF válido"
      />
    </TemplateFlowStep>
  );
};
