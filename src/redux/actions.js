import {TABLE_RESIZE, CHANGE_TEXT, CHANGE_STYLES, APPLY_STYLE, CHANGE_TITLE, UPDATE_DATE} from './types';

// Action creator
export function tableResize(data) {
    return {
        type: TABLE_RESIZE,
        data
    };
}

export function changeText(data) {
    return {
        type: CHANGE_TEXT,
        data: data
    };
}

export function changeStyles(data) {
    return {
        type: CHANGE_STYLES,
        data: data
    };
}

export function applyStyle(data) {
    return {
        type: APPLY_STYLE,
        data: data
    };
}

export function changeTitle(data) {
    return {
        type: CHANGE_TITLE,
        data: data
    };
}

export function updateDate() {
    return {
        type: UPDATE_DATE
    };
}
