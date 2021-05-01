import * as type from './type/spinner';

export const activeSpinner = () => ({
  type: type.ACTIVE_SPINNER,
});

export const inactiveSpinner = () => ({
  type: type.INACTIVE_SPINNER,
});
