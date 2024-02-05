const trigger = e => e.composedPath()[0];
const matchesTrigger = (e, selectorString) => trigger(e).matches(selectorString);

const createListener = (target) => (eventName, selectorString, event) => { 
  // focus doesn't work with this, focus doesn't bubble, need focusin
  target.addEventListener(eventName, (e) => {
    if (selectorString === "" || matchesTrigger(e, selectorString)) event(e);
  })
}

export function addDropUpload(callback, ops = {}) {
  ops.extensions ||= []; 

  const listener = createListener(document.body);

  // add drop modal

  listener("drop", "", function(evt) {    
    let dt = evt.dataTransfer;
    let files = dt.files;

    document.querySelector(".drop-modal").classList.add("hidden"); 

    upload(files, callback, ops);

    pauseEvent(evt);
  });

  listener("dragover", "", function(evt) {
    document.querySelector(".drop-modal").classList.remove("hidden");   
    pauseEvent(evt);
  });

  listener("mouseleave", "", function(evt) {
    document.querySelector(".drop-modal").classList.add("hidden");   
  });
}

function upload(files, callback, ops) {
  const file = files[0];
  const fileName = file.name.split(".");
  const name = fileName[0];
  const extension = fileName[fileName.length - 1];

  var reader = new FileReader();
  reader.readAsText(file);

  reader.onloadend = event => {
    let text = reader.result;

    if (ops.extensions.length !== 0 && !ops.extensions.includes(extension)) {
      throw Error("Unknown extension:", extension);
    } else {
      callback(text);
    }
  };
};

function pauseEvent(e) {
  if(e.stopPropagation) e.stopPropagation();
  if(e.preventDefault) e.preventDefault();
  e.cancelBubble=true;
  e.returnValue=false;
  return false;
}
