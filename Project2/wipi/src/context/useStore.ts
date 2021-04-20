import { useContext } from 'react';
import StoreContext from './storeContext'

function useStore(){
    let store = useContext(StoreContext)
    return store;
}

export default useStore;