import { generateRandomApplications } from './../utils/GenerateApplications';
import { atom } from "jotai";

export const applicationsAtom = atom(async (get) => {
    const appplications = generateRandomApplications(100);
    return appplications;
})

export const applicationsCompletedAtom = atom(async (get) => {
    return Math.floor(Math.random() * 100);
})

export const applicationsRefundsAtom = atom(async (get) => {
    return Math.floor(Math.random() * 20);
})