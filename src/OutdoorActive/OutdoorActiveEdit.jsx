import React from 'react';
import OutdoorActiveView from './OutdoorActiveView';
import { Segment, Form } from 'semantic-ui-react';
import { SidebarPortal, Field, Icon } from '@plone/volto/components';
// import tableSVG from '@plone/volto/icons/table.svg';
import { InlineForm } from '@plone/volto/components';
import { OutdoorActiveSchema } from './schema';
import { DATABASE_INFORMATION } from '@plone/volto/onstants/ActionTypes';
// import config from '@plone/volto/registry';
// oa's javascripts are full of document.write() calls, so we need to use postscribe
// e.g. Failed to execute 'write' on 'Document': It isn't possible to write into a document from an asynchronously-loaded external script unless it is explicitly opened.

const OutdoorActiveEdit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  const schema = OutdoorActiveSchema(props);

  return (
    <div>
      <SidebarPortal selected={selected}>
        <Segment.Group raised>
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
        <OutdoorActiveView {...props} />
      </div>
    </div>
  );
};

export default OutdoorActiveEdit;
