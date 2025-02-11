(function() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    let node;
    
    while (node = walker.nextNode()) {
        node.nodeValue = node.nodeValue.replace(/woke/gi, 'basic human decency');
    }
})();
