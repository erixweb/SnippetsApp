import { Editor } from "@monaco-editor/react"
import { useSnippetStore } from "./useSnippetStore"

export default function Code() {
    const { snippet } = useSnippetStore()
    let codeSnippet = ""

    if (localStorage.snippet) {
        codeSnippet = localStorage.snippet
    }

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            language="typescript"
            value={codeSnippet}
            options={{
                fontSize: 17,
                fontFamily:
                    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            }}
        />
    )
}
