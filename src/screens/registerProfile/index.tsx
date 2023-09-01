import { useRouter } from 'next/router';
import { useCallback, useContext, useEffect, useState } from 'react';
import { setAuthorizationToken } from '~/commons/api';
import { RequestError } from '~/commons/api/RequestError';
import { fetchRegisterProfile } from '~/commons/api/postRegisterProfile';
import { ProfileValues } from '~/commons/api/postRegisterProfile/types';
import { setAccessToken } from '~/commons/storage/accessToken';
import { IconRight } from '~/commons/variants/components';
import { EnvelopeSimple } from '~/components/Icons/EnvelopeSimple';
import { IdentificationCard } from '~/components/Icons/IdentificationCard';
import { Phone } from '~/components/Icons/Phone';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { toast } from '~/components/Toaster';
import { AuthContext } from '~/context/auth';
import {
  checkErrorWhenFilledWithMask,
  isProfileFieldsValid,
  isValidCpf,
  isValidEmail,
  isValidName,
  isValidPhone,
  maskCpf,
  maskPhone,
} from '~/utils/form';
import { Input } from './style';

export const ScreenRegisterProfile = () => {
  const { fetchCurrentUser } = useContext(AuthContext);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);

  const { push } = useRouter();

  const [inputValues, setInputValues] = useState<ProfileValues>({
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
    },
    [inputValues]
  );

  const handleSubmit = useCallback(async () => {
    setBtnLoading(true);

    const postValues: ProfileValues = {
      ...inputValues,
      cpf: inputValues.cpf.replace(/[^0-9]/g, ''),
      phone: inputValues.phone.replace(/[^0-9]/g, ''),
    };

    try {
      const response = await fetchRegisterProfile(postValues);

      setAccessToken(response.token);
      setAuthorizationToken();
      await fetchCurrentUser();

      push('/register/production');
    } catch (e) {
      toast.error((e as RequestError).data.message);
    } finally {
      setBtnLoading(false);
    }
  }, [fetchCurrentUser, inputValues, push]);

  useEffect(() => {
    if (isProfileFieldsValid(inputValues)) {
      return setBtnDisabled(false);
    }
    setBtnDisabled(true);
  }, [inputValues]);

  return (
    <TemplateFlowStep
      title="CREDENCIAMENTO"
      subtitle="Preencha os campos abaixo:"
      step={1}
      handleNext={handleSubmit}
      isBtnNextDisabled={btnDisabled}
      isBtnNextLoading={btnLoading}
      btnNextDescription={
        <>
          AVANÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <Input
        hasError={checkErrorWhenFilledWithMask(inputValues.name, isValidName)}
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
        hasError={checkErrorWhenFilledWithMask(inputValues.phone, isValidPhone)}
        icon={
          <Phone color={checkErrorWhenFilledWithMask(inputValues.phone, isValidPhone) ? 'warningRedAlert' : 'gray'} />
        }
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
        hasError={checkErrorWhenFilledWithMask(inputValues.email, isValidEmail)}
        icon={
          <EnvelopeSimple
            color={checkErrorWhenFilledWithMask(inputValues.email, isValidEmail) ? 'warningRedAlert' : 'gray'}
          />
        }
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
        hasError={checkErrorWhenFilledWithMask(inputValues.cpf, isValidCpf)}
        icon={
          <IdentificationCard
            color={checkErrorWhenFilledWithMask(inputValues.cpf, isValidCpf) ? 'warningRedAlert' : 'gray'}
          />
        }
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
