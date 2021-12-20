import ViewElement from "@ckeditor/ckeditor5-engine/src/view/element";
import ViewText from "@ckeditor/ckeditor5-engine/src/view/text";
import ViewDocumentFragment from "@ckeditor/ckeditor5-engine/src/view/documentfragment";

const viewToJson = (viewElement) => {
	if (viewElement.is("text")) {
		return { text: viewElement.data };
	} else {
		const json = {
			name: viewElement.name,
			attributes: {},
			children: [],
		};

		for (const [key, value] of viewElement.getAttributes()) {
			json.attributes[key] = value;
		}

		for (const child of viewElement.getChildren()) {
			json.children.push(viewToJson(child));
		}

		return json;
	}
};

const jsonToView = (jsonObject) => {
	if (jsonObject.text) {
		return new ViewText(jsonObject.text);
	} else {
		const viewElement = new ViewElement(
			jsonObject.name,
			jsonObject.attributes
		);

		for (const childJson of jsonObject.children) {
			const viewChild = jsonToView(childJson);

			viewElement._appendChild(viewChild);
		}

		return viewElement;
	}
};

export class JsonDataProcessor {
	toData(viewFragment) {
		const json = [];

		for (const child of viewFragment) {
			const childJson = viewToJson(child);

			json.push(childJson);
		}

		return json;
	}

	toView(json) {
		const viewFragment = new ViewDocumentFragment();

		for (const childJson of json) {
			const child = jsonToView(childJson);

			viewFragment._appendChild(child);
		}

		return viewFragment;
	}
}

export default function JSONplugin(editor) {
	editor.data.processor = new JsonDataProcessor();
}
