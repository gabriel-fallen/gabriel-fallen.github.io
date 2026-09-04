import { writable } from "svelte/store";

export const threads = ["Web", "performance", "research", "teaching", "data analysis", "programming languages"];

export const active = writable(threads);
