import { html, render } from 'lit-html';


export function showModal(code) {
    console.log(code); // Logs the code to the console for debugging purposes

    const el = document.createElement("div");

    document.body.append(el);

    const closeModal = () => {
      el.remove();
    };

    const openSvgPcb = () => {
      const ORIGIN = `https://leomcelroy.com/svg-pcb`;
      const newTab = window.open(ORIGIN, '_blank');

      // newTab.onload = function() {
      //     newTab.postMessage({
      //         message: "loadCode",
      //         code 
      //     }, "*");
      // };
    };

    const copyCode = () => {
      copyTextToClipboard(code);
    }

    render(html`
        <style>
            .modal-container {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.7); /* Dimmed background */
                z-index: 1000000000; /* Makes sure the modal is on top */
            }

            .modal-content {
                background: white;
                padding: 20px;
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
                background-color: #f4f4f4;
                border: 1px solid #ddd;
                padding: 10px;
                white-space: pre; 
                overflow: auto; 
                max-height: 300px; 
                user-select: text; 
                cursor: text; 
            }

            .modal-action {
                margin-top: 20px;
                text-align: right;
                display: flex;
                gap: 20px;
            }

            .modal-action button {
                padding: 8px 16px;
                font-size: 16px;
                color: white;
                background-color: #007BFF;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                outline: none;
                justify-content: flex-end;
            }

            .modal-action button:hover {
                background-color: #0056b3;
            }
        </style>
        <div class="modal-container" @click=${closeModal}>
            <div class="modal-content" @click=${e => e.stopPropagation()}>
                <div class="modal-header">Here is the generated SVG-PCB design.</div>
                <pre class="modal-code">${code}</pre>
                <div class="modal-action">
                  <button @click=${copyCode}>Copy Code</button>
                  <button @click=${openSvgPcb}>Open SVG-PCB</button>
                </div>
            </div>
        </div>
    `, el);
}


function copyTextToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        // Navigator clipboard api method'
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log("Text copied to clipboard successfully!");
            })
            .catch(err => {
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
            const successful = document.execCommand('copy');
            const msg = successful ? "Text copied to clipboard successfully!" : "Failed to copy text";
            console.log(msg);
        } catch (err) {
            console.error("Failed to copy text to clipboard", err);
        }

        // Cleanup - remove the textarea
        document.body.removeChild(textArea);
    }
}