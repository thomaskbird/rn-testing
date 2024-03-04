import stylesTypo from './stylesTypo.ts';
import stylesColors from './stylesColors.ts';

const stylesBase = {
  button: {
    ...stylesColors.buttonPrimary,
    ...stylesTypo.button,
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
};

export default stylesBase;
