const ACTIVE_DIALOG = 'dialog/ACTIVE_DIALOG' as const;
const INACTIVE_DIALOG = 'dialog/INACTIVE_DIALOG' as const;

type DialogActive = ReturnType<typeof activeDialog> | ReturnType<typeof inactiveDialog>;

type DialogState = {
  isOpen: boolean;
  title: string;
};

const initialState: DialogState = {
  isOpen: false,
  title: '',
};

const dialog = (state: DialogState = initialState, action: DialogActive): DialogState => {
  switch (action.type) {
    case ACTIVE_DIALOG: {
      return { isOpen: true, title: action.payload.title };
    }

    case INACTIVE_DIALOG: {
      return { isOpen: false, title: '' };
    }

    default: {
      return state;
    }
  }
};

export default dialog;

export const activeDialog = (title: string) => {
  return { type: ACTIVE_DIALOG, payload: { title: title } };
};

export const inactiveDialog = () => {
  return { type: INACTIVE_DIALOG };
};
