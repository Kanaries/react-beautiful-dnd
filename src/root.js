let documentEl = document;
let headEl = null;
let bodyEl = null;

/** @returns {HTMLElement | ShadowRoot} */
export const getDocument = () => documentEl;

/** @returns {HTMLElement | ShadowRoot} */
export const getHead = () => headEl;
/** @param {HTMLElement | ShadowRoot} head */
export const setHead = (head) => headEl = head;

/** @returns {HTMLElement | ShadowRoot} */
export const getBody = () => bodyEl;
/** @param {HTMLElement | ShadowRoot} body */
export const setBody = (body) => bodyEl = body;
