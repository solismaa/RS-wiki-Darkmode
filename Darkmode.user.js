// ==UserScript==
// @name          Runescape wiki DarkMode
// @namespace     https://github.com/CephHunter
// @description	  A dark theme for the Runescape wiki
// @author        CephHunter
// @homepage      https://github.com/CephHunter/RS-wiki-DarkMode#readme
// @supportURL    https://github.com/CephHunter/RS-wiki-DarkMode/issues
// @include       https://runescape.wiki/*
// @run-at        document-start
// @version       3.0.0-alpha.1
// ==/UserScript==
(function() {var css = `
.sg-red,
.nocell {
  background: #58120b;
  color: #c5c5c5; }

.sg-yellow,
.maybecell {
  background: #625e0f;
  color: #c5c5c5; }

.sg-green,
.yescell {
  background: #1e5400;
  color: #c5c5c5; }

.coins-pos {
  color: #5e9ec4; }

.coins-neg {
  color: #d72b16; }

.portal-link a {
  background-color: #323232; }
  .portal-link a, .portal-link a:visited, .portal-link a:active, .portal-link a:link {
    color: #c5c5c5; }
    .portal-link a.new, .portal-link a:visited.new, .portal-link a:active.new, .portal-link a:link.new {
      color: #ba0000; }

.portal-link a:hover {
  background-color: #656565;
  color: #dfdfdf; }

table.alternating-rows tr:nth-child(even) {
  background-color: #2b2b2b; }

.status-active {
  background-color: #006d13;
  color: #c5c5c5; }

.status-inactive {
  background-color: #58120b;
  color: #c5c5c5; }

.attribute-value {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5; }

.attribute-total td,
.attribute-total th,
.attribute-total .attribute-value {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5; }

div.gifresize,
div.thumbinner,
div.extimage {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }
  div.gifresize .caption,
  div.gifresize .thumbcaption,
  div.thumbinner .caption,
  div.thumbinner .thumbcaption,
  div.extimage .caption,
  div.extimage .thumbcaption {
    width: auto;
    color: #c5c5c5;
    border-color: #52555a;
    background: #323232;
    border: none;
    border-top: solid 1px #52555a; }

div.musicplayer {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }

.mwe-math-element img {
  -webkit-filter: invert(0.85);
          filter: invert(0.85); }

.gallery .gallerybox .thumb {
  background-color: #323232;
  border-color: #52555a; }

.gallery .gallerytext {
  color: #acacac; }

pre {
  border: solid 1px #424242;
  background-color: #353535; }

code {
  border: solid 1px #424242;
  background-color: #353535; }

hr {
  border-color: #52555a; }

select {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none; }
  select::-webkit-input-placeholder {
    color: #9f9f9f; }
  select::-ms-input-placeholder {
    color: #9f9f9f; }
  select::placeholder {
    color: #9f9f9f; }
  select:hover {
    border-color: #6a6e75; }

textarea {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none; }
  textarea::-webkit-input-placeholder {
    color: #9f9f9f; }
  textarea::-ms-input-placeholder {
    color: #9f9f9f; }
  textarea::placeholder {
    color: #9f9f9f; }
  textarea:hover {
    border-color: #6a6e75; }
  textarea::-webkit-scrollbar {
    width: 13px; }
  textarea::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #262626;
    border: solid 1px #2b2b2b; }
  textarea::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #404040;
    border: 1px solid #1a1a1a; }
  textarea::-webkit-scrollbar-corner {
    background-color: transparent; }

h1, h2, h3, h4, h5, h6 {
  color: #c5c5c5;
  border-color: #52555a; }

ul {
  /* no important */
  list-style-image: url("data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' width='5' height='13'%3E %3Ccircle cx='2.5' cy='9.5' r='2.5' fill='#c5c5c5'/%3E %3C/svg%3E"); }

.oo-ui-textInputWidget.oo-ui-widget-enabled input,
.oo-ui-textInputWidget.oo-ui-widget-enabled textarea,
input[type="search"],
input[type="text"],
input[type="number"],
.mw-ui-input {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none; }
  .oo-ui-textInputWidget.oo-ui-widget-enabled input::-webkit-input-placeholder,
  .oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-webkit-input-placeholder,
  input[type="search"]::-webkit-input-placeholder,
  input[type="text"]::-webkit-input-placeholder,
  input[type="number"]::-webkit-input-placeholder,
  .mw-ui-input::-webkit-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-textInputWidget.oo-ui-widget-enabled input::-ms-input-placeholder,
  .oo-ui-textInputWidget.oo-ui-widget-enabled textarea::-ms-input-placeholder,
  input[type="search"]::-ms-input-placeholder,
  input[type="text"]::-ms-input-placeholder,
  input[type="number"]::-ms-input-placeholder,
  .mw-ui-input::-ms-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-textInputWidget.oo-ui-widget-enabled input::placeholder,
  .oo-ui-textInputWidget.oo-ui-widget-enabled textarea::placeholder,
  input[type="search"]::placeholder,
  input[type="text"]::placeholder,
  input[type="number"]::placeholder,
  .mw-ui-input::placeholder {
    color: #9f9f9f; }
  .oo-ui-textInputWidget.oo-ui-widget-enabled input:hover,
  .oo-ui-textInputWidget.oo-ui-widget-enabled textarea:hover,
  input[type="search"]:hover,
  input[type="text"]:hover,
  input[type="number"]:hover,
  .mw-ui-input:hover {
    border-color: #6a6e75; }

.oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle::-webkit-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle::-ms-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle::placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle:hover {
    border-color: #6a6e75; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled .oo-ui-dropdownWidget-handle:hover {
    background: #353535;
    color: #c5c5c5; }

.oo-ui-indicator-down {
  -webkit-filter: invert(1);
          filter: invert(1); }

.oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle {
  background-color: #353535;
  color: #c5c5c5;
  border: solid 1px #52555a;
  box-shadow: none; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle::-webkit-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle::-ms-input-placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle::placeholder {
    color: #9f9f9f; }
  .oo-ui-dropdownWidget.oo-ui-widget-enabled.oo-ui-dropdownWidget-open .oo-ui-dropdownWidget-handle:hover {
    border-color: #6a6e75; }

.oo-ui-menuSelectWidget {
  background-color: #2b2b2b;
  border-color: #52555a; }
  .oo-ui-menuSelectWidget .oo-ui-menuOptionWidget {
    color: #c5c5c5; }
    .oo-ui-menuSelectWidget .oo-ui-menuOptionWidget.oo-ui-optionWidget-highlighted, .oo-ui-menuSelectWidget .oo-ui-menuOptionWidget.oo-ui-optionWidget-selected, .oo-ui-menuSelectWidget .oo-ui-menuOptionWidget.oo-ui-optionWidget-highlighted.oo-ui-optionWidget-selected {
      color: #c5c5c5;
      background-color: #383838; }

input[type="submit"],
input[type="reset"],
input[type="button"],
.button,
button {
  color: #dfdfdf;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid; }
  input[type="submit"]:hover, input[type="submit"]:active, input[type="submit"].active,
  input[type="reset"]:hover,
  input[type="reset"]:active,
  input[type="reset"].active,
  input[type="button"]:hover,
  input[type="button"]:active,
  input[type="button"].active,
  .button:hover,
  .button:active,
  .button.active,
  button:hover,
  button:active,
  button.active {
    color: #dfdfdf;
    background-image: none;
    background-color: #4082ca;
    border-color: #4082ca; }
  input[type="submit"].secondary,
  input[type="reset"].secondary,
  input[type="button"].secondary,
  .button.secondary,
  button.secondary {
    color: #dfdfdf;
    background-image: none;
    border-color: #595959;
    background-color: #595959;
    border-style: solid; }
    input[type="submit"].secondary:hover, input[type="submit"].secondary:active, input[type="submit"].secondary.active,
    input[type="reset"].secondary:hover,
    input[type="reset"].secondary:active,
    input[type="reset"].secondary.active,
    input[type="button"].secondary:hover,
    input[type="button"].secondary:active,
    input[type="button"].secondary.active,
    .button.secondary:hover,
    .button.secondary:active,
    .button.secondary.active,
    button.secondary:hover,
    button.secondary:active,
    button.secondary.active {
      color: #dfdfdf;
      background-image: none;
      border-color: #4c4c4c;
      background-color: #4c4c4c; }

.oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button {
  color: #dfdfdf;
  background-image: none;
  background-color: #2f69a8;
  border-color: #2f69a8;
  border-style: solid; }
  .oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button:hover, .oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button:active, .oo-ui-buttonElement-framed.oo-ui-widget-enabled.oo-ui-flaggedElement-primary.oo-ui-flaggedElement-progressive > .oo-ui-buttonElement-button.active {
    color: #dfdfdf;
    background-image: none;
    background-color: #4082ca;
    border-color: #4082ca; }

.oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button {
  color: #dfdfdf;
  background-image: none;
  border-color: #595959;
  background-color: #595959;
  border-style: solid; }
  .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:hover, .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button:active, .oo-ui-buttonElement-framed.oo-ui-widget-enabled > .oo-ui-buttonElement-button.active {
    color: #dfdfdf;
    background-image: none;
    border-color: #4c4c4c;
    background-color: #4c4c4c; }

.oo-ui-checkboxInputWidget [type='checkbox'] + span {
  border-color: #52555a;
  background-color: #353535; }

.oo-ui-panelLayout-framed {
  border-color: #52555a;
  background-color: #151515; }

table.wikipedia {
  background: #151515;
  border: none; }

.messagebox,
.official,
.forumheader {
  background-color: #151515; }

.messagebox.obsolete, .messagebox.info, .messagebox.action, .messagebox.file, .messagebox.warn, .messagebox.disambig, .messagebox.safe, .messagebox.unsafe, .messagebox.easter, .messagebox.halloween, .messagebox.thanksgiving, .messagebox.christmas {
  background: #151515; }

.noarticletext .tile {
  background-color: #151515;
  border-color: #52555a; }

.editnotice {
  background: #151515;
  color: #c5c5c5;
  border-color: #52555a; }

#mw-history-search {
  background-color: #151515;
  border-color: #52555a; }

#pagehistory li {
  border-color: #1e1e1e; }

#pagehistory li.selected {
  background-color: #2b2b2b;
  color: #c5c5c5;
  border-color: #1e1e1e; }

.diff,
.diff-otitle,
.diff-ntitle,
.diff-deletedline,
.diff-addedline,
.EditPageEditor #diff {
  background-color: #1e1e1e;
  color: #c5c5c5; }

td.diff-context {
  background: #2b2b2b;
  border-color: #2b2b2b;
  color: #c5c5c5; }

.diffchange {
  color: #222222; }

#viewingold-warning,
#viewingnew-warning {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }

#mw-revision-info,
#mw-revision-info-current,
#mw-revision-nav {
  color: #c5c5c5; }

.infobox {
  background-color: #323232;
  color: #c5c5c5;
  border: none; }

table.wikitable,
table.article-table {
  background-color: #323232;
  color: #c5c5c5;
  border: none; }
  table.wikitable > * > tr > td,
  table.article-table > * > tr > td {
    border-color: #52555a; }
  table.wikitable > * > tr > th,
  table.article-table > * > tr > th {
    background-color: #2b2b2b;
    border-color: #52555a;
    color: #c5c5c5; }
    table.wikitable > * > tr > th a, table.wikitable > * > tr > th a:visited, table.wikitable > * > tr > th a:active, table.wikitable > * > tr > th a:link,
    table.article-table > * > tr > th a,
    table.article-table > * > tr > th a:visited,
    table.article-table > * > tr > th a:active,
    table.article-table > * > tr > th a:link {
      color: #6bbaea; }
      table.wikitable > * > tr > th a.new, table.wikitable > * > tr > th a:visited.new, table.wikitable > * > tr > th a:active.new, table.wikitable > * > tr > th a:link.new,
      table.article-table > * > tr > th a.new,
      table.article-table > * > tr > th a:visited.new,
      table.article-table > * > tr > th a:active.new,
      table.article-table > * > tr > th a:link.new {
        color: #ba0000; }

table.lighttable .highlight-over {
  background-color: #236100; }

table.lighttable .highlight-on {
  background-color: #1e5400; }

table.jquery-tablesorter th.headerSort {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="9" viewBox="0 0 21 9" fill="#c5c5c5"> <path d="M14.5 5l-4 4-4-4zM14.5 4l-4-4-4 4z"/> </svg>'); }

table.jquery-tablesorter th.headerSortUp {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M6.5 4l4-4 4 4z"/> </svg>'); }

table.jquery-tablesorter th.headerSortDown {
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="21" height="4" viewBox="0 0 21 4" fill="#c5c5c5"> <path d="M14.5 0l-4 4-4-4z"/> </svg>'); }

.table-na {
  background: #2b2b2b; }

.rsw-infobox {
  background-color: #323232; }
  .rsw-infobox .infobox-header {
    color: #c5c5c5;
    background-color: #265588;
    border-bottom-color: #323232; }
  .rsw-infobox .infobox-subheader {
    background-color: #2f69a8;
    color: #dfdfdf;
    border-top-color: #323232;
    border-bottom-color: #323232; }
    .rsw-infobox .infobox-subheader a {
      color: #dfdfdf; }
  .rsw-infobox .infobox-image.bordered-image {
    border-color: #52555a; }
  .rsw-infobox .infobox-map {
    border-top-color: #323232; }
  .rsw-infobox th:not([colspan="2"]) {
    border-left-color: #52555a;
    border-right-color: #2f69a8; }
  .rsw-infobox th:not(.infobox-header):not(.infobox-subheader) {
    border-left-color: #52555a; }
  .rsw-infobox td:not(.infobox-image):not(.infobox-map) {
    border-right-color: #52555a; }
  .rsw-infobox td[colspan="2"]:not(.infobox-image):not(.infobox-map) {
    border-color: #52555a; }

table.wikitable tr[style*="background"] td,
table.wikitable tr[bgcolor] td,
table.wikitable td[style*="background"],
table.wikitable td[bgcolor],
table.wikitable th[style*="background"] {
  color: #3a3a3a; }
  table.wikitable tr[style*="background"] td a,
  table.wikitable tr[bgcolor] td a,
  table.wikitable td[style*="background"] a,
  table.wikitable td[bgcolor] a,
  table.wikitable th[style*="background"] a {
    color: #438ab5; }

table {
  border-color: #52555a; }

table.archive {
  background-color: #323232 !important;
  border: solid 1px #52555a !important; }

.GE-set-cost tr:last-of-type td {
  background: #2b2b2b !important; }

.questdetails {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }
  .questdetails .questdetails-header {
    background-color: #2b2b2b; }
  .questdetails #rs-qc-form {
    background: none; }
  .questdetails .oo-ui-icon-info {
    -webkit-filter: invert(0.8);
            filter: invert(0.8); }

.questreq ul {
  border-left: 1px dotted #9f9f9f; }

blockquote {
  border-left: solid 3px #52555a;
  color: #acacac; }
  blockquote p {
    border: none; }

.pullquote {
  color: #acacac; }

.navbox {
  color: #c5c5c5; }
  .navbox,
  .navbox .navbox-subgroup {
    background-color: #1e1e1e; }
  .navbox .navbox-group {
    background: #2b2b2b; }
  .navbox .navbox-list,
  .navbox .navbox-group {
    border-color: #1e1e1e; }
  .navbox .navbox-subgroup .navbox-title,
  .navbox .navbox-subgroup .navbox-group {
    background: #2b2b2b; }
  .navbox .navbox-title,
  .navbox .navbox-footer {
    border-color: #1e1e1e;
    color: #c5c5c5;
    background: #265588; }
    .navbox .navbox-title a,
    .navbox .navbox-footer a {
      color: #c5c5c5; }
  .navbox .navbox-collapsible .navbox-title,
  .navbox .navbox-collapsible .navbox-footer {
    background-color: #2f69a8; }

.documentation {
  background-color: #262626;
  color: #c5c5c5; }

.shortcut {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }

.infobox-bonuses td {
  border-color: #52555a;
  background-color: #323232; }

.infobox-bonuses th {
  background-color: #2b2b2b;
  border-color: #52555a;
  color: #c5c5c5; }

.infobox-monster .offensive-header {
  background-color: #58120b; }

.infobox-monster .offensive-subheader {
  color: #861c10;
  background-color: #e6bbb3; }

.infobox-monster .defensive-header {
  background-color: #356e90; }

.infobox-monster .defensive-subheader {
  color: #32637c;
  background-color: #86bedc; }

.infobox-monster .slayer-header {
  background-color: #464646; }

.references > li:target {
  background-color: #383838; }

.transcript {
  background-color: #262626; }

td.famtreeleaf {
  background-color: #323232;
  color: #c5c5c5;
  border: solid 1px #52555a; }

#alphabetical-header {
  background-color: #151515;
  border-color: #222222; }

.mmgtable-details {
  border-color: #52555a; }

.mw-body {
  color: #c5c5c5;
  background-color: #1e1e1e;
  border-color: #52555a;
  box-shadow: 0 0 7px fade(#1e1e1e, 80%); }

a, a:visited, a:active, a:link,
image a,
image a:visited,
image a:active,
image a:link,
table.wikitable a,
table.wikitable a:visited,
table.wikitable a:active,
table.wikitable a:link,
table.prettytable a,
table.prettytable a:visited,
table.prettytable a:active,
table.prettytable a:link,
table.messagebox a,
table.messagebox a:visited,
table.messagebox a:active,
table.messagebox a:link,
div.vectorTabs li a,
div.vectorTabs li a:visited,
div.vectorTabs li a:active,
div.vectorTabs li a:link,
div.vectorMenu li a,
div.vectorMenu li a:visited,
div.vectorMenu li a:active,
div.vectorMenu li a:link,
div#mw-panel div.portal div.body ul li a,
div#mw-panel div.portal div.body ul li a:visited,
div#mw-panel div.portal div.body ul li a:active,
div#mw-panel div.portal div.body ul li a:link {
  color: #6bbaea; }
  a.new, a:visited.new, a:active.new, a:link.new,
  image a.new,
  image a:visited.new,
  image a:active.new,
  image a:link.new,
  table.wikitable a.new,
  table.wikitable a:visited.new,
  table.wikitable a:active.new,
  table.wikitable a:link.new,
  table.prettytable a.new,
  table.prettytable a:visited.new,
  table.prettytable a:active.new,
  table.prettytable a:link.new,
  table.messagebox a.new,
  table.messagebox a:visited.new,
  table.messagebox a:active.new,
  table.messagebox a:link.new,
  div.vectorTabs li a.new,
  div.vectorTabs li a:visited.new,
  div.vectorTabs li a:active.new,
  div.vectorTabs li a:link.new,
  div.vectorMenu li a.new,
  div.vectorMenu li a:visited.new,
  div.vectorMenu li a:active.new,
  div.vectorMenu li a:link.new,
  div#mw-panel div.portal div.body ul li a.new,
  div#mw-panel div.portal div.body ul li a:visited.new,
  div#mw-panel div.portal div.body ul li a:active.new,
  div#mw-panel div.portal div.body ul li a:link.new {
    color: #ba0000; }

.mw-body-content a.external, .mw-body-content a.external:visited, .mw-body-content a.external:active, .mw-body-content a.external:link,
.mw-body-content a.extiw,
.mw-body-content a.extiw:visited,
.mw-body-content a.extiw:active,
.mw-body-content a.extiw:link {
  color: #6bbaea; }
  .mw-body-content a.external.new, .mw-body-content a.external:visited.new, .mw-body-content a.external:active.new, .mw-body-content a.external:link.new,
  .mw-body-content a.extiw.new,
  .mw-body-content a.extiw:visited.new,
  .mw-body-content a.extiw:active.new,
  .mw-body-content a.extiw:link.new {
    color: #ba0000; }

#mw-indicator-mw-helplink a {
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#c5c5c5"> <path d="M12.001 2.085c-5.478 0-9.916 4.438-9.916 9.916 0 5.476 4.438 9.914 9.916 9.914 5.476 0 9.914-4.438 9.914-9.914 0-5.478-4.438-9.916-9.914-9.916zm.001 18c-4.465 0-8.084-3.619-8.084-8.083 0-4.465 3.619-8.084 8.084-8.084 4.464 0 8.083 3.619 8.083 8.084 0 4.464-3.619 8.083-8.083 8.083z"/> <path d="M11.766 6.688c-2.5 0-3.219 2.188-3.219 2.188l1.411.854s.298-.791.901-1.229c.516-.375 1.625-.625 2.219.125.701.885-.17 1.587-1.078 2.719-.953 1.186-1 3.655-1 3.655h1.969s.135-2.318 1.041-3.381c.603-.707 1.443-1.338 1.443-2.494s-1.187-2.437-3.687-2.437zM11 16h2v2h-2z"/> </svg>') left center no-repeat; }

body {
  background-color: #262626;
  background-image: url("https://i.imgur.com/AFaXBVa.jpg"); }

#mw-panel .portal h3 {
  color: #c5c5c5; }

#toc {
  background-color: #323232; }
  #toc .toctitle {
    border: solid 1px #52555a;
    background: #2b2b2b; }
    #toc .toctitle h2 {
      color: #c5c5c5; }
    #toc .toctitle a, #toc .toctitle a:visited, #toc .toctitle a:active, #toc .toctitle a:link {
      color: #6bbaea; }
      #toc .toctitle a.new, #toc .toctitle a:visited.new, #toc .toctitle a:active.new, #toc .toctitle a:link.new {
        color: #ba0000; }
  #toc > ul {
    border-color: #52555a; }
  #toc ul ul {
    border-color: #acacac; }
  #toc .toclevel-1 a {
    color: #c5c5c5; }
  #toc .toclevel-2 a {
    color: #acacac; }

#contentSub,
#contentSub2 {
  color: #acacac; }

#footer ul li {
  color: #b8b8b8; }

div.vectorTabs {
  padding: 0;
  background: #262626; }

#mw-head .vectorTabs ul li {
  background-color: #262626; }
  #mw-head .vectorTabs ul li.selected {
    background-color: #1e1e1e;
    border: solid 1px #52555a;
    border-bottom: none; }
    #mw-head .vectorTabs ul li.selected span {
      position: relative;
      top: -1px; }
    #mw-head .vectorTabs ul li.selected a {
      color: #c5c5c5; }
  #mw-head .vectorTabs ul li:hover {
    background-color: #323232; }

#mw-head #p-cactions.vectorMenu h3 {
  background: #262626; }
  #mw-head #p-cactions.vectorMenu h3 span {
    color: #c5c5c5; }
    #mw-head #p-cactions.vectorMenu h3 span:after {
      -webkit-filter: invert(1);
              filter: invert(1); }

#mw-head #p-cactions.vectorMenu:hover h3 {
  background: #323232; }

#mw-head .vectorMenu .menu {
  background: #2b2b2b;
  border-color: #52555a; }
  #mw-head .vectorMenu .menu li:hover {
    background: #383838; }

#mw-head #simpleSearch {
  background: #353535; }
  #mw-head #simpleSearch #searchInput {
    background-color: #353535;
    color: #c5c5c5;
    border: solid 1px #52555a;
    box-shadow: none;
    border: none; }
    #mw-head #simpleSearch #searchInput::-webkit-input-placeholder {
      color: #9f9f9f; }
    #mw-head #simpleSearch #searchInput::-ms-input-placeholder {
      color: #9f9f9f; }
    #mw-head #simpleSearch #searchInput::placeholder {
      color: #9f9f9f; }
    #mw-head #simpleSearch #searchInput:hover {
      border-color: #6a6e75; }
  #mw-head #simpleSearch #searchButton {
    background-color: transparent;
    background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="13"> <g fill="none" stroke="#c5c5c5" stroke-width="2"> <path d="M11.29 11.71l-4-4"/> <circle cx="5" cy="5" r="4"/> </g> </svg>');
    background-position: center center;
    background-repeat: no-repeat; }
  #mw-head #simpleSearch #mw-searchButton {
    display: none; }

.mw-echo-notifications-badge::before {
  -webkit-filter: invert(1);
          filter: invert(1); }

.suggestions-results, .suggestions-special {
  background: #2b2b2b;
  border-color: #52555a; }

.suggestions-result {
  color: #c5c5c5; }

.suggestions-special .special-label {
  color: #acacac; }

.suggestions-special .special-query {
  color: #c5c5c5; }

.suggestions-result-current {
  background: #383838;
  color: #dfdfdf; }
  .suggestions-result-current .special-label {
    color: #c5c5c5; }
  .suggestions-result-current .special-query {
    color: #dfdfdf; }

.catlinks {
  background: #151515;
  border-color: #52555a; }
`;
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