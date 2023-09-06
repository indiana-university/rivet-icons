const attr = 'data-fouc';
const delimiter = ' ';

for (const el of document.querySelectorAll(`[${attr}]`)) {
	handleFlashOfUnstyledContent(el, attr);
}

function handleFlashOfUnstyledContent (element) {
	getAttributeListItems(element).forEach((item) => {
		window.customElements.whenDefined(item).then(() => {
			removeAttributeListItem(element, item);
		});
	});
}

function getAttributeListItems (element) {
	return element.getAttribute(attr).split(delimiter);
}

function removeAttributeListItem (element, item) {
	const items = getAttributeListItems(element)
		.filter((i) => i !== item)
		.join(delimiter);
	if (items) {
		element.setAttribute(attr, items);
	} else {
		element.removeAttribute(attr);
	}
}
