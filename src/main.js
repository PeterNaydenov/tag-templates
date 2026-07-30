/**
 * @module tag-templates
 *
 * Template engine built on top of JavaScript's native template literals and
 * tag functions. Define named templates containing `{{placeholder}}` markers
 * and render them against inline or structured data.
 */

/**
 * Configuration options accepted by {@link tagTemplates}.
 *
 * Any field may be omitted — sensible defaults are used for the rest.
 *
 * @typedef {object} Config
 * @property {string}  [TG_PRX='{{']   Placeholder opening tag.
 * @property {string}  [TG_SFX='}}']   Placeholder closing tag.
 * @property {string}  [DV=':']        Divider between key and value in props.
 * @property {boolean} [debug=false]   When `true`, warnings and errors are
 *                                     written via `console.error`.
 */

/**
 * Effective runtime settings attached to an engine instance as
 * `instance.settings`. Combines {@link Config} with engine defaults and
 * pre-computes tag lengths.
 *
 * @typedef {Config & {
 *   TG_SIZE_P: number,
 *   TG_SIZE_S: number
 * }} Settings
 */

/**
 * Engine instance returned by {@link tagTemplates}. Holds the registered
 * template pool and exposes all engine methods.
 *
 * @typedef {object} TagTemplatesInstance
 * @property {Settings}    settings          Effective settings.
 * @property {Function}    addTemplate       Register a named template.
 * @property {Function}    render            Render via a tag function.
 * @property {Function}    dataRender        Render against a data object.
 * @property {Function}    showTemplateNames List registered template names.
 */

import _chopTemplate from "./_chopTemplate.js"
import _debugger from './methods/_debugger.js'
import defaultSettings from "./settings.js"
import render from './methods/render.js'
import addTemplate from './methods/addTemplate.js'
import showTemplateNames from './methods/showTemplateNames.js'
import dataRender from './methods/dataRender.js'



/**
 * Internal constructor used by {@link tagTemplates}.
 *
 * @private
 * @param {Config}   cfg   User-supplied configuration.
 * @param {Object<string, string[]>} list  Shared template pool.
 * @constructor
 */
function TagTemplates ( cfg, list ) {
        if ( cfg.TG_PRX )   cfg.TG_SIZE_P = cfg.TG_PRX.length
        if ( cfg.TG_SFX )   cfg.TG_SIZE_S = cfg.TG_SFX.length
        
        let settings = { ...defaultSettings, ...cfg }

        this.settings          = settings
        this.addTemplate       = addTemplate ( list )
        this.showTemplateNames = showTemplateNames ( list )
        this.render            = render     ( list, settings )
        this.dataRender        = dataRender ( list, settings )
        this._chopTemplate     = _chopTemplate ( settings )
        this._debugger         = _debugger
        return this
    } // TagTemplates func.



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
function tagTemplates ( config={}) {
        const list = {};
        return new TagTemplates ( config , list  )
}



export default tagTemplates


