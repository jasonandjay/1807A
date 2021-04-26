import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs'

const ViewerImage: React.FC = props=>{
    const ref = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        const viewer = new Viewer(ref.current!)
        const ob = new MutationObserver(()=>{
            viewer.update();
        })
        ob.observe(ref.current!, {
            subtree: true,
            childList: true
        })
        return ()=>{
            viewer.destroy();
            ob.disconnect();
        }
    }, []);

    return <div ref={ref}>{props.children}</div>
}

export default ViewerImage;