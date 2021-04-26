import NProgress from 'nprogress';
import { useEffect } from 'react';

const Progress:React.FC = ()=>{
    useEffect(()=>{
        console.log('重新渲染progress');
        NProgress.start();
        NProgress.configure({speed: 500});
        return ()=>{
            NProgress.done()
        }
    }, [])
    return null
}

export default Progress;