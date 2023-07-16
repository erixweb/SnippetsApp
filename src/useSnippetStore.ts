import { create } from "zustand"

export const useSnippetStore = create<ISnippetState>((set) => ({
    snippet: 0,
    changeSnippet: (value: number) => set(() => ({
        snippet: value
    }))
}))
