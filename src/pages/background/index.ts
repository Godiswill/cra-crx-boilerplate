if(process.env.NODE_ENV === 'development') {
    const eventSource = new EventSource(`http://${process.env.REACT_APP__HOST__}:${process.env.REACT_APP__PORT__}/reload/`);
    console.log('--- 开始监听更新消息 ---');
    eventSource.addEventListener('content_changed_reload', ({ data }, ) => {

        chrome.tabs.query({ active: true }, (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id || 0, { type: 'window.location.reload' }, () => {
                console.log('chrome.runtime.reload()', data);
                chrome.runtime.reload();
            });
        });
    });
}
console.log('This is the background page.');
export {}
