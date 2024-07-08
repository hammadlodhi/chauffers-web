import React from 'react';
import {Id, toast, ToastContent, ToastOptions} from 'react-toastify';
import {LocalizedText} from '../LocalizedText/LocalizedText';

export const showToast = (content: ToastContent, options?: ToastOptions): Id => {
    const text = typeof content === 'string' ? <LocalizedText t={content} /> : null;
    return toast(text || content, options);
};
