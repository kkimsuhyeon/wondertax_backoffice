import { ACTIVE_SPINNER, INACTIVE_SPINNER } from 'store/action/type/spinner';
import {activeSpinner, inactiveSpinner} from 'store/action/spinner'

interface ActionPropTypes{
  type: ReturnType<typeof activeSpinner> | ReturnType<typeof inactiveSpinner>
}


const initialState: boolean = false;

const spinner = (state: boolean = initialState):boolean => {
  switch(action.type)
}