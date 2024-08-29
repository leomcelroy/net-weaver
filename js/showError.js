import { initCss } from "../lesson/initCss.js";

const { css, getCssStr } = initCss();

const errorModalStyle = css`
  position: fixed;
  left: 10px;
  bottom: 10px;
  background: #829790;
  padding: 1rem;
  border-radius: .5rem;
  z-index: 1000000001;
  min-width: 200px;
`

const errorTop = css`
  display: flex;
  justify-content: space-between;
  padding-bottom: .5rem;
  align-items: center;
`

const errorTitle = css`
  color: #810000;
  font-weight: bold;
  font-size: larger;
`

const closeModal = css`
  cursor: pointer;
  (&:hover) {
    color: #810000;
    font-weight: bold;
  }
`

const errorList = css`
  max-height: 200px;
  overflow: auto;
`

const errorItem = css`
  padding: .5rem;
  background: #d8d9ce;
  border-radius: .25rem;
  margin-bottom: .5rem;
`

let timeoutId = null;
let currentErrors = [];
export function showError(errors, { time = 0 } = {}) {

  let errorModal = document.querySelector(`.error-modal`) || document.createElement('div');
  
  if (timeoutId) {
    clearTimeout(timeoutId);
  }

  currentErrors.push(...errors)

  errorModal.classList.add("error-modal");
  errorModal.classList.add(errorModalStyle);

  errorModal.innerHTML = `
    <style>${getCssStr()}</style>
    <div class="${errorTop}">
      <div class=${errorTitle}>Errors</div>
      <div on-close class="${closeModal}">x</div>
    </div>
    <div class="${errorList}">
      ${currentErrors.map(e => `<div class="${errorItem}">${e}</div>`).join("")}
    </div>
  `

  errorModal
  .querySelector("[on-close]")
  .addEventListener("click", e => {
    errorModal.remove();
    currentErrors = [];
  })

  document.body.append(errorModal);

  if (time > 0) {
    timeoutId = setTimeout(() => {
      errorModal.remove();
      timeoutId = null;
      currentErrors = [];
    }, time);
  }

}