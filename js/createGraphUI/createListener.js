function getTrigger(e, selectorString) {
  if (selectorString === "") return e.target;

  const triggerEl = e.target.closest(selectorString);

  if (triggerEl && triggerEl.contains(e.target)) return triggerEl;
  else if (e.target.matches(selectorString)) return e.target;
  else return null;
}

function matchesTrigger(e, selectorString) {
  const triggerEl = e.target.closest(selectorString);
  
  return e.target.matches(selectorString) 
    || (triggerEl && triggerEl.contains(e.target)); 
}

// create on listener
export function createListener(target) {
  // may want to add strict param
  // normal event triggers if el child of selector or matches
  // with strict target has to match selector
  
  return (eventName, selectorString, event) => {
    // focus doesn't work with this, focus doesn't bubble, need focusin
    target.addEventListener(eventName, (e) => {
      if (selectorString === "" || matchesTrigger(e, selectorString)) event(e, getTrigger(e, selectorString));
    });
  };
}