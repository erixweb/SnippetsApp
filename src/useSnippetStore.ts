import { create } from "zustand"

interface SnippetState {
    snippet: string
    changeSnippet: (value: string) => void
}

export const useSnippetStore = create<SnippetState>((set) => ({
    snippet: "",
    changeSnippet: (value: string) => set(() => ({
        snippet: value
    }))
}))
