import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
/**
 * @author Azim Khan <azim@surmountsoft.in>
 * toast handler for success and error
 * */
export const toastHandler = (code, message, callback) => {
    switch (code) {
        case 100:
            return toast.info(message, {
                hideProgressBar: true
            });
        case 200:
            return toast.success(message, {
                hideProgressBar: true,
                onClose: callback
            });
        case 201:
            return toast.success(message, {
                hideProgressBar: true
            })
        case 204:
            return toast.success(message, {
                hideProgressBar: true
            })
        case 400:
            return toast.error(message, {
                hideProgressBar: true
            });
        case 401:
            return toast.error(message, {
                hideProgressBar: true
            });
        case 402:
            return toast.error(message, {
                hideProgressBar: true
            });
        case 403:
            return toast.error(message, {
                hideProgressBar: true
            })
        case 404:
            return toast.error(message, {
                hideProgressBar: true
            })
        case 406:
            return toast.error(message, {
                hideProgressBar: true
            });
        case 422:
            return toast.error(message, {
                hideProgressBar: true
            })
        case 500:
            return toast.error(message, {
                hideProgressBar: true
            })
        case 'stripe_error':
            return toast.error(message, {
                hideProgressBar: true
            })
        default:
            return toast.error('Unknown Error!', {
                hideProgressBar: true
            })
    }
};