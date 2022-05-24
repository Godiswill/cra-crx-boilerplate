import { MessageEventType } from '../../types';
chrome.runtime.onMessage.addListener(
    (
        msg: MessageEventType,
        sender: chrome.runtime.MessageSender,
        sendResponse: (response: string) => void
    ) => {
        console.log('[content.js]. Message received', msg);
        sendResponse('received');
        if (process.env.NODE_ENV === 'development') {
            if (msg.type === 'window.location.reload') {
                console.log('current page will reload.');
                window.location.reload();
            }
        }
    }
);
