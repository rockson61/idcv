import Script from "next/script"

interface JsonLdProps {
  schema: any
}

const JsonLd = ({ schema }: JsonLdProps) => {
  if (!schema) {
    return null
  }

  return <Script id="json-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export default JsonLd
