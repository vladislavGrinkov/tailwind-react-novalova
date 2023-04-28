import { useTypedSelector } from '../app/reducers/useTypedSelector';
import { shallowEqual } from 'react-redux';
import { TInnerData } from '@/hooks/type';
import profiles from '../app/data/profiles.json';
import { useActions } from '../app/reducers/useActions';
import { useEffect } from 'react';
import { TypeRootState } from '@/app/init/store';

export const useFetchProfile = (): TSendParam  => {
    const {resetProfile, saveProfile} = useActions();
  const { user } = useTypedSelector(
    (state: TypeRootState) => state.profileReducer,
    shallowEqual
  );

  useEffect(() => {
    resetProfile()
  }, []);

  const getRandomProfile = (sex: string): void => {
    const orderBySex = profiles.profile.filter(el => el.sex === sex);
    const random = Math.floor(Math.random() * orderBySex.length);
    console.log(profiles.profile[random]);

    saveProfile(orderBySex[random]);
  };

  return {user, getRandomProfile};
};


export type TSendParam = {
    getRandomProfile: (sex: string) => void;
    user: TInnerData;
}