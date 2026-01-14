declare module '@wangeditor/editor-for-vue' {
  import { DefineComponent, h, Plugin } from 'vue';
  import type { IDomEditor, IEditorConfig, IToolbarConfig } from '@wangeditor/editor';

  export const Editor: DefineComponent<{
    editorId?: string;
    defaultConfig?: Partial<IEditorConfig>;
    mode?: 'default' | 'simple';
    value?: string;
    defaultValue?: string;
    onChange?: (editor: IDomEditor) => void;
    onFocus?: (editor: IDomEditor) => void;
    onBlur?: (editor: IDomEditor) => void;
    onCreated?: (editor: IDomEditor) => void;
    destroy?: boolean;
    loading?: number;
    caret?: {
      x: number;
      y: number;
    };
    meta?: Record<string, unknown>;
    style?: Record<string, string | number>;
  }>;

  export const Toolbar: DefineComponent<{
    editorId?: string;
    defaultConfig?: Partial<IToolbarConfig>;
    mode?: 'default' | 'simple';
    style?: Record<string, string | number>;
  }>;
}
