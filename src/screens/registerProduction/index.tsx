import { ButtonBack, ButtonContent, ButtonNext, CardContainer, IconRight, Title } from '~/commons/variants/components';
import { CaretLeft } from '~/components/Icons/CaretLeft';
import { ImgPerfarmExperience } from '~/components/ImgPerfarmExperience';
import { StepFlow } from '~/components/StepFlow';
import { Typography } from '~/components/Typography';
import { Description, Img, ImgContent, List, ListItem, Root } from './style';

const listProductions = [
  {
    img: '/imgs/icons/soja.png',
    label: 'SOJA',
    id: 'soja',
  },
  {
    img: '/imgs/icons/cafe.png',
    label: 'CAFÉ',
    id: 'cafe',
  },
  {
    img: '/imgs/icons/cana.png',
    label: 'CANA',
    id: 'cana',
  },
  {
    img: '/imgs/icons/gado.png',
    label: 'GADO',
    id: 'gado',
  },
];

export const ScreenRegisterProduction = () => {
  return (
    <Root>
      <ImgPerfarmExperience />
      <CardContainer>
        <StepFlow step={2} />
        <Title color="$pastureGreen" variant="$headline6">
          CREDENCIAMENTO
        </Title>
        <Typography color="$gray" variant="$body4">
          Escolha a sua produção:
        </Typography>

        <List>
          {listProductions.map(({ img, id, label }, index) => (
            <ListItem key={`list-item-${index}`}>
              <ImgContent>
                <Img src={img} alt={label} width={35} height={35} />
              </ImgContent>
              <Description variant="$body3" weight="$bold">
                {label}
              </Description>
            </ListItem>
          ))}
        </List>

        <ButtonContent>
          <ButtonBack color="primary" variant="outlined" onClick={() => console.log('clicked')}>
            <CaretLeft color="pastureGreen" size={24} />
          </ButtonBack>

          <ButtonNext color="primary" onClick={() => console.log('clicked')} disabled>
            AVANÇAR <IconRight color="white" />
          </ButtonNext>
        </ButtonContent>
      </CardContainer>
    </Root>
  );
};
