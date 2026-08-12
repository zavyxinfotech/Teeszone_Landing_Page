const fs = require('fs');
const content = fs.readFileSync('src/assets/india-map.svg', 'utf8');
const match = content.match(/<path d="([^"]+)"/);
if(match) {
  const tsx = `import React from 'react';

export const IndiaMapSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox='0 0 1024 1024'>
    <g transform='translate(0, 1024) scale(0.1, -0.1)'>
      <path fill='currentColor' d='${match[1]}' />
    </g>
  </svg>
);
`;
  fs.writeFileSync('src/components/common/IndiaMapSVG.tsx', tsx);
  console.log('success');
} else {
  console.log('failed to match path');
}
