(function(){
    // Create a TreeWalker to traverse all text nodes in the document body.
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    
    // For each text node, remove all 't', 'q', and 'i' characters (both upper and lowercase).
    while (node = walker.nextNode()) {
      node.nodeValue = node.nodeValue.replace(/[tqi]/gi, '');
    }
  })();
  