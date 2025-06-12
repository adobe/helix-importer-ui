/**
 * Converts all tables in HTML to DA-compliant div blocks.
 * Each table is replaced by a <div class="blockname">, where blockname is the first th or td text (lowercased).
 * Each table row becomes a <div>, and each cell is wrapped in a <div><p>...</p></div>.
 * @param {string} html The HTML string
 * @returns {string} The transformed HTML string with DA blocks
 */
export function convertTablesToDA(html) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const tables = doc.querySelectorAll('table:not(table table)');
    if (!tables.length) return doc.body.innerHTML;
  
    tables.forEach(table => {
      // Get block name from first row
      let blockName = '';
      const firstRow = table.rows[0];
      if (firstRow) {
        blockName = firstRow.textContent.trim().toLowerCase();
      }
      if (!blockName) return;
  
      // Create DA block div
      const blockDiv = doc.createElement('div');
      blockDiv.className = blockName;
  
      // Convert each row to a div, skipping the first row if it's the block name
      Array.from(table.rows).forEach((row, idx) => {
        // Skip first row if it's a single cell with the block name
        if (idx === 0) {
          return;
        }
        const rowDiv = doc.createElement('div');
        Array.from(row.cells).forEach(cell => {
          const cellDiv = doc.createElement('div');
          cellDiv.innerHTML = `<p>${cell.innerHTML}</p>`;
          rowDiv.appendChild(cellDiv);
        });
        blockDiv.appendChild(rowDiv);
      });
  
      table.replaceWith(blockDiv);
    });
  
    return doc.body.innerHTML;
  }
  