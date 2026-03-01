const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });

  return arrayOfFiles;
}

const componentsDir = path.join(__dirname, 'src', 'components');
const appDir = path.join(__dirname, 'src', 'app');

const allSourceFiles = [...getAllFiles(appDir), ...getAllFiles(componentsDir)];

const allComponents = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx') || f.endsWith('.js'));
const usedComponents = new Set();

// very simple scanner: string matching for component name import or usage
allSourceFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  allComponents.forEach(comp => {
    const compName = comp.replace('.jsx', '').replace('.js', '');
    // Check if the file imports this component.
    // e.g. import HeaderTwo from "@/components/HeaderTwo";
    if (content.includes(`@/components/${compName}`) || content.includes(`./${compName}`) || content.includes(`../components/${compName}`)) {
      usedComponents.add(comp);
    }
  });
});

console.log("Total components:", allComponents.length);
console.log("Used components:", usedComponents.size);

const unusedComponents = allComponents.filter(c => !usedComponents.has(c));
console.log("Unused components:", unusedComponents);

// Delete unused components
unusedComponents.forEach(comp => {
  fs.unlinkSync(path.join(componentsDir, comp));
  console.log('Deleted', comp);
});
