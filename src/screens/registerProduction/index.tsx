import { useState } from 'react';
import { IconRight } from '~/commons/variants/components';
import { TemplateFlowStep } from '~/components/TemplateFlowStep';
import { Description, Img, ImgContent, List, ListItem } from './style';

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
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [selected, setSelected] = useState('');

  const handleSelectProduct = (value: string) => {
    console.log('item:', value);
    setSelected(value);
    setBtnDisabled(false);
  };

  return (
    <TemplateFlowStep
      title="CREDENCIAMENTO"
      subtitle="Escolha a sua produção:"
      step={2}
      handleNext={() => console.log('go next')}
      handleBack={() => console.log('go back')}
      isBtnNextDisabled={btnDisabled}
      btnNextDescription={
        <>
          AVANÇAR <IconRight color="white" size={24} />
        </>
      }
    >
      <List>
        {listProductions.map(({ img, id, label }, index) => (
          <ListItem key={`list-item-${index}`} onClick={() => handleSelectProduct(id)} isActive={selected === id}>
            <ImgContent>
              <Img src={img} alt={label} width={35} height={35} />
            </ImgContent>
            <Description variant="$body3" weight="$bold">
              {label}
            </Description>
          </ListItem>
        ))}
      </List>
    </TemplateFlowStep>
  );
};
