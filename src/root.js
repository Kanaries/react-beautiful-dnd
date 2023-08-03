import { createContext, useContext } from "react";


/** @type {import('react').Context<{ head: HTMLElement | ShadowRoot; body: HTMLElement | ShadowRoot }>} */
const Context = createContext({
  head: document.head,
  body: document.body,
});

export const useDOMContext = () => {
  return useContext(Context);
};

export const DOMProvider = Context.Provider;
