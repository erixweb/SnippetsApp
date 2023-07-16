import { Editor } from "@monaco-editor/react"
import { useSnippetStore } from "./useSnippetStore"

export default function Code() {
    const { snippet } = useSnippetStore()

    let codeSnippet = ""


    if (localStorage.snippet) {
        codeSnippet = JSON.parse(localStorage.snippet)[snippet].content
    }

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            language="typescript"
            value={codeSnippet}
            options={{
                fontSize: 18,
                fontFamily:
                    "'Cascadia Code', Arial",
                fontWeight: "400",
                tabSize: 4
            }} 
        />
    )
}
