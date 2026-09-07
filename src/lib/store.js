import { derived, writable } from "svelte/store";

import { experience, projects, intersect } from "./data";

export const threads = ["Web", "performance", "research", "teaching", "data analysis", "programming languages"];

export const active = writable(threads);

export const active_experience = derived(active, (threads) => experience.filter(e => intersect(threads, e.threads)));

export const active_projects = derived(active, (threads) => projects.filter(p => intersect(threads, p.threads)));
