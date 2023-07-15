import { useContext, useEffect } from "react"
import { SnippetContext } from "./App"

export default function Aside() {
    const snippet = useContext(SnippetContext)

    useEffect(() => {
        console.log(snippet)
    }, [snippet])
    
    const changeSnippet = () => {
        localStorage.setItem("change", "true")
        localStorage.setItem("changes", "Hello world")
    }

    return (
        <aside>
            <button onClick={changeSnippet}>Snippet</button>
        </aside>
    )
}
