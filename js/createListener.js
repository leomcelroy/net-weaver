const trigger = e => e.composedPath()[0];
const matchesTrigger = (e, selectorString) => trigger(e).matches(selectorString);

export const createListener = (target) => (eventName, selectorString, event) => { 
	// focus doesn't work with this, focus doesn't bubble, need focusin
	target.addEventListener(eventName, (e) => {
		if (selectorString === "" || matchesTrigger(e, selectorString)) event(e);
	})
}