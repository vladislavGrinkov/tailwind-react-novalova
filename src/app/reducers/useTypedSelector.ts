import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypeRootState } from '../init/store';

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> =
  useSelector;