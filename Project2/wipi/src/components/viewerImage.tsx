import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs'

const ViewerImage: React.FC = props=>{
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        console.log(props.children);
        new Viewer(ref.current!)
    }, [props.children]);

    return <div ref={ref}>{props.children}</div>
}

export default ViewerImage;