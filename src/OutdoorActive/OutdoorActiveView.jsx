
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import React from 'react';
import config from '@plone/volto/registry';
// oa's javascripts are full of document.write() calls, so we need to use postscribe
// e.g. Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.
import { PostScribe } from 'react-postscribe';


const format = (data) => {
  return {
    frontendtype: data.frontendtype,
    mode: data.mode,
    zoom: data.zoom,
    categories: data.categories,
    latitude: data.latitude,
    longitude: data.longitude,
    // compact: data.compact,
    // basic: data.basic ? 'very' : undefined,
    // celled: data.celled,
    // inverted: data.inverted,
    // striped: data.striped
  };
};

const OutdoorActiveView = ({ data }) => {
  const { frontendtype, mode, zoom, categories, latitude, longitude } = format(data);
  const currentLang = useSelector((state) => state.intl.locale);
  const js = `//www.outdooractive.com/alpportal/oa_head.js?proj=${config.settings.outdooractive.projectId}&key=${config.settings.outdooractive.apiKey}&lang=${currentLang}`;
  const center = [ longitude || 10.8867, latitude || 44.6502 ];  // [ 10.8867127, 44.6501718 ];
  const [flexviewpage, setFlexviewpage] = useState(false);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    // debugger;
    if(flexviewpage) {
      // flexviewpage.destroy();
      // flexviewpage.type=frontendtype;
      flexviewpage.setZoom(zoom);
      flexviewpage.setWhat(categories);
      if (flexviewpage.flexOpener) {
        flexviewpage.flexOpener.setFvView(flexviewpage, mode);
      }
    }
  }, [update, data]); // frontendtype, zoom, center, categories, mode ]);

  const loaded = () => {
    if(flexviewpage) {
      // flexviewpage.type=frontendtype;
      flexviewpage.setZoom(zoom);
      flexviewpage.setWhat(categories);
      if (flexviewpage.flexOpener) {
        flexviewpage.flexOpener.setFvView(flexviewpage, mode);
      }
    }
    else
    {
      const fvp = oa.api.flexviewpage({
        frontendtype: frontendtype,
        zoom: zoom,
        center: center,
        initMode: mode,
        cfg: {
            what: {
              selected_init: categories,
            },
        },
      });
      fvp.whenLoaded(() => {
        setUpdate(update + 1);
      });
      setFlexviewpage(fvp);
    }
  };


  return (
    <>
      {/* {frontendtype}
      {zoom}
      {mode}
      {categories.join(', ')} */}
      <PostScribe
        html={`<script src="${js}"></script>`}
        autoFix={true}
        done={loaded} />
      <div className="oax-top-cont">
        OutdoorActive here...
        {/* TODO: sostituire con uno spinner */}
      </div>
    </>
  );
};

// TODO: move defaults in settings
// OutdoorActiveView.defaultProps = {
//   frontendtype: 'tour',        // choose content type
//   zoom: 11,                    // set initial zoom level
//   center: [ 10.8867127, 44.6501718 ],  // set initial map center
// };

export default OutdoorActiveView;