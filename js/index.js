import { state } from "./state.js";
import { addDropUpload } from "./addDropUpload.js";
import { addLabelManipulation } from "./addLabelManipulation.js";
import { createListener } from "./createListener.js";

const listener = createListener(document.body);

addDropUpload(file => {
  const { graph, graphUIData } = JSON.parse(file);
  state.graph.setGraph(graph);
  state.graphUIData = graphUIData;
  state.mutationActions.render();
});

// addLabelManipulation(listener, state);




