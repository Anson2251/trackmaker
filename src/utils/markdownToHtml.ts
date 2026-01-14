import markdownIt from "markdown-it-ts"
import taskLists from 'markdown-it-task-lists';

export function markdownToHtml(markdown: string) {
    const md = markdownIt({
        html: true,
        typographer: true,
    })
        .use(taskLists, { enabled: true })

    return md.render(markdown)
}

export default markdownToHtml;
