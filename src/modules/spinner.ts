const ACTIVE_SPINNER = 'spinner/ACTIVE_SPINNER' as const;
const INACTIVE_SPINNER = 'spinner/INACTIVE_SPINNER' as const;

type SpinnerAction = ReturnType<typeof activeSpinner> | ReturnType<typeof inactiveSpinner>;

type SpinnerState = {
  isOpen: boolean;
};

const initialState: SpinnerState = {
  isOpen: false,
};

const spinner = (state: SpinnerState = initialState, action: SpinnerAction): SpinnerState => {
  switch (action.type) {
    case ACTIVE_SPINNER: {
      return { isOpen: true };
    }

    case INACTIVE_SPINNER: {
      return { isOpen: false };
    }

    default: {
      return state;
    }
  }
};

export default spinner;

export const activeSpinner = () => {
  return { type: ACTIVE_SPINNER };
};

export const inactiveSpinner = () => {
  return { type: INACTIVE_SPINNER };
};
