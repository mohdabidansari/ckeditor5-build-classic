import { Plugin } from "ckeditor5/src/core";
import ImageInsertPanelView from "./ui/imageinsertpanelview";
import { prepareIntegrations } from "./utils";
import "../../themes/style.css";

export default class InsertImageUrl extends Plugin {
	static get pluginName() {
		return "insertimageurl";
	}
	init() {
		const editor = this.editor;
		const componentCreator = (locale) => {
			return this._createDropdownView(locale);
		};

		editor.ui.componentFactory.add("insertimageurl", componentCreator);
	}

	/**
	 * Creates the dropdown view.
	 *
	 * @param {module:utils/locale~Locale} locale The localization services instance.
	 *
	 * @private
	 * @returns {module:ui/dropdown/dropdownview~DropdownView}
	 */
	_createDropdownView(locale) {
		const editor = this.editor;
		const t = editor.t;
		const imageInsertView = new ImageInsertPanelView(
			locale,
			prepareIntegrations(editor)
		);
		const command = editor.commands.get("uploadImage");

		const dropdownView = imageInsertView.dropdownView;
		const splitButtonView = dropdownView.buttonView;

		splitButtonView.once("execute", (e) => {
			dropdownView.buttonView.fire("open");
		});

		splitButtonView.on("execute", (e) => {
			dropdownView.isOpen = true;
			dropdownView.fire("change:isOpen");
		});

		return this._setUpDropdown(dropdownView, imageInsertView, command);
	}

	_setUpDropdown(dropdownView, imageInsertView, command) {
		const editor = this.editor;
		const t = editor.t;
		const insertButtonView = imageInsertView.insertButtonView;
		const insertImageViaUrlForm =
			imageInsertView.getIntegration("insertImageViaUrl");
		const panelView = dropdownView.panelView;
		const imageUtils = this.editor.plugins.get("ImageUtils");

		dropdownView.bind("isEnabled").to(command);
		dropdownView.buttonView.once("open", () => {
			panelView.children.add(imageInsertView);
		});

		dropdownView.on(
			"change:isOpen",
			() => {
				const selectedElement =
					editor.model.document.selection.getSelectedElement();

				if (dropdownView.isOpen) {
					imageInsertView.focus();

					if (imageUtils.isImage(selectedElement)) {
						imageInsertView.imageURLInputValue =
							selectedElement.getAttribute("src");
						insertButtonView.label = t("Update");
						insertImageViaUrlForm.label = t("Update image URL");
					} else {
						imageInsertView.imageURLInputValue = "";
						insertButtonView.label = t("Insert");
						insertImageViaUrlForm.label = t("Insert image via URL");
					}
				}
				// Note: Use the low priority to make sure the following listener starts working after the
				// default action of the drop-down is executed (i.e. the panel showed up). Otherwise, the
				// invisible form/input cannot be focused/selected.
			},
			{ priority: "low" }
		);

		imageInsertView.delegate("submit", "cancel").to(dropdownView);
		this.delegate("cancel").to(dropdownView);

		dropdownView.on("submit", () => {
			closePanel();
			onSubmit();
		});

		dropdownView.on("cancel", () => {
			closePanel();
		});

		function onSubmit() {
			const selectedElement =
				editor.model.document.selection.getSelectedElement();

			if (imageUtils.isImage(selectedElement)) {
				editor.model.change((writer) => {
					writer.setAttribute(
						"src",
						imageInsertView.imageURLInputValue,
						selectedElement
					);
					writer.removeAttribute("srcset", selectedElement);
					writer.removeAttribute("sizes", selectedElement);
				});
			} else {
				editor.execute("insertImage", {
					source: imageInsertView.imageURLInputValue,
				});
			}
		}

		function closePanel() {
			editor.editing.view.focus();
			dropdownView.isOpen = false;
		}

		return dropdownView;
	}
}
