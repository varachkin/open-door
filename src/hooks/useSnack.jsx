import { enqueueSnackbar } from "notistack";
import { useSelector } from "react-redux";

export default function useSnack() {
    const {devMode} = useSelector(state => state.actionReducer)
    let showAlert = () => {};
    if(devMode){
        showAlert = (promise, text ='') => {
            if(promise?.status >= 200 && promise?.status < 300){
                enqueueSnackbar('/' + text, {variant: 'success'})
            }else if(promise.status >= 300){
                enqueueSnackbar('/' + text, {variant: 'error'})
            }else{
                enqueueSnackbar('/' + text, {variant: 'error'})
            }
        };
    }
  
    
    return showAlert;
  }