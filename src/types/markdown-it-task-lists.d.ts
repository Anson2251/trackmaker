declare module 'markdown-it-task-lists' {
    import { Plugin } from 'markdown-it-ts'
    import { type MarkdownIt } from 'markdown-it-ts';

    const taskLists: (md: MarkdownIt, params?: unknown) => Plugin
    export default taskLists
}
