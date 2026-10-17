import sharp from "sharp";

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#202522"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="#3D4844" stroke-width="1.5"/>
  
  <text x="100" y="180" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" letter-spacing="0.2em" fill="#D7E8C8">
    CURATED ARCHITECTURAL LIVING &amp; ADVISORY
  </text>
  
  <text x="100" y="290" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="600" letter-spacing="0.05em" fill="#FAF9F5">
    ESTORA REALTY
  </text>
  
  <text x="100" y="370" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="400" fill="#C4C7C3">
    Curating exceptional residences, timeless estates, &amp; modern sanctuaries.
  </text>
  
  <line x1="100" y1="430" x2="1100" y2="430" stroke="#3D4844" stroke-width="1"/>
  
  <text x="100" y="490" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#D7E8C8">
    Beverly Hills · Aspen · New York · Tuscany · London
  </text>
  
  <text x="1100" y="490" text-anchor="end" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="500" fill="#FAF9F5">
    estorarealty.com
  </text>
</svg>
`;

sharp(Buffer.from(svg))
  .jpeg({ quality: 90 })
  .toFile("public/og-image.jpg")
  .then(() => console.log("Successfully generated public/og-image.jpg"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
