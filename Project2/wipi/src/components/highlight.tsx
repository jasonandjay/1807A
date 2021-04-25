import { useEffect, useRef } from "react";
import hljs from 'highlight.js';

interface IProps{
    str: string
}

const Highlight: React.FC<IProps> = props=>{
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        ref.current!.querySelectorAll('pre code').forEach((block) => {
            console.log('block', block);
            hljs.highlightBlock(block as HTMLElement);
        });
    }, [props.str])

    return <div ref={ref} dangerouslySetInnerHTML={{__html: props.str}}></div>
}

export default Highlight;