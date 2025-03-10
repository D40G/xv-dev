import { writable } from "svelte/store";
import { QuickFunctionDefault, ConfigDefault } from "../utils/Defaults";

export const visibility = writable(false);

export const outputMode = writable(false);
export const debugMode = writable(false);


//for theme
export const themeStore = writable(localStorage.getItem('theme') || ConfigDefault.theme);
themeStore.subscribe((value) => {
    localStorage.setItem('theme', value);
})

//for code
export const codeStore = writable( localStorage.getItem('code') || "");
codeStore.subscribe((value) => {
    localStorage.setItem('code', value);
})

//for variables
export const variablesStore = writable([]);

export const variablesLogStore = writable([]);
export const variablesHTMLStore = writable([]);

//for quick functions

export const quickFunctionsStore = writable( JSON.parse(localStorage.getItem('quickFunctions')) || QuickFunctionDefault);
quickFunctionsStore.subscribe((value) => {
    localStorage.setItem('quickFunctions', JSON.stringify(value));
})

export const paramListStore = writable([]);

export const luaOutputStore = writable([]);

export const debugOutputStore = writable([]);

export const resourceStore = writable([]);

export const listenEsc = writable(true);
