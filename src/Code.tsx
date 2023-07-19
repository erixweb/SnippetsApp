import { Editor } from "@monaco-editor/react"
import { useSnippetStore } from "./useSnippetStore"

export default function Code() {
    const { snippet } = useSnippetStore()

    let codeSnippet = ""


    if (localStorage.snippet) {
        codeSnippet = JSON.parse(localStorage.snippet)[snippet] ? JSON.parse(localStorage.snippet)[snippet].content : "No content"
    }
    const handleChange = () => {
        window.history.pushState("", "", `?content=${encodeURI(window.monaco.editor.getModels()[0].getValue())}`)
    }

    const URLParams = new URLSearchParams(window.location.search)

    if (typeof URLParams.get('content') === "string") { 
        codeSnippet = decodeURI(URLParams.get('content')!) 
    }

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            language="typescript"
            value={codeSnippet}
            onChange={handleChange}
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
