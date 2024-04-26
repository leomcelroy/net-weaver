import componentsLibrary from "./componentsLibrary.js";
import FuzzySet from 'fuzzyset'

const types = [];

function addToTypes(node) {
  types.push(node.name)
  if (node.children.length !== 0) {
    node.children.forEach(n => addToTypes(n));
  }
}

addToTypes(componentsLibrary.typeHierarchyTree);
types.shift();


console.log(types);

const searchSet = new FuzzySet();
types.forEach(t => searchSet.add(t));

export function searchComponents(searchTerm) {
  const results = findFuzzyMatches(searchTerm, componentsLibrary.typeHierarchyTree.children);
  const orderPreference = searchSet.get(searchTerm) ?? [];
  
  results.sort((a, b) => {
    let aIndex = orderPreference.findIndex(x => x[1] === a);
    if (aIndex === -1) aIndex = results.length + 1;
    let bIndex = orderPreference.findIndex(x => x[1] === b);
    if (bIndex === -1) bIndex = results.length + 1;

    return aIndex - bIndex;
  });
  
  const blocks = results
    .map(type => componentsLibrary.blocks.find(block => block.type === type))
    .filter(comp => {
        if (
          ["InternalSubcircuit", "InternalBlock"]
          .some(x => comp.superClasses.includes(x))
        ) {
          return false;
        }

        if (comp.is_abstract) {
          return false;
        }

        return true;
    });
  
  return blocks;
}

function findFuzzyMatches(inputString, treeNode) {
    let results = new Set();

    const searchResults = searchSet.get(inputString)?.map(x => x[1]) ?? [];

    function collectLeaves(node) {
        if (node.children && node.children.length > 0) {
            node.children.forEach(child => collectLeaves(child));
        } else {      
            results.add(node.name);
        }
    }
  
    function searchTree(nodes) {
        nodes.forEach(node => {
            if (searchResults.includes(node.name)) {
               
                collectLeaves(node);
            }
            if (node.children) {
                searchTree(node.children);
            }
        });
    }

    searchTree(treeNode);

    return [...results];
}
