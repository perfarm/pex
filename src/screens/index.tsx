import { EnvelopeSimple } from "~/components/Icons/EnvelopeSimple";
import { IdentificationCard } from "~/components/Icons/IdentificationCard";
import { Phone } from "~/components/Icons/Phone";
import { ImgPerfarmExperience } from "~/components/ImgPerfarmExperience";
import { Typography } from "~/components/Typography";
import { ButtonNext, Container, IconRight, Input, Root, Title } from "./style";

export const ScreenRegister = () => {
  return (
    <Root>
      <ImgPerfarmExperience />
      <Container>
        <Title color="$pastureGreen" variant="$headline6">
          CREDENCIAMENTO
        </Title>
        <Typography color="$gray" variant="$body4">
          Preencha os campos abaixo:
        </Typography>
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
        <ButtonNext
          color="primary"
          onClick={() => console.log("clicked")}
          disabled
        >
          AVANÇAR <IconRight color="white" />
        </ButtonNext>
      </Container>
    </Root>
  );
};
