/*
 * Basic j/k/enter keyboard navigation for Hacker News article lists
 * Scrolling off the end of the page navigates to next.
 */

currentIndex = -1;
currentItem = null;

// Build up a list of the items in the page.
// HN is all encoded as a hideously semantic-free table.
tds = $('td.title');
items = [];
for (var i = 0; i < tds.length-1; i+=2) {
    // All odd td.title items contain number labels
    // All even td.title items contain the title links
   items.push({number: $(tds[i]), title: $(tds[i+1])});
}
// The "More" link is always the last in the td.title list.
more = tds.last();

$(window).keydown(function(event) {
    key = String.fromCharCode(event.keyCode).toLowerCase();
    
    // Navigate to the href of the first <a> under the current object
    // Yes, I'm a JS/jQuery n00b--there must be a more canonical approach.
    function clickFirstLink(obj) {
        window.location.href = obj.children('a').first().attr('href');
    }

    // Move selection to next/previous news item
    function navigateItems(from,to) {
        if (from) {
            // Clear styling of previous item
            from.title.css({'text-decoration': 'none', 'font-weight': 'normal'});
        }
        to.title.css({'text-decoration': 'underline', 'font-weight': 'bold'});
        currentItem = to;
        currentItem.title[0].scrollIntoViewIfNeeded();
    }

    if (key == 'j') {
        if (currentIndex < items.length-1) {
            currentIndex += 1;
            navigateItems(currentItem, items[currentIndex]);
        } else {
            clickFirstLink(more);
        }
    } else if (key == 'k') {
        if (currentIndex > 0) {
            currentIndex -= 1;
            navigateItems(currentItem, items[currentIndex]);
        }
    } else if (event.keyCode == 13) {
        // pressed return
        if (currentItem) {
            clickFirstLink(currentItem.title);
        }
    }
});

