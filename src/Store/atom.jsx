import { atom } from 'recoil';

// Ensure atoms are only created once, even with HMR
const createAtom = (key, defaultValue) =>
    atom({
        key,
        default: defaultValue,
    });

export const countriesAtom = createAtom('countriesAtom', []);
export const recentlyViewedAtom = createAtom('recentlyViewedAtom', JSON.parse(localStorage.getItem('recentlyViewed')) || []);
export const selectedContinentAtom = createAtom('selectedContinentAtom', '');
export const searchQueryAtom = createAtom('searchQueryAtom', '');
export const countryDetailsAtom = createAtom('countryAtom', []);
export const continentSearchAtom = createAtom('continentAtom', []);
