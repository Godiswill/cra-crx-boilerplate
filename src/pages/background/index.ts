if (process.env.NODE_ENV === 'development') {
    const eventSource = new EventSource(
        `http://${process.env.REACT_APP__HOST__}:${process.env.REACT_APP__PORT__}/reload/`
    );
    console.log('--- 开始监听更新消息 ---');
    eventSource.addEventListener('content_changed_reload', async ({ data }) => {
        const [tab] = await chrome.tabs.query({
            active: true,
            lastFocusedWindow: true,
        });
        const tabId = tab.id || 0;
        console.log(`tabId is ${tabId}`);
        await chrome.tabs.sendMessage(tabId, {
            type: 'window.location.reload',
        });
        console.log('chrome extension will reload', data);
        chrome.runtime.reload();
    });
}
console.log('This is the background page.');
export {};
