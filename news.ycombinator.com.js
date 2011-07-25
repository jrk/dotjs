// Georgify userstyle ported from http://userstyles.org/styles/userjs/46180/Georgify%20for%20Hacker%20News.user.js
{
var css = "";
    css += "background-color: #ffffff!important; width:700px!important; max-width:700px!important";
css += "table {background-color: #ffffff!important; width:700px!important;}\ntbody tr td {background-color: #ffffff!important;}\n\ntable tbody {background-color: #ffffff!important;}\n\nspan.pagetop {\n	color: #bbbbbb!important; padding-bottom:40px!important; font-family:Georgia, Times, serif!important; font-size:10pt!important; line-height: 10px!important;\n}\n\nspan.pagetop a:link, span.pagetop a:visited  {font-family:Georgia, Times, serif!important; font-size:10pt!important; color:#bbbbbb!important; padding-left: 5px!important;padding-right: 5px!important; margin-bottom: 10px!important; padding-bottom: 4px!important; font-weight: normal!important;border-bottom: 0px dotted #fff!important; }\n\nspan.pagetop a:hover, span.pagetop a:active {font-family:Georgia, Times, serif!important; font-size:10pt!important; color:#f60!important; padding-left: 5px!important;padding-right: 5px!important; margin-bottom: 10px!important; padding-bottom: 4px!important; font-weight: normal!important; border-bottom: 0px dotted #ffa86e!important; }\n\nbody  { font-family:Georgia, Times, serif!important; font-size:12pt!important; color:#222222!important; }\n\ntd    { font-family:Georgia, Times, serif!important; font-size:12pt!important; color:#999999!important; padding: 3px!important; }\n\n.admin td   { font-family:Georgia, Times, serif!important; font-size:8.5pt!important; color:#222222!important; }\ntd.subtext { font-family:Georgia, Times, serif!important; font-size:  12px!important; color:#999999!important; border-bottom: 1px dotted #ddd!important ; }\n\nform {\n	margin-bottom: 0px!important;\n}\n\ninput    { font-family:Georgia, Times, serif!important; font-size:15px!important; color:#222222!important; padding: 8px 8px 8px 8px!important;\nbackground-color: #fff!important;\ncolor: #333!important;\nwidth: auto!important;\nfont-family: Georgia, Times, serif!important;\nfont-size: 15px!important;\nborder: 1px solid #ccc!important;\n-moz-border-radius: 4px!important;\n-webkit-border-radius: 4px!important;\nborder-radius: 4px!important;}\n\ninput[type=\"text\"]    { font-family:Georgia, Times, serif!important; font-size:15px!important; color:#222222!important; padding: 8px 8px 8px 8px!important;\nbackground-color: #fff!important;\ncolor: #333!important;\nwidth: auto!important;\nfont-family: Georgia, Times, serif!important;\nfont-size: 15px!important;\nborder: 1px solid #ccc!important;\n-moz-border-radius: 4px!important;\n-webkit-border-radius: 4px!important;\nborder-radius: 4px!important;}\n\ninput[type=\"submit\"] { font-family:Georgia, Times, serif!important; color:#222222!important; padding: 8px 8px 8px 8px!important;\nbackground-color: #f60!important;\ncolor: #000!important;\nwidth: auto!important;\nfont-family: Georgia, Times, serif!important;\nfont-size: 13px!important;\nborder: 1px solid #f60!important;\n-moz-border-radius: 4px!important;\n-webkit-border-radius: 4px!important;\nborder-radius: 4px!important;\ncursor: pointer!important;}\n\ntextarea { font-family:Georgia, Times, serif!important; font-size:15px!important; color:#222222!important; column-span: 200px!important; border: 1px solid #ccc!important;\n-moz-border-radius: 4px!important;\n-webkit-border-radius: 4px!important;\nborder-radius: 4px!important; width: 660px!important; height: 100px!important;}\n\na:link    { color:#ffa86e!important; text-decoration:none!important; border-bottom: 1px dotted #fff!important; }\n\na:hover, a:active    { color:#ffa86e!important; text-decoration:none!important; border-bottom: 1px dotted #ffa86e!important; }\n\na:visited { color:#aaaaaa!important; text-decoration:none!important; border-bottom: 1px dotted #fff}\n\n.default { font-family:Georgia, Times, serif!important; font-size: 12pt!important; color:#999999!important; border-bottom: 1px dotted #ccc!important; padding: 0px!important; }\n.admin   { font-family:Georgia, Times, serif!important; font-size:8.5pt!important; color:#222222!important; }\n.title   { font-family:Georgia, Times, serif!important; font-size: 12pt!important; color:#999999!important; padding-top: 12px!important; font-weight: normal!important;}\n\n.title a:link {\n	font-weight: normal!important; font-family:Georgia, Times, serif!important; font-size: 14pt!important; color:#222222!important; margin-right: 6px;\n}\n\n.title a:hover, .title a:active {\n	border-bottom: 1px dotted #ffa86e!important;\n}\n.title a:visited { color:#aaaaaa; border-bottom:1px dotted #fff;}\n\n.adtitle { font-family:Georgia, Times, serif!important; font-size:  9pt!important; color:#999999!important; }\n\n\n.yclinks { font-family:Georgia, Times, serif!important; font-size:  8pt!important; color:#999999!important;  padding-top: 15px!important; }\n\n.yclinks a:link, .yclinks a:visited {\n	color:  #bbb!important; padding-left: 5px!important; padding-right: 5px!important; font-weight: normal!important; border-bottom: none!important;\n}\n\n.yclinks a:hover, .yclinks a:active {color:  #f60!important; padding-left: 5px!important; padding-right: 5px!important; font-weight: normal!important; border-bottom: none!important;}\n\n\n\n.pagetop { font-family:Georgia, Times, serif!important; font-size: 12pt!important; color:#222222!important; }\n.comhead { font-family:Georgia, Times, serif!important; font-size:  9pt!important; color:#888888!important; }\n\n.comment { color:  #222222!important;font-family:Georgia, Times, serif!important; font-size:  15px!important; line-height: 22px!important; padding-top: 10px!important; }\n\n.dead    { font-family:Georgia, Times, serif!important; font-size:  9pt!important; color:#dddddd!important; }\ni {\n	font-style: italic!important;\n}\n\nu {\n	text-decoration: none!important; border-bottom: 1px dotted #ffa86e!important; font-size: 12px!important; margin-top: -10px!important;\n}\n\n\n\n\n.comment a:link, .comment a:visited  { color: #ffa86e!important; border-bottom: 1px dotted #fff!important; font-weight:normal!important;}\n\n.comment a:hover, .comment a:active {color: #ffa86e!important; border-bottom: 1px dotted #ffa86e!important; font-weight:normal!important;}\n\n.dead a:link, .dead a:visited { color:#bbbbbb!important; }\n.pagetop a:visited { color:#222222!important;}\n.topsel a:link, .topsel a:visited { color:#ffffff!important; }\n\n\n.subtext { font-family:Georgia, Times, serif!important; font-size:  8pt!important; color:#999999!important; padding-bottom:20px!important; font-style: italic!important; }\n\n.subtext a:link {\n	padding-left:2px!important ; padding-right:4px!important; color: #ffa86e!important ; font-weight: normal!important; border-bottom: 1px dotted #fff!important;\n}\n\n.subtext a:hover, .subtext a:active { text-decoration:none!important; border-bottom: 1px dotted #ffa86e!important;}\n\n.subtext a:visited { padding-left:2px!important ; padding-right:4px!important; color: #ffa86e!important ; font-weight: normal!important; border-bottom: 1px dotted #fff; }\n\n.comhead a:link  { padding-left:2px!important ; padding-right:4px!important; color: #ffa86e!important ; font-weight: normal!important; border-bottom: 1px dotted #fff!important; }\n\n.comhead a:hover, .comhead a:active  { padding-left:2px!important; padding-right:4px!important; color: #ffa86e!important ; font-weight: normal!important; text-decoration:none!important; border-bottom: 1px dotted #ffa86e!important; }\n\n.default p { margin-top: 2px!important; margin-bottom: 0px!important; padding-bottom: 5px;padding-top: 15px!important; text-rendering:optimizeLegibility!important; }\n\n\n\n.pagebreak {page-break-before:always!important;}\n\npre { overflow: auto!important; padding: 2px!important; max-width:600px!important; }\npre:hover {overflow:auto!important;}";
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		var node = document.createElement("style");
		node.type = "text/css";
		node.appendChild(document.createTextNode(css));
		heads[0].appendChild(node); 
	}
}
}


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

