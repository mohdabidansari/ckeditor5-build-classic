/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import CKFinderUploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter.js";
import CloudServices from "@ckeditor/ckeditor5-cloud-services/src/cloudservices.js";
import Code from "@ckeditor/ckeditor5-basic-styles/src/code.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import FontBackgroundColor from "@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js";
import FontColor from "@ckeditor/ckeditor5-font/src/fontcolor.js";
import FontFamily from "@ckeditor/ckeditor5-font/src/fontfamily.js";
import FontSize from "@ckeditor/ckeditor5-font/src/fontsize.js";
import Heading from "@ckeditor/ckeditor5-heading/src/heading.js";
import HorizontalLine from "@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js";
import HtmlEmbed from "@ckeditor/ckeditor5-html-embed/src/htmlembed.js";
import Image from "@ckeditor/ckeditor5-image/src/image.js";
import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption.js";
import ImageInsert from "@ckeditor/ckeditor5-image/src/imageinsert.js";
import ImageResize from "@ckeditor/ckeditor5-image/src/imageresize.js";
import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle.js";
import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar.js";
import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload.js";
import Indent from "@ckeditor/ckeditor5-indent/src/indent.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js";
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting.js";
import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/strikethrough.js";
import Subscript from "@ckeditor/ckeditor5-basic-styles/src/subscript.js";
import Superscript from "@ckeditor/ckeditor5-basic-styles/src/superscript.js";
import Table from "@ckeditor/ckeditor5-table/src/table.js";
import TableCellProperties from "@ckeditor/ckeditor5-table/src/tablecellproperties";
import TableProperties from "@ckeditor/ckeditor5-table/src/tableproperties";
import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar.js";
import TextTransformation from "@ckeditor/ckeditor5-typing/src/texttransformation.js";
import Title from "@ckeditor/ckeditor5-heading/src/title.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Autoformat,
	BlockQuote,
	Bold,
	CKFinderUploadAdapter,
	CloudServices,
	Code,
	Essentials,
	FontBackgroundColor,
	FontColor,
	FontFamily,
	FontSize,
	Heading,
	HorizontalLine,
	HtmlEmbed,
	Image,
	ImageCaption,
	ImageInsert,
	ImageResize,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Indent,
	Italic,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	SourceEditing,
	Strikethrough,
	Subscript,
	Superscript,
	Table,
	TableCellProperties,
	TableProperties,
	TableToolbar,
	TextTransformation,
	Title,
	Underline,
];

// Editor configuration.
Editor.defaultConfig = {
	toolbar: {
		items: [
			"heading",
			"|",
			"bold",
			"italic",
			"underline",
			"alignment",
			"|",
			"bulletedList",
			"numberedList",
			"outdent",
			"indent",
			"|",
			"horizontalLine",
			"blockQuote",
			"fontColor",
			"fontBackgroundColor",
			"fontFamily",
			"fontSize",
			"htmlEmbed",
			"insertTable",
			"code",
			"link",
			"mediaEmbed",
			"imageUpload",
			"imageInsert",
			"sourceEditing",
			"strikethrough",
			"subscript",
			"superscript",
			"redo",
			"undo",
		],
	},
	language: "en",
	image: {
		toolbar: [
			"imageTextAlternative",
			"imageStyle:inline",
			"imageStyle:block",
			"imageStyle:side",
		],
	},
	table: {
		contentToolbar: [
			"tableColumn",
			"tableRow",
			"mergeTableCells",
			"tableCellProperties",
			"tableProperties",
		],
	},
	fontSize: {
		options: [9, 11, 13, "default", 17, 19, 21],
	},
};

export default Editor;

// /* eslint-disable no-mixed-spaces-and-tabs */
// /**
//  * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
//  * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
//  */

// // The editor creator to use.
// import ClassicEditorBase from "@ckeditor/ckeditor5-editor-classic/src/classiceditor";
// import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
// import UploadAdapter from "@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter";
// import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat";
// import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
// import Strikethrough from "@ckeditor/ckeditor5-basic-styles/src/Strikethrough";
// import underline from "@ckeditor/ckeditor5-basic-styles/src/underline";
// import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";
// import BlockQuote from "@ckeditor/ckeditor5-block-quote/src/blockquote";
// import CKFinder from "@ckeditor/ckeditor5-ckfinder/src/ckfinder";
// import EasyImage from "@ckeditor/ckeditor5-easy-image/src/easyimage";
// import Heading from "@ckeditor/ckeditor5-heading/src/heading";
// import Image from "@ckeditor/ckeditor5-image/src/image";
// import ImageCaption from "@ckeditor/ckeditor5-image/src/imagecaption";
// import ImageStyle from "@ckeditor/ckeditor5-image/src/imagestyle";
// import ImageToolbar from "@ckeditor/ckeditor5-image/src/imagetoolbar";
// import ImageUpload from "@ckeditor/ckeditor5-image/src/imageupload";
// import Link from "@ckeditor/ckeditor5-link/src/link";
// import List from "@ckeditor/ckeditor5-list/src/list";
// import MediaEmbed from "@ckeditor/ckeditor5-media-embed/src/mediaembed";
// import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph";
// import PasteFromOffice from "@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice";
// import Table from "@ckeditor/ckeditor5-table/src/table";
// import TableToolbar from "@ckeditor/ckeditor5-table/src/tabletoolbar";
// import Font from "@ckeditor/ckeditor5-font/src/font";
// import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment";
// // import Mention from "@ckeditor/ckeditor5-mention/src/mention";

// export default class ClassicEditor extends ClassicEditorBase {}

// // Plugins to include in the build.
// ClassicEditor.builtinPlugins = [
// 	Essentials,
// 	UploadAdapter,
// 	Autoformat,
// 	Bold,
// 	Italic,
// 	BlockQuote,
// 	CKFinder,
// 	EasyImage,
// 	Heading,
// 	Image,
// 	ImageCaption,
// 	ImageStyle,
// 	ImageToolbar,
// 	ImageUpload,
// 	Link,
// 	List,
// 	MediaEmbed,
// 	Paragraph,
// 	PasteFromOffice,
// 	Table,
// 	TableToolbar,
// 	Font,
// 	Alignment,
// 	Strikethrough,
// 	underline,
// 	// Mention,
// ];

// // Editor configuration.
// ClassicEditor.defaultConfig = {
// 	fontFamily: {
// 		options: [
// 			"default",
// 			" Arial",
// 			"comic-sans-MS",
// 			"Courier New",
// 			"Tahoma",
// 			"georgia",
// 			"Verdana",
// 			"Time new roman",
// 			"Trebuchet MS",
// 			"Lucid Sans Unicode",
// 		],
// 	},
// 	fontSize: {
// 		options: [9, 11, 13, "default", 17, 19, 21],
// 	},
// 	// eslint-disable-next-line max-len
// 	toolbar: [
// 		"heading",
// 		"|",
// 		"bold",
// 		"italic",
// 		"strikethrough",
// 		"underline",
// 		"|",
// 		"numberedList",
// 		"bulletedList",
// 		"|",
// 		"fontSize",
// 		"fontColor",
// 		"fontBackgroundColor",
// 		"fontFamily",
// 		"|",
// 		"link",
// 		"insertTable",
// 		"Alignment",
// 	],
// 	heading: {
// 		options: [
// 			{
// 				model: "paragraph",
// 				title: "Paragraph",
// 				class: "ck-heading_paragraph",
// 			},
// 			{
// 				model: "heading1",
// 				view: "h1",
// 				title: "Heading 1",
// 				class: "ck-heading_heading1",
// 			},
// 			{
// 				model: "heading2",
// 				view: "h2",
// 				title: "Heading 2",
// 				class: "ck-heading_heading2",
// 			},
// 			{
// 				model: "heading3",
// 				view: "h3",
// 				title: "Heading 3",
// 				class: "ck-heading_heading3",
// 			},
// 			{
// 				model: "heading4",
// 				view: "h3",
// 				title: "Heading 4",
// 				class: "ck-heading_heading4",
// 			},
// 			{
// 				model: "heading5",
// 				view: "h4",
// 				title: "Heading 5",
// 				class: "ck-heading_heading5",
// 			},
// 			{
// 				model: "heading6",
// 				view: "h6",
// 				title: "Heading 6",
// 				class: "ck-heading_heading6",
// 			},
// 			{
// 				model: "address",
// 				view: "address",
// 				title: "address",
// 				class: "ck-address",
// 			},
// 			{
// 				model: "div",
// 				view: "div",
// 				title: "normal div",
// 				class: "ck-normal-div",
// 			},
// 			{
// 				model: "hr",
// 				view: "hr",
// 				title: "line break",
// 				class: "hr",
// 			},
// 		],
// 	},
// 	table: {
// 		contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
// 	},
// };
