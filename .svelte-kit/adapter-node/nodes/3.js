

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Grover/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.xN-JoV0d.js","_app/immutable/chunks/Cr_1vraW.js","_app/immutable/chunks/BWZD8c2K.js","_app/immutable/chunks/B-yij5ct.js"];
export const stylesheets = [];
export const fonts = [];
