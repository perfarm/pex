export enum Release {
  REGISTER = 0,
  SELECT_PRODUCTION = 1,
  SELECT_PRODUCTION_INPUT = 2,
  SELCET_MACHINE = 3,
  FINISH = 4,
}

const map = new Map<keyof typeof Release, string>([
  ['FINISH', 'Finalizar'],
  ['SELECT_PRODUCTION', 'Selecionar Produção'],
  ['SELECT_PRODUCTION_INPUT', 'Selecionar Insumo'],
  ['SELCET_MACHINE', 'Selecionar Máquina'],
  ['REGISTER', 'Registrar'],
])

export const translate = (release: keyof typeof Release) => map.get(release);
