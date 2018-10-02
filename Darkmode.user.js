// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-alpha.0
// ==/UserScript==
(function() {var css = `
.catlinks {
  background: #151515!important;
  border-color: #52555a!important
}
.nocell,
.sg-red {
  background: #58120b!important;
  color: #c5c5c5!important
}
.maybecell,
.sg-yellow {
  background: #625e0f!important;
  color: #c5c5c5!important
}
.sg-green,
.yescell {
  background: #1e5400!important;
  color: #c5c5c5!important
}
.coins-pos {
  color: #5e9ec4!important
}
.coins-neg {
  color: #d72b16!important
}
.portal-link a {
  background-color: #323232!important;
  color: #c5c5c5!important
}
.portal-link a:hover {
  background-color: #656565!important;
  color: #dfdfdf!important
}
.questdetails .questdetails-header,
table.alternating-rows tr:nth-child(even) {
  background-color: #2b2b2b!important
}
.status-active {
  background-color: #006d13!important;
  color: #c5c5c5!important
}
.status-inactive {
  background-color: #58120b!important;
  color: #c5c5c5!important
}
.attribute-total .attribute-value,
.attribute-total td,
.attribute-total th,
.attribute-value,
.infobox-bonuses th,
table.article-table th,
table.wikitable th {
  background-color: #2b2b2b!important;
  border-color: #52555a!important;
  color: #c5c5c5!important
}
#viewingnew-warning,
#viewingold-warning,
.extimage,
.gifresize,
.musicplayer,
.questdetails,
.shortcut,
.thumbinner,
td.famtreeleaf {
  background-color: #323232!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important
}
.extimage .caption,
.extimage .thumbcaption,
.gifresize .caption,
.gifresize .thumbcaption,
.thumbinner .caption,
.thumbinner .thumbcaption {
  width: auto!important;
  color: #c5c5c5!important;
  background: #323232!important;
  border: none!important;
  border-top: 1px solid #52555a!important
}
.mwe-math-element img {
  -webkit-filter: invert(.85)!important;
  filter: invert(.85)!important
}
.gallerybox .thumb {
  background-color: #323232!important;
  border-color: #52555a!important
}
#contentSub,
#contentSub2,
.gallerytext,
.suggestions-special .special-label {
  color: #acacac!important
}
code,
pre {
  border: 1px solid #424242!important;
  background-color: #353535!important
}
.EditPageEditor #diff,
.mmgtable-details,
.rsw-infobox .infobox-image.bordered-image,
.rsw-infobox td[colspan="2"]:not(.infobox-image):not(.infobox-map),
.toc>ul,
fieldset,
hr,
table,
table.article-table td,
table.wikitable td {
  border-color: #52555a!important
}
fieldset {
  background-color: #151515!important
}
.mw-ui-input,
.oo-ui-tagMultiselectWidget-handle,
input[type=number],
input[type=search],
input[type=text],
select,
textarea {
  background-color: #353535!important;
  color: #c5c5c5!important;
  border: 1px solid #52555a!important;
  box-shadow: none!important
}
select::-webkit-input-placeholder {
  color: #9f9f9f!important
}
select::-ms-input-placeholder {
  color: #9f9f9f!important
}
select::placeholder {
  color: #9f9f9f!important
}
textarea::-webkit-input-placeholder {
  color: #9f9f9f!important
}
textarea::-ms-input-placeholder {
  color: #9f9f9f!important
}
textarea::placeholder {
  color: #9f9f9f!important
}
textarea::-webkit-scrollbar {
  width: 13px!important
}
textarea::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  border-radius: 10px!important;
  background-color: #262626!important;
  border: 1px solid #2b2b2b!important
}
textarea::-webkit-scrollbar-thumb {
  border-radius: 10px!important;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3)!important;
  background-color: #404040!important;
  border: 1px solid #1a1a1a!important
}
textarea::-webkit-scrollbar-corner {
  background-color: transparent!important
}
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #c5c5c5!important;
  border-color: #52555a!important
}
ul {
  list-style-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='5' height='13'%3E %3Ccircle cx='2.5' cy='9.5' r='2.5' fill='#c5c5c5'/%3E %3C/svg%3E")
}
.mw-ui-input::-webkit-input-placeholder,
input[type=number]::-webkit-input-placeholder,
input[type=search]::-webkit-input-placeholder,
input[type=text]::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.mw-ui-input::-ms-input-placeholder,
input[type=number]::-ms-input-placeholder,
input[type=search]::-ms-input-placeholder,
input[type=text]::-ms-input-placeholder {
  color: #9f9f9f!important
}
.mw-ui-input::placeholder,
input[type=number]::placeholder,
input[type=search]::placeholder,
input[type=text]::placeholder {
  color: #9f9f9f!important
}
.oo-ui-tagMultiselectWidget-handle::-webkit-input-placeholder {
  color: #9f9f9f!important
}
.oo-ui-tagMultiselectWidget-handle::-ms-input-placeholder {
  color: #9f9f9f!important
}
.oo-ui-tagMultiselectWidget-handle::placeholder {
  color: #9f9f9f!important
}
#pagehistory li,
#simpleSearch #searchInput,
.oo-ui-tagMultiselectWidget-handle .oo-ui-inputWidget-input,
blockquote p {
  border: none!important
}
.button.secondary,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled>.oo-ui-buttonElement-button,
.oo-ui-tagItemWidget,
button.secondary,
input[type=button].secondary,
input[type=reset].secondary,
input[type=submit].secondary {
  color: #dfdfdf!important;
  background-image: none!important;
  border-color: #595959!important;
  background-color: #595959!important;
  border-style: solid!important
}
.button.secondary.active,
.button.secondary:active,
.button.secondary:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled>.oo-ui-buttonElement-button.active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled>.oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled>.oo-ui-buttonElement-button:hover,
.oo-ui-tagItemWidget.active,
.oo-ui-tagItemWidget:active,
.oo-ui-tagItemWidget:hover,
button.secondary.active,
button.secondary:active,
button.secondary:hover,
input[type=button].secondary.active,
input[type=button].secondary:active,
input[type=button].secondary:hover,
input[type=reset].secondary.active,
input[type=reset].secondary:active,
input[type=reset].secondary:hover,
input[type=submit].secondary.active,
input[type=submit].secondary:active,
input[type=submit].secondary:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  border-color: #4c4c4c!important;
  background-color: #4c4c4c!important
}
.oo-ui-menuSelectWidget {
  background-color: #2b2b2b!important;
  border-color: #52555a!important
}
#mw-head .vectorMenu h3 span,
#mw-revision-info,
#mw-revision-info-current,
#mw-revision-nav,
.navbox,
.navbox .navbox-footer a,
.navbox .navbox-title a,
.oo-ui-menuSelectWidget .oo-ui-menuOptionWidget,
.suggestions-result,
.suggestions-result-current .special-label,
.suggestions-special .special-query,
.vectorTabs li.selected a {
  color: #c5c5c5!important
}
.oo-ui-menuSelectWidget .oo-ui-menuOptionWidget.oo-ui-optionWidget-highlighted {
  color: #c5c5c5!important;
  background-color: #383838!important
}
.button,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive>.oo-ui-buttonElement-button,
button,
input[type=button],
input[type=reset],
input[type=submit] {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #2f69a8!important;
  border-color: #2f69a8!important;
  border-style: solid!important
}
#alphabetical-header,
.forumheader,
.messagebox,
.noarticletext,
.official {
  background-color: #151515!important
}
.button.active,
.button:active,
.button:hover,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive>.oo-ui-buttonElement-button.active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive>.oo-ui-buttonElement-button:active,
.oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive>.oo-ui-buttonElement-button:hover,
button.active,
button:active,
button:hover,
input[type=button].active,
input[type=button]:active,
input[type=button]:hover,
input[type=reset].active,
input[type=reset]:active,
input[type=reset]:hover,
input[type=submit].active,
input[type=submit]:active,
input[type=submit]:hover {
  color: #dfdfdf!important;
  background-image: none!important;
  background-color: #4082ca!important;
  border-color: #4082ca!important
}
table.wikipedia {
  background: #151515!important;
  border: none!important
}
.messagebox {
  border-left-color: #90c2dd!important
}
.messagebox.obsolete {
  border-color: #464646!important
}
.messagebox.disambig a,
.messagebox.info a,
.messagebox.obsolete a {
  color: #6c6c6c!important
}
.messagebox.disambig,
.messagebox.info {
  border-color: #898989!important
}
.messagebox.action {
  border-color: #45697d!important
}
.messagebox.action a {
  color: #3c5c6e!important
}
.messagebox.file {
  border-color: #617ebc!important
}
.messagebox.file a {
  color: #556d97!important
}
.messagebox.warn {
  border-color: #861c10!important
}
.messagebox.warn a {
  color: #861c10!important
}
.messagebox.safe {
  border-color: #1b8408!important
}
.messagebox.safe a {
  color: #1b8408!important
}
.messagebox.unsafe {
  border-color: #970!important
}
.messagebox.unsafe a {
  color: #970!important
}
.messagebox.easter {
  border-color: #598014!important
}
.messagebox.easter a {
  color: #598014!important
}
.messagebox.halloween {
  border-color: #794080!important
}
.messagebox.halloween a {
  color: #794080!important
}
.messagebox.thanksgiving {
  border-color: #a65800!important
}
.messagebox.thanksgiving a {
  color: #a65800!important
}
.messagebox.christmas {
  border-color: #428bb5!important
}
.messagebox.christmas a {
  color: #3a799d!important
}
.noarticletext {
  border-color: #52555a!important
}
#pagehistory .selected {
  background-color: #2b2b2b!important;
  color: #c5c5c5!important
}
.EditPageEditor #diff,
.diff,
.diff-addedline,
.diff-deletedline,
.diff-ntitle,
.diff-otitle {
  background-color: #1e1e1e!important;
  color: #c5c5c5!important
}
.diff-context {
  background: #2b2b2b!important;
  border-color: #2b2b2b!important;
  color: #c5c5c5!important
}
.diffchange {
  color: #222!important
}
.infobox,
table.article-table,
table.wikitable {
  background-color: #323232!important;
  color: #c5c5c5!important;
  border: none!important
}
.rsw-infobox .infobox-map,
.rsw-infobox .infobox-subheader {
  border-top-color: #323232!important
}
.lighttable .highlight-over {
  background-color: #236100!important
}
.lighttable .highlight-on {
  background-color: #1e5400!important
}
table.jquery-tablesorter th.headerSort {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="#c5c5c5"> <path d="M14.5 5l-4 4-4-4zM14.5 4l-4-4-4 4z"/> </svg>')!important
}
table.jquery-tablesorter th.headerSortUp {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M6.5 4l4-4 4 4z"/> </svg>')!important
}
table.jquery-tablesorter th.headerSortDown {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M14.5 0l-4 4-4-4z"/> </svg>')!important
}
.GE-set-cost tr:last-of-type td,
.navbox .navbox-group,
.navbox .navbox-subgroup .navbox-group,
.navbox .navbox-subgroup .navbox-title,
.table-na {
  background: #2b2b2b!important
}
.infobox-bonuses td,
.rsw-infobox,
.toc,
table.archive {
  background-color: #323232!important
}
.rsw-infobox .infobox-header {
  color: #c5c5c5!important;
  background-color: #246c97!important;
  border-bottom-color: #323232!important
}
.rsw-infobox .infobox-subheader {
  background-color: #6ba5c8!important;
  color: #dfdfdf!important;
  border-bottom-color: #323232!important
}
.rsw-infobox .infobox-subheader a,
.suggestions-result-current .special-query {
  color: #dfdfdf!important
}
.documentation,
.mw-body {
  color: #c5c5c5!important
}
.rsw-infobox th:not([colspan="2"]) {
  border-left-color: #52555a!important;
  border-right-color: #6ba5c8!important
}
.rsw-infobox td:not(.infobox-image):not(.infobox-map) {
  border-right-color: #52555a!important
}
table.wikitable td[bgcolor],
table.wikitable td[style*=background],
table.wikitable th[style*=background],
table.wikitable tr[bgcolor] td,
table.wikitable tr[style*=background] td {
  color: #3a3a3a!important
}
table.wikitable td[bgcolor] a,
table.wikitable td[style*=background] a,
table.wikitable th[style*=background] a,
table.wikitable tr[bgcolor] td a,
table.wikitable tr[style*=background] td a {
  color: #438ab5!important
}
table.archive {
  border: 1px solid #52555a!important
}
.questdetails #rs-qc-form {
  background: 0 0!important
}
.questdetails .oo-ui-icon-info {
  -webkit-filter: invert(.8)!important;
  filter: invert(.8)!important
}
.questreq ul {
  border-left: 1px dotted #9f9f9f!important
}
blockquote {
  border-left: 3px solid #52555a!important;
  color: #acacac!important
}
.infobox-bonuses td,
.mw-body {
  border-color: #52555a!important
}
.navbox,
.navbox .navbox-subgroup {
  background-color: #1e1e1e!important
}
.documentation,
.transcript,
body {
  background-color: #262626!important
}
.navbox .navbox-group,
.navbox .navbox-list {
  border-color: #1e1e1e!important
}
.navbox .navbox-footer,
.navbox .navbox-title {
  border-color: #1e1e1e!important;
  color: #c5c5c5!important;
  background: #265588!important
}
.navbox .navbox-collapsible .navbox-footer,
.navbox .navbox-collapsible .navbox-title {
  background-color: #2f69a8!important
}
.infobox-monster .offensive-header {
  background-color: #58120b!important
}
.infobox-monster .offensive-subheader {
  color: #861c10!important;
  background-color: #e6bbb3!important
}
.infobox-monster .defensive-header {
  background-color: #356e90!important
}
.infobox-monster .defensive-subheader {
  color: #32637c!important;
  background-color: #86bedc!important
}
.infobox-monster .slayer-header {
  background-color: #464646!important
}
.references > li:target {
  background-color: #383838!important
}
#alphabetical-header {
  border-color: #222!important
}
.mw-body {
  background-color: #1e1e1e!important;
  box-shadow: 0 0 7px fade(#1e1e1e,80%)!important
}
#mw-head .vectorMenu h3,
.vectorTabs,
.vectorTabs li {
  background: #262626!important
}
a {
  color: #6bbaea!important
}
a.new {
  color: #ba0000!important
}
#mw-indicator-mw-helplink a {
  -webkit-filter: invert(.8)!important;
  filter: invert(.8)!important;
  color: #a21e00!important
}
body {
  background-image: url(https://i.imgur.com/AFaXBVa.jpg)!important
}
.toc .toctitle {
  border: 1px solid #52555a!important;
  background: #2b2b2b!important
}
.toc ul ul {
  border-color: #acacac!important
}
#footer ul li {
  color: #b8b8b8!important
}
.vectorTabs {
  padding: 0!important
}
.vectorTabs li.selected {
  background: #1e1e1e!important;
  border: 1px solid #52555a!important;
  border-bottom: none!important
}
.vectorTabs li.selected span {
  position: relative!important;
  top: -1px!important
}
#mw-head .vectorMenu:hover h3,
.vectorTabs li:hover {
  background: #323232!important
}
#mw-head .vectorMenu h3 span:after,
.mw-echo-notifications-badge::before {
  -webkit-filter: invert(1)!important;
  filter: invert(1)!important
}
.suggestions-results,
.suggestions-special,
.vectorMenu .menu {
  background: #2b2b2b!important;
  border-color: #52555a!important
}
.suggestions-result-current,
.vectorMenu .menu li:hover {
  background: #383838!important
}
#simpleSearch {
  background: #353535!important
}
#simpleSearch #searchButton {
  background-color: transparent!important;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"> <g fill="none" stroke="#c5c5c5" stroke-width="2"> <path d="M11.29 11.71l-4-4"/> <circle cx="5" cy="5" r="4"/> </g> </svg>')!important;
  background-position: center center!important;
  background-repeat: no-repeat!important
}
#simpleSearch #mw-searchButton {
  display: none!important
}
.suggestions-result-current {
  color: #dfdfdf!important
}`;
if (typeof GM_addStyle != "undefined") {
    GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
    PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
    addStyle(css);
} else {
    var node = document.createElement("style");
    node.type = "text/css";
    node.appendChild(document.createTextNode(css));
    var heads = document.getElementsByTagName("head");
    if (heads.length > 0) {
        heads[0].appendChild(node);
    } else {
        // no head yet, stick it whereever
        document.documentElement.appendChild(node);
    }
}
})();