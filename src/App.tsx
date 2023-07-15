import Editor from "@monaco-editor/react"
import Aside from "./Aside"
import { createContext, useState } from "react"

export const SnippetContext = createContext("")

export default function App() {
    const [snippet, setSnippet] = useState("Hello world")

    const changeSnippet = () => {
        setSnippet("console.log('hi')")
    }

    return (
        <SnippetContext.Provider value={snippet}>
            <div className="wrapper">
                <button onClick={changeSnippet}>Change snippet</button>
                <Aside />
                <Editor
                    height="100vh"
                    theme="vs-dark"
                    language="typescript"
                    options={{
                        fontSize: 17,
                        fontFamily:
                            "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
                    }}
                />
            </div>
        </SnippetContext.Provider>
    )
}
