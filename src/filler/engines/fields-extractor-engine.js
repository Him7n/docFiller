export class FieldsExtractorEngine {
  // Extracts the questions and description from the DOM object and returns it
  // It might also extract the options in case of MCQs or other types, where answers do
  // play a  critical role

  constructor() {}

  // Testing on Different Forms required
	getTitle(element) {
		// Extracts the title of the question
		// The extraction is based on the DOM tree
		// The required node is obtained by selecting the first child element of div with role=heading
		// Return Type : String
		let required = element.querySelector('div[role="heading"]')
		required = required.children[0]
		return required.textContent
	}

	// Testing on Different Forms required
	getDescription(element) {
		// Extracts the description of the question
		// The extraction is based on the DOM tree
		// The required node is obtained by selecting the second child element of the parent element of div with role=heading
		// Return Type : String
		let required = element.querySelector('div[role="heading"]')
		required = required.parentElement.children[1]
		if(required === undefined || required.textContent === "")
		return "There is no description."
		return required.textContent
	}
  
}
