const 
      _chopTemplate     = require ( "./_chopTemplate"             )
    , _debugger         = require ( './methods/_debugger'         )
    , defaultSettings   = require ( "./settings"                  )
    , render            = require ( './methods/render'            )
    , addTemplate       = require ( './methods/addTemplate'       )
    , showTemplateNames = require ( './methods/showTemplateNames' )
    , dataRender        = require ( './methods/dataRender'        )
    ;



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



module.exports = tagTemplates


