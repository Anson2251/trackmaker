import { Sitdown } from "sitdown";

/**
 * Create a Sitdown instance configured for GFM (GitHub Flavored Markdown)
 * with custom rules to handle wangEditor specific elements.
 */
function createSitdown() {
  const sitdown = new Sitdown({
    hr: "---",
    headingStyle: "atx",
    bulletListMarker: "-",
    codeBlockStyle: "fenced",
  });

  const service = sitdown.service;

  // Handle wangEditor TODO items
  service.addRule("todo", {
    filter: (node: Element) => node.getAttribute?.("data-w-e-type") === "todo",
    replacement: function (content: string, node: Element) {
      const checkbox = node.querySelector?.('input[type="checkbox"]');
      const isChecked = checkbox?.hasAttribute?.("checked");
      return `- [${isChecked ? "x" : " "}] ${content.trim()}\n`;
    },
  });

  // Handle color spans
  service.addRule("color", {
    filter: (node: HTMLElement) =>
      node.nodeName === "SPAN" && !!node.style?.color,
    replacement: function (content: string, node: HTMLElement) {
      const color = node.style?.color;
      return color ? `<span style="color:${color}">${content}</span>` : content;
    },
  });

  // Handle highlight spans
  service.addRule("highlight", {
    filter: (node: HTMLElement) =>
      node.nodeName === "SPAN" && !!node.style?.backgroundColor,
    replacement: function (content: string, node: HTMLElement) {
      const bgColor = node.style?.backgroundColor;
      return bgColor
        ? `<span style="background-color:${bgColor}">${content}</span>`
        : content;
    },
  });

  // Handle underline (u tag)
  service.addRule("underline", {
    filter: "u",
    replacement: function (content: string) {
      return `<u>${content}</u>`;
    },
  });

  // Handle strikethrough (s tag)
  service.addRule("strikethrough", {
    filter: ["s"],
    replacement: function (content: string) {
      return `~~${content}~~`;
    },
  });

  return sitdown;
}

// Singleton instance for reuse
let sitdownInstance: ReturnType<typeof createSitdown> | null = null;

function getSitdown() {
  if (!sitdownInstance) {
    sitdownInstance = createSitdown();
  }
  return sitdownInstance;
}

/**
 * Convert HTML output from wangEditor to Markdown (GFM).
 * @param html - The HTML string from wangEditor
 * @returns Markdown string
 */
export function wangEditorToMarkdown(html: string): string {
  if (!html || !html.trim()) {
    return "";
  }

  return getSitdown().HTMLToMD(html);
}

export default wangEditorToMarkdown;
