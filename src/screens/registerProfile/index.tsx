import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { IconRight } from '~/commons/variants/components';
import { EnvelopeSimple } from '~/components/Icons/EnvelopeSimple';
import { IdentificationCard } from '~/components/Icons/IdentificationCard';
import { Phone } from '~/components/Icons/Phone';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { Input } from './style';

export const ScreenRegisterProfile = () => {
  const { push } = useRouter();

  const handleNext = useCallback(() => {
    push('/register/production');
  }, [push]);

  return (
    <TemplateFlowStep
      title="CREDENCIAMENTO"
      subtitle="Preencha os campos abaixo:"
      step={1}
      handleNext={handleNext}
      btnNextDescription={
        <>
          AVANÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <Input
        label="Nome*"
        name="name"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Digite seu nome completo"
        required
        size="small"
        value=""
      />
      <Input
        icon={<Phone />}
        label="Telefone*"
        name="phone"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Digite seu telefone"
        required
        size="small"
        value=""
      />
      <Input
        icon={<EnvelopeSimple />}
        label="E-mail*"
        name="email"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Digite seu email"
        required
        size="small"
        value=""
      />
      <Input
        icon={<IdentificationCard />}
        label="CPF*"
        name="cpf"
        onChange={(e) => console.log(e.target.value)}
        placeholder="Digite seu CPF"
        required
        size="small"
        value=""
      />
    </TemplateFlowStep>
  );
};
