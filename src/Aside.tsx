import { useSnippetStore } from "./useSnippetStore"

export default function Aside() {
    const snippet = useSnippetStore((state: any) => state.snippet)

    const { changeSnippet } = useSnippetStore()

    localStorage.setItem(
        "snippet",
        `const ENDPOINT: string = "https://midu.dev"
        
fetch(ENDPOINT)
    .then(res => res.text())
        `
    )
    
    return (
        <aside>
            <button
                onClick={() => {
                    changeSnippet("fetch")
                }}
            >
                Change Snippet
            </button>
        </aside>
    )
}
