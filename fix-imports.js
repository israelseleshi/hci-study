#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Recursively find all TypeScript and JavaScript files
 */
function findSourceFiles(directory) {
  const files = [];
  
  function scanDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && item !== 'node_modules' && !item.startsWith('.')) {
        scanDirectory(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(directory);
  return files;
}

/**
 * Remove version numbers from import statements
 * Matches patterns like: from "package" or import * as X from "package"
 */
function fixImports(content) {
  // Pattern to match imports with version numbers
  const importPattern = /(from\s+["']|import\s+.*?from\s+["']|import\s+["'])([^"']+)@[\d\.]+(["'])/g;
  
  let hasChanges = false;
  const result = content.replace(importPattern, (match, prefix, packageName, suffix) => {
    console.log(`  Fixing: ${packageName}@version -> ${packageName}`);
    hasChanges = true;
    return prefix + packageName + suffix;
  });
  
  return { content: result, hasChanges };
}

/**
 * Process a single file
 */
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, hasChanges } = fixImports(content);
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✅ Fixed imports in: ${path.relative(process.cwd(), filePath)}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

/**
 * Main function
 */
function main() {
  const projectRoot = process.argv[2] || process.cwd();
  
  console.log('🔍 Scanning for TypeScript/JavaScript files with versioned imports...');
  console.log(`📁 Project root: ${projectRoot}`);
  
  try {
    const files = findSourceFiles(projectRoot);
    console.log(`📄 Found ${files.length} source files`);
    
    // Debug: show first few files
    if (files.length > 0) {
      console.log('📋 Sample files:');
      files.slice(0, 5).forEach(f => console.log('  -', path.relative(projectRoot, f)));
      if (files.length > 5) console.log(`  ... and ${files.length - 5} more`);
    }
    
    let fixedCount = 0;
    
    for (const file of files) {
      const wasFixed = processFile(file);
      if (wasFixed) {
        fixedCount++;
      }
    }
    
    console.log(`\n🎉 Complete! Fixed imports in ${fixedCount} files.`);
    
    if (fixedCount === 0) {
      console.log('ℹ️  No versioned imports found to fix.');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { fixImports, processFile };
