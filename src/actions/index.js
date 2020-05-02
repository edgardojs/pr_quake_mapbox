export const selectQuake = quake => {
    return { 
        type: 'QUAKE_SELECTED',
        payload: quake
    };
}