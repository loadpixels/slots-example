import { DefineComponent, Plugin } from 'vue';


declare const Rwire: Exclude<Plugin['install'], undefined>;
export default Rwire;

export const RwireSample: DefineComponent<{}, {}, any>;
