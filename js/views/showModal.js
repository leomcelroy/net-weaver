import { html, render } from "lit-html";

export function showModal(code, response) {
  console.log(code); // Logs the code to the console for debugging purposes

  const el = document.createElement("div");

  const kicadNetlist = response.kicadNetlist;

  document.body.append(el);

  const closeModal = () => {
    window.removeEventListener("message", handleMessage);
    el.remove();
  };

  // URL of the SVG-PCB editor
  const ORIGIN = "https://leomcelroy.com/svg-pcb";

  // Reference to the hidden iframe editor instance
  let editorIframe = null;
  let isReady = false;
  let previewReceived = false;

  // Lazily create the iframe so it only loads when the modal is shown
  const createIframeEditor = () => {
    if (editorIframe) return editorIframe;
    // Try to find the iframe rendered in the template first
    editorIframe = el.querySelector("#svgpcb-editor");
    if (editorIframe) return editorIframe;

    // Fallback: create one if it doesn't exist (shouldn't happen but just in case)
    editorIframe = document.createElement("iframe");
    editorIframe.id = "svgpcb-editor";
    editorIframe.src = ORIGIN;
    editorIframe.style.width = "400px";
    editorIframe.style.height = "400px";
    editorIframe.style.border = "0";
    editorIframe.style.position = "fixed";
    editorIframe.style.left = "0";
    editorIframe.style.top = "0";
    editorIframe.style.opacity = "0";
    editorIframe.style.pointerEvents = "none";
    el.appendChild(editorIframe);

    // Fallback: once the iframe reports its document loaded, attempt to send
    // the code even if EDITOR_READY hasn't been received (cross-origin cases).
    editorIframe.addEventListener("load", () => {
      // slight delay to give editor time to bootstrap
      setTimeout(() => {
        editorIframe.contentWindow.postMessage(
          { type: "LOAD_CODE", code },
          "*"
        );
      }, 500);
    });

    return editorIframe;
  };

  // Post the generated code into the iframe once it reports ready
  const loadCodeIntoEditor = () => {
    if (!editorIframe) return;
    console.log("Posting LOAD_CODE to SVG-PCB iframe");
    editorIframe.contentWindow.postMessage({ type: "LOAD_CODE", code }, "*");

    // Fallback: if no LOAD_CODE_ACK arrives within 1.5 s, still request PNG
    setTimeout(() => {
      if (!previewReceived) {
        requestPngPreview();
      }
    }, 1500);
  };

  // Ask the iframe to render a PNG preview and put it in the <img>
  const requestPngPreview = () => {
    if (!editorIframe) return;
    const requestId = crypto.randomUUID();
    console.log("Posting RENDER_PNG request", requestId);
    editorIframe.contentWindow.postMessage(
      { type: "RENDER_PNG", id: requestId, dpi: 300 },
      "*"
    );

    const handlePng = (e) => {
      const { type, id: resId, pngData } = e.data || {};
      if (
        e.source === editorIframe.contentWindow &&
        type === "PNG_RESULT" &&
        resId === requestId
      ) {
        window.removeEventListener("message", handlePng);
        const img = el.querySelector("#svg-preview-img");
        if (img) {
          console.log("Received PNG_RESULT", resId);
          img.src = pngData;
          img.style.display = "block";
          const loadingDiv = el.querySelector("#preview-loading");
          if (loadingDiv) loadingDiv.style.display = "none";
          previewReceived = true;
        }
      }
    };
    window.addEventListener("message", handlePng);
  };

  // Handle messages coming from the iframe editor
  const handleMessage = (e) => {
    if (!editorIframe || e.source !== editorIframe.contentWindow) return;
    const { type } = e.data || {};
    if (type === "EDITOR_READY") {
      isReady = true;
      loadCodeIntoEditor();
    } else if (type === "LOAD_CODE_ACK") {
      // Give the editor a brief moment to execute the user code and render the
      // PCB before requesting the PNG. Without this delay we sometimes hit
      // timing issues that surface as NaN / Infinity SVG attribute errors in
      // the editor internals.
      setTimeout(() => {
        requestPngPreview();
      }, 1000);
    }
  };

  window.addEventListener("message", handleMessage);

  // Open the SVG-PCB editor in a new tab and inject code once ready
  const openSvgPcbNewTab = () => {
    const newTab = window.open(ORIGIN, "svgPcbEditor");

    // Wait for ready message coming from the new tab
    function newTabListener(e) {
      if (e.source !== newTab) return;
      const { type } = e.data || {};
      if (type === "EDITOR_READY") {
        // Send the code
        newTab.postMessage({ type: "LOAD_CODE", code }, "*");
        window.removeEventListener("message", newTabListener);
      }
    }
    window.addEventListener("message", newTabListener);
  };

  // Download the code as a .js file (default name board.js)
  const downloadCode = () => {
    const blob = new Blob([code], { type: "text/javascript;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "board.js";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyCode = () => copyTextToClipboard(code);

  // Download the raw KiCad-style netlist as a .net file
  const downloadNetlist = () => {
    if (!kicadNetlist) return;
    const blob = new Blob([kicadNetlist], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "design.net";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  render(
    html`
      <style>
        .modal-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          background-color: rgba(0, 0, 0, 0.7); /* Dimmed background */
          z-index: 1000000000; /* Makes sure the modal is on top */
        }

        .modal-content {
          background: #829791;
          padding: 20px;
          margin-top: 40px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 90%;
          max-height: 90%;
          overflow-y: auto; /* Allows scrolling */
        }

        .modal-header {
          font-size: 18px;
          margin-bottom: 10px;
          font-weight: bold;
        }

        .modal-code {
          background-color: #d8d9ce;
          // border: 1px solid #ddd;
          border-radius: 4px;
          padding: 10px;
          white-space: pre;
          overflow: auto;
          max-height: 300px;
          user-select: text;
          cursor: text;
        }

        .modal-preview {
          margin: 20px 0;
          text-align: center;
          position: relative;
        }

        .modal-preview img {
          max-width: 100%;
          max-height: 300px;
          border: 1px solid #ccc;
          display: none; /* hidden until loaded */
          margin: 0 auto;
        }

        .preview-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          color: #333;
          font-family: monospace;
          margin: 0 auto;
        }
        .preview-loading .spinner {
          width: 30px;
          height: 30px;
          border-width: 4px;
        }

        .modal-action {
          margin-top: 20px;
          text-align: right;
          display: flex;
          gap: 20px;
          padding-bottom: 20px;
        }

        .modal-action button {
          padding: 8px 16px;
          font-size: 16px;
          color: white;
          background-color: #1e3534;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          outline: none;
          justify-content: flex-end;
        }

        .modal-action button:hover {
          background-color: #244141;
        }
      </style>
      <div class="modal-container" @click=${closeModal}>
        <div class="modal-content" @click=${(e) => e.stopPropagation()}>
          <div class="modal-header">Here is the generated SVG-PCB design.</div>
          <div class="modal-preview">
            <div class="preview-loading" id="preview-loading">
              <div class="spinner"></div>
              <div>rendering preview…</div>
            </div>
            <img id="svg-preview-img" alt="Preview" />
          </div>

          <div class="modal-action">
            <button @click=${copyCode}>Copy Code</button>
            <button @click=${downloadCode}>Download Code (.js)</button>
            <button @click=${downloadNetlist}>Download Netlist (.net)</button>
            <button @click=${openSvgPcbNewTab}>Open in SVG-PCB</button>
          </div>

          <pre class="modal-code">${code}</pre>

          <!-- hidden iframe for off-screen rendering -->
          ${html`<iframe
            id="svgpcb-editor"
            src="${ORIGIN}"
            style="width:400px;height:400px;position:fixed;left:0;top:0;opacity:0;pointer-events:none;border:0;"
          ></iframe>`}
        </div>
      </div>
    `,
    el
  );

  // Kick-off: ensure iframe exists and start listening
  createIframeEditor();

  // If the editor never sends EDITOR_READY, still attempt to push the code a
  // few times (every 1 s) until LOAD_CODE_ACK arrives or we give up after 5 tries.
  let retries = 0;
  const retryInterval = setInterval(() => {
    if (retries > 5 || isReady) {
      clearInterval(retryInterval);
      return;
    }
    loadCodeIntoEditor();
    retries += 1;
  }, 1000);
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    // Navigator clipboard api method'
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard", err);
      });
  } else {
    // Fallback: Clipboard API not available or not in a secure context
    // Create a new text area element dynamically
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Make sure the text area is not visible
    textArea.style.position = "absolute";
    textArea.style.left = "-9999px";
    textArea.style.top = "-9999px";

    // Append the textarea to the body
    document.body.appendChild(textArea);
    // Focus and select the text
    textArea.focus();
    textArea.select();

    try {
      // Attempt to copy text
      const successful = document.execCommand("copy");
      const msg = successful
        ? "Text copied to clipboard successfully!"
        : "Failed to copy text";
      console.log(msg);
    } catch (err) {
      console.error("Failed to copy text to clipboard", err);
    }

    // Cleanup - remove the textarea
    document.body.removeChild(textArea);
  }
}
