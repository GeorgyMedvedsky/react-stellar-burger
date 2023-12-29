export const SET_CURRENT_ITEM = 'SET_CURRENT_ITEM';
export const CLEAR_CURRENT_ITEM = 'CLEAR_CURRENT_ITEM';

export function setViewedItem(item) {
    return {
        type: SET_CURRENT_ITEM,
        item
    };
};
export function clearViewedItem() {
    return {
        type: CLEAR_CURRENT_ITEM
    };
};