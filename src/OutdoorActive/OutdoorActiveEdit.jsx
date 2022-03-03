import React from 'react';
import OutdoorActiveView from './OutdoorActiveView';
import { Segment, Form } from 'semantic-ui-react';
import { SidebarPortal, Field, Icon } from '@plone/volto/components';
// import tableSVG from '@plone/volto/icons/table.svg';
import { InlineForm } from '@plone/volto/components';
import { OutdoorActiveSchema } from './schema';
// import config from '@plone/volto/registry';
// oa's javascripts are full of document.write() calls, so we need to use postscribe
// e.g. Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.

// frontendtype:
    // “tour”, “hut”
    // “poi”, “hut”, “loging”
    // “offer”
    // “skiresort”
    // “story”
    // “condition”

// modes:
// conf.modes = [
//   "gallery",
//   "map",
//   "list",
//   "listMap"
//   //, "magazine" // this mode is only available if content type story is chosen
// ],
// conf.initMode = "listMap";


// // initialize filter ("refine your search")
// conf.cfg.filter = {
//   condition_slider_vInit:8 // 30 days
// }

// // possible values:
// //  0 -> today only
// //  1 -> 1 day
// //  2 -> 2 days
// //  3 -> 3 days
// //  4 -> 4 days
// //  5 -> 5 days
// //  6 -> 1 week (7 days)
// //  7 -> 2 weeks (14 days)
// //  8 -> 1 month (30 days)
// //  8 -> 3 months (90 days)
// // 10 -> 1 year (365 days)

//Filter by content source:
// conf.cfg = {
//   "initFilterNoGui" : {
//       // filter by content source
//       orgId: "1010"
//   }
// };


const OutdoorActiveEdit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  const schema = OutdoorActiveSchema(props);
  const { frontendtype, mode, zoom, categories } = data;

  return (
    <div>
      <SidebarPortal selected={selected}>
        <Segment.Group raised>
          {/* <header className="header pulled">
            <h2>OutdoorActive</h2>
          </header> */}
          <InlineForm
            schema={schema}
            title={schema.title}
            onChangeField={(id, value) => {
              onChangeBlock(block, {
                ...data,
                [id]: value,
              });
            }}
            formData={data}
          />
        </Segment.Group>
      </SidebarPortal>

      <div>
        <h3>OutdoorActive</h3>
        {/* {frontendtype}
      {zoom}
      {mode}
      {(categories || []).join(', ')}

        <a href={`http://www.outdooractive.com/api/project/api-dev-oa/category/tree?key=yourtest-outdoora-ctiveapi`}>categories</a> */}

        <OutdoorActiveView {...props} />
      </div>

    </div>
  );
};


// // TODO: move defaults in settings
// OutdoorActiveEdit.defaultProps = {
//   frontendtype: 'tour',        // choose content type
// };

export default OutdoorActiveEdit;