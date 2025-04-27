import {atom, selector } from 'recoil'

export const paperAtom = atom({
    key: "paperAtom",
    default: []
})

export const shouldRenderAtom = atom({
    key: "shouldRender",
    default: false
})