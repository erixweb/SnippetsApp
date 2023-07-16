import { useSnippetStore } from "./useSnippetStore"

export default function Aside() {
    const snippet = useSnippetStore((state: any) => state.snippet)

    const { changeSnippet } = useSnippetStore()

    const fetchSnippet = [
        {
            name: "fetch",
            content: `const ENDPOINT: string = "https://midu.dev"
            
        fetch(ENDPOINT)
            .then(res => res.text())`,
        },
        {
            name: "pokeapi",
            content: `
            const ENDPOINT: string = "https://pokeapi.com"
            
            fetch(ENDPOINT)
                .then(res => res.text()),
            `,
        },
    ]

    localStorage.setItem("snippet", JSON.stringify(fetchSnippet))

    const storage = JSON.parse(localStorage.snippet)

    interface ISnippet {
        name: string,
        content: string
    }

    return (
        <aside>
            {storage.map((snippet: ISnippet, index: number) => (
                <button
                    key={index}
                    onClick={() => {
                        changeSnippet(index)
                    }}
                >
                    {snippet.name}
                </button>
            ))}
        </aside>
    )
}
