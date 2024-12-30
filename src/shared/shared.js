import { writable } from "svelte/store";

export let user = writable(null);
export let page = writable("main");
export let firebase_app = writable(null);
export let firebase_analytics = writable(null);
