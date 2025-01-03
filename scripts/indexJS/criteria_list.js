var wcag_criteria = `Criterion 1.1.1 Non-text Content (Level A): Images have equivalent alt text. Decorative images that do not convey information have a null (alt="") alt attribute. Form inputs have labels. 

Criterion 1.2.1 Audio-only & Video-only (Prerecorded) (Level A): Prerecorded audio-only content has a text-transcript that presents equivalent information. Prerecorded video-only content has a text-transcript or audio description that presents equivalent information. 

Criterion 1.2.2 Captions (Prerecorded) (Level A): Prerecorded video content has synchronized captions present. 

Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A): If prerecorded video content contains relevant visual content not already presented in the audio and synchronized captions, there is a transcript or audio description present.

Criterion 1.2.4 Captions (Live) (Level AA): Live media containing audio has synchronized captions. 

Criterion 1.2.5 Audio Description (Prerecorded) (Level AA): Prerecorded video content has audio descriptions present for relevant visual content not already presented in the audio. 

Criterion 1.3.1 Info and Relationship (Level A): Semantic markup (HTML) is used correctly to convey information, structure, and relationships. 

Criterion 1.3.2 Meaningful Sequence (Level A): Content is presented in a meaningful order both visually and semantically. 

Criterion 1.3.3 Sensory Characteristics (Level A): Instructions are provided in a way that does not rely solely on shape, color, location, or sound. 

Criterion 1.3.4 Orientation (Level AA): Orientation is not limited to portrait-only or landscape-only views. 

Criterion 1.3.5 Identify Input Purpose (Level AA): Autocomplete is enabled for input elds when the eld requires certain information about the user. 

Criterion 1.4.1 Use of Color (Level A): Color is not the only means of conveying information including distinguishing links from surrounding text. 

Criterion 1.4.2 Audio Control (Level A): Audio that plays for more than 3 seconds can be stopped and/or paused and includes a mechanism to adjust the volume level. 

Criterion 1.4.3 Contrast (Minimum) (Level AA): The contrast ratio between text or images of text and their backgrounds is at least 4.5:1 for normal text and 3:1 for large text* unless it is a logo or pure decoration**. 

Criterion 1.4.4 Resize Text (Level AA): Text can be resized up to 200% without loss of content or function.

Criterion 1.4.5 Images of Text (Level AA): Text is presented as real text and not within images. 

Criterion 1.4.10 Reow (Level AA): Content is designed responsively so it can be viewed at 320 pixels wide without loss of content or function 

Criterion 1.4.11 Non-text Contrast (Level AA): The visual presentation of interactive components such as buttons and form controls have a contrast ratio of at least 3:1 

Criterion 1.4.12 Text Spacing (Level AA): The following spacing can be adjusted without the loss of content or function: 
● Paragraph spacing can be adjusted to 2 times the font size. 
● Line-height can be adjusted to 1.5 times the font size. 
● Letter spacing can be adjusted to .12 times the font size. 
● Word spacing can be adjusted to .16 times the font size. 

Criterion 1.4.13 Content on Hover or Focus (Level AA): For content presented as a result of hover or focus: 
● Content is dismissible without moving pointer or focus unless the additional content communicates an input error or does not obscure or replace other content. 
● The pointer can be moved over the new content without the additional content disappearing. 
● The additional content remains visible until the hover or focus is removed, the user dismisses it, or the additional information is no longer valid.
Criterion 2.1.1 Keyboard (Level A): All functionality is operable with a keyboard without requiring specific timing for individual keystrokes unless there is no known way using a keyboard. 

Criterion 2.1.2 No Keyboard Trap (Level A): If the keyboard focus can be moved to an element of the page, then focus can be moved away from the element using only the keyboard. 

Criterion 2.1.4 Character Key Shortcuts (Level A): If a keyboard shortcut is implemented using a letter, punctuation, number, or symbols, a user is able to disable the keyboard shortcut, change the shortcut to a non-printable key (Ctrl, Alt, etc.), or is only activated when the user interface component has focus. 

Criterion 2.2.1 Timing Adjustable (Level A): If a time limit is present, the user can turn off, adjust, or extend the time limit unless the time limit is on a real-time event (e.g. auction) or the time limit is longer than 20 hours. 

Criterion 2.2.2 Pause, Stop, Hide (Level A): A user can pause, stop or hide content that automatically moves, blinks, or scrolls (e.g. carousels or slideshows) and lasts longer than 5 seconds. A user can pause, stop, or hide or manually control the time of updates to automatically updated content. 

Criterion 2.3.1 Three Flashes or Below Threshold (Level A): There is no content that ashes more than three times in any one second period unless the ash is below the general flash and red flash thresholds

Criterion 2.4.1 Bypass Blocks (Level A): Skip links are provided to bypass content repeated on multiple pages (e.g. navigation menus) 

Criterion 2.4.2 Page Titled (Level A): Web page has an accurate and descriptive title. 

Criterion 2.4.3 Focus Order (Level A): Focusable elements have a focus order that preserves the meaning and operability of the page. 

Criterion 2.4.4 Link Purpose (In Context) (Level A): Link text is descriptive allowing the purpose of the link to be determined by the linked text along or along with its surrounding text, list items or headings.

Criterion 2.4.5 Multiple Ways (Level AA): There is more than one way to end each web page except when the page is a result of or a step in a process. (e.g. table of content, search) 

Criterion 2.4.6 Headings & Labels (Level AA): Headings and labels are descriptive. 

Criterion 2.4.7 Focus Visible (Level AA): All focus indicators are visible. 

Criterion 2.4.11 Focus Not Obscured (Level AA): when an item receives keyboard focus, it is always at least partially visible. 

Criterion 2.5.1 Pointer Gestures (Level A): Multipoint or path-based gestures (e.g. pinching, swiping) that are not essential to function can be performed with a single pointer. 

Criterion 2.5.2 Pointer Cancellation (Level A): For single-pointer gestures (e.g. button activation), one of the following is true: 
● The down event of the pointer is not used to execute any part of the function. 
● The function can be aborted or undone before it is completed. 
● The up-event reverses any outcome of the preceding down-event. 
● Completing the function on the down-event is essential.

Criterion 2.5.3 Label in Name (Level A): UI components with labels that include text or images of text include visible text in its accessible name (label, alternative text, etc.) 

Criterion 2.5.4 Motion Actuation (Level A): Functionality that can be operated by device motion or user motion can be disabled and also be operated by user interface components (e.g. buttons). 

Criterion 2.5.7 Dragging Movements (Level AA): Functionality that is using a mouse for dragging movements, should also allow the operation to be achieved with a single pointer alternative. (e.g. drag and drop actions) 

Criterion 2.5.8 Target Size (Level AA): The size of a target must be at least 24 by 24 CSS pixels. Target size refers to the amount of space a target (link, button, etc.) takes up.

Criterion 3.1.1 Language of Page (Level A): The language of the page is declared. (e.g. <html lang=“en”> ). 

Criterion 3.1.2 Language of Parts (Level AA): If content is in a different language than declared in the language of the page, the language is declared (e.g. <p lang=”es”>). 

Criterion 3.2.1 On Focus (Level A): Elements do not change when they receive focus. 

Criterion 3.2.2 On Input (Level A): Elements do not change when they receive input. 

Criterion 3.2.3 Consistent Navigation (Level AA): Repeated navigation menus are repeated consistently. 

Criterion 3.2.4 Consistent Identifications (Level AA): Elements such as buttons and icons are used consistently throughout the website. 

Criterion 3.2.6 Consistent Help (Level A): Help is offered on the website and is consistent where it is offered. (e.g. help/contact page) 

Criterion 3.3.1 Error Identification (Level A): Input errors are clearly identified in text. 

Criterion 3.3.2 Labels or Instructions (Level A): Content requiring user input includes labels and instructions. 

Criterion 3.3.3 Error Suggestion (Level AA): Suggestions to correct an input error are provided unless the suggestion jeopardizes the security or purpose of the input. 

Criterion 3.3.4 Error Prevention (Legal, Financial, Data) (Level AA): Legal or financial data that allows users to change or delete the data also allows users to reverse submission, check for and correct errors, and confirm data before finalizing submission.

Criterion 3.3.7 Redundant Entry (Level A): Information previously entered by or provided to the user that is required to be entered again in the same process is either auto-populated, or available for the user to select. 

Criterion 3.3.8 Accessible Authentication (Level AA): Authentication must avoid authenticating users through memory, transcription or cognitive tests without alternatives.

Criterion 4.1.2 Name, Role, Value (Level A): The name, role, and value of elements are presented using validated HTML. ARIA is not required, but if it is used, it is used correctly. 

Criterion 4.1.3 Status Message (Level AA): Status messages that do not receive focus are presented to assistive technologies such as screen readers.`