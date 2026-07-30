/**
 * @module tag-templates
 *
 * Template engine built on top of JavaScript's native template literals and
 * tag functions. Define named templates containing `{{placeholder}}` markers
 * and render them against inline or structured data.
 */
export type Config = {
    /**
     * Placeholder opening tag.
     */
    TG_PRX?: string;
    /**
     * Placeholder closing tag.
     */
    TG_SFX?: string;
    /**
     * Divider between key and value in props.
     */
    DV?: string;
    /**
     * When `true`, warnings and errors are
     *    written via `console.error`.
     */
    debug?: boolean;
};
export type Settings = Config & {
    TG_SIZE_P: number;
    TG_SIZE_S: number;
};
export type TagTemplatesInstance = {
    /**
     * Effective settings.
     */
    settings: Settings;
    /**
     * Register a named template.
     */
    addTemplate: Function;
    /**
     * Render via a tag function.
     */
    render: Function;
    /**
     * Render against a data object.
     */
    dataRender: Function;
    /**
     * List registered template names.
     */
    showTemplateNames: Function;
};
/**
 * Create a new, independent tag-templates engine instance.
 *
 * Each call returns a fresh instance with its own template pool.
 *
 * @param {Config} [config={}]  Optional engine configuration.
 * @returns {TagTemplatesInstance}
 *
 * @example
 * const t = tagTemplates();
 * t.addTemplate`greet Hello, {{name}}!`;
 * t.render`greet name:World`;   // => "Hello, World!"
 */
declare function tagTemplates(config?: Config): TagTemplatesInstance;
export default tagTemplates;
