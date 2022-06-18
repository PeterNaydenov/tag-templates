// *** Default settings for 'Tag Templates'
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



module.exports = settings


