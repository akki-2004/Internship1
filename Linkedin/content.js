fetch(chrome.runtime.getURL('widget.html'))
  .then(response => response.text())
  .then(html => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = html;
    const widget = wrapper.firstElementChild;
    document.body.appendChild(widget);

    chrome.storage.sync.get('visible', ({ visible }) => {
      if (visible === false) widget.style.display = 'none';
    });

    document.getElementById('toggle-widget').onclick = () => {
      const visible = widget.style.display !== 'none';
      widget.style.display = visible ? 'none' : 'block';
      chrome.storage.sync.set({ visible: !visible });
    };
  });