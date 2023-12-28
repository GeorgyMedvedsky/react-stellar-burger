export const GET_ORDER_DETAILS = 'GET_ORDER_DETAILS';

export function getOrderDetails(id) {
    return {
        type: GET_ORDER_DETAILS,
        id
    }
}