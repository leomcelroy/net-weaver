const dropdown = (state) => {
  const searchQuery = state.searchTerm.toLowerCase();
  const filteredNodes = Object.keys(state.nodes).filter(
    (nodeType) => nodeType.toLowerCase().includes(searchQuery)
  );

  return html`
    <div class="menu-item dropdown-container">
      <i class="fa-solid fa-bars" style="padding-right: 10px;"></i>
      add node
      <div class="dropdown-list node-toolbox">
        <input class="node-search" .value=${state.searchTerm} @input=${e => {
          state.searchTerm = e.target.value;
        }}/>
        ${filteredNodes.map((nodeType) => html`
            <div class="menu-item node-type" data-type=${nodeType}>${nodeType}</div>
          `)}
      </div>
    </div>
  `
}