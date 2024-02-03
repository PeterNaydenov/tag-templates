import _chopTemplate from "./_chopTemplate.js"
import _debugger from './methods/_debugger.js'
import defaultSettings from "./settings.js"
import render from './methods/render.js'
import addTemplate from './methods/addTemplate.js'
import showTemplateNames from './methods/showTemplateNames.js'
import dataRender from './methods/dataRender.js'



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



function tagTemplates ( config={}) {
        const list = {};
        return new TagTemplates ( config , list  )
}



export default tagTemplates


