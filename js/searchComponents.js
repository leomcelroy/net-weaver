import componentsLibrary from "./componentsLibrary.js";
import FuzzySet from 'fuzzyset'

export function searchComponents(searchTerm) {  
  const searchTerms = searchTerm.toLowerCase().split(" ");

  const blocks = componentsLibrary
    .blocks
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

        const termMatch = searchTerms.some(x => comp.superClasses.some(c => c.toLowerCase().includes(x)));

        return termMatch || searchTerms.some(x => comp.type.toLowerCase().includes(x));
    });
  
  return blocks;
}

/*
const types = [];

function addToTypes(node) {
  types.push(node.name)
  if (node.children.length !== 0) {
    node.children.forEach(n => addToTypes(n));
  }
}

addToTypes(componentsLibrary.typeHierarchyTree);
types.shift();

function collectLeafNames(node, parentNames = []) {
    const currentPath = [...parentNames, node.name].filter(name => name !== "");  // Include the current node's name in the path
    let leafDictionary = {};

    if (node.children && node.children.length > 0) {
        // If the node has children, it's not a leaf, recurse into each child
        node.children.forEach(child => {
            const childLeaves = collectLeafNames(child, currentPath);
            leafDictionary = { ...leafDictionary, ...childLeaves };  // Merge results
        });
    } else {
        // If no children, it's a leaf node, add it to the dictionary
        leafDictionary[node.name] = parentNames;  // Use the accumulated parent names
    }

    return leafDictionary;
}

console.log({
  types,
  leafDict: collectLeafNames(componentsLibrary.typeHierarchyTree)
})


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
*/