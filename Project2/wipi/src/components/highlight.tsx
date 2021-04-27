import { useEffect, useRef } from "react";
import hljs from 'highlight.js';
import './highlight.less'
import {message} from 'antd'

interface IProps{
    str: string
}

function copy(value: string){
    let textare = document.createElement('textarea');
    document.body.appendChild(textare);
    textare.value = value;
    textare.select();
    document.execCommand('copy');
    message.success('内容已复制到剪切板');
    textare.parentNode?.removeChild(textare);
}

const Highlight: React.FC<IProps> = props=>{
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        ref.current!.querySelectorAll('pre code').forEach((block) => {
            var copyBtn = document.createElement('button');
            copyBtn.innerText = '复制';
            copyBtn.classList.add('copy');
            block.parentNode?.appendChild(copyBtn);
            copyBtn.onclick = ()=>copy((block as HTMLElement).innerText);
            hljs.highlightBlock(block as HTMLElement);
        });
    }, [props.str])

    return <div ref={ref} className="markdown" dangerouslySetInnerHTML={{__html: props.str}}></div>
}

export default Highlight;