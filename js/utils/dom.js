/** Small DOM helpers shared by views and controllers. */
export const $ = (selector, scope = document) => scope.querySelector(selector);
export const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
export const byId = id => document.getElementById(id);
