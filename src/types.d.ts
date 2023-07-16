interface ISnippet {
    name: string,
    content: string
}
interface ISnippetState {
    snippet: number
    changeSnippet: (value: number) => void
}