export default function ProductSchema({ product }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": `https://mariziabonifacio.com.br/images/produtos/${product.image}`,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "BRL",
      "availability": "https://schema.org/InStock",
      "url": `https://mariziabonifacio.com.br/${product.slug}`
    },
    "brand": {
      "@type": "Brand",
      "name": "Marizia Bonifacio"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}