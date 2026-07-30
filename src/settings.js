/**
 * Default engine settings exposed as {@link Settings}. Override any field by
 * passing a `Config` object to {@link tagTemplates}.
 *
 * - `TG_PRX` / `TG_SFX` — placeholder opening / closing tag.
 * - `TG_SIZE_P` / `TG_SIZE_S` — pre-computed lengths of the tags above.
 * - `DV` — key/value divider inside render requests.
 * - `debug` — when `true`, warnings are emitted via `console.error`.
 */
const
        TG_PRX       = '{{'           // Template placeholder opening tag
      , TG_SFX       = '}}'           // Template placeholder closing tag
      , TG_SIZE_P    = TG_PRX.length  // Size of opening tag.
      , TG_SIZE_S    = TG_SFX.length  // Size of closing tag.
      , DV           = ':'            // Divider in vars
      , debug        = false          // Console messages for warning and messages works only if "debug" is true
      ;
  
const settings = {
                      TG_PRX
                    , TG_SFX
                    , TG_SIZE_P 
                    , TG_SIZE_S 
                    , DV 
                    , debug
              };



export default settings


