import {SELECT_THEME} from './actionTypes';

export const selectTheme = (themeIndex)=>{
    return {
        type:SELECT_THEME,
        selectTheme: themeIndex,
    }
}