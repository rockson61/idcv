import React from "react"
/**
 * Utility function to add IDs to heading elements for table of contents
 * @param content The React content to process
 * @returns The content with heading IDs added
 */
export function addHeadingIds() {
  const headingElements = Array.from(document.querySelectorAll("h2, h3, h4"))

  headingElements.forEach((heading) => {
    // Create an ID if none exists
    if (!heading.id) {
      const text = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || ""
      heading.id = text
    }
  })
}

export function withHeadingIds(content: React.ReactNode): React.ReactNode {
  if (!React.isValidElement(content)) {
    return content
  }

  if (/^h[2-4]$/i.test(content.type as string)) {
    const text = React.Children.toArray(content.props.children)
      .filter((child) => typeof child === "string")
      .join("")

    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    return React.cloneElement(content, { id, ...content.props })
  }

  if (content.props && content.props.children) {
    const children = React.Children.map(content.props.children, withHeadingIds)
    return React.cloneElement(content, { ...content.props, children })
  }

  return content
}
