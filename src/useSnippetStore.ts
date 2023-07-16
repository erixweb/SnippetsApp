import { create } from "zustand"

interface SnippetState {
    snippet: number
    changeSnippet: (value: number) => void
}

export const useSnippetStore = create<SnippetState>((set) => ({
    snippet: 0,
    changeSnippet: (value: number) => set(() => ({
        snippet: value
    }))
}))
