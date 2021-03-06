import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../../../../styles/common/example-code-tabs.css';

const cssClass = 'example-code-tabs';

class Advanced2 extends React.PureComponent {
  render() {
    return (
      <Tabs className={cssClass}>
        <TabList>
          <Tab>Request</Tab>
          <Tab>Response</Tab>
        </TabList>
        <TabPanel>
          <pre>
            {`{
  "submissionId": "0313d351-624d-409b-837f-500d603819aa",
  "measurements": [
    {
      "measureId": "IA_EPA_3",
      "value": true
    }
  ],
  "category": "ia",
  "submissionMethod": "registry",
  "performanceStart": "2018-01-01",
  "performanceEnd": "2018-06-01"
}`}
          </pre>
        </TabPanel>
        <TabPanel>
          <p>Response code:</p>
          <pre>201 Created</pre>
          <p>Response body:</p>
          <pre>
            {`{
  "data": {
    "measurementSet": {
      "id": "0313d351-a094-4dc2-b632-23cd88bffb5e",
      "createdAt": "2018-08-21T13:55:29Z",
      "updatedAt": "2018-08-21T14:07:51Z",
      "submissionId": "0313d351-624d-409b-837f-500d603819aa",
      "category": "ia",
      "submissionMethod": "registry",
      "measureSet": null,
      "submitterId": "1234567",
      "submitterType": "organization",
      "performanceStart": "2018-01-01",
      "performanceEnd": "2018-06-01",
      "measurements": [
        {
          "id": "0313d5c6-1a2d-4564-9ac3-d006bf03efac",
          "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
          "measureId": "IA_EPA_3",
          "value": true,
          "performanceStart": null,
          "performanceEnd": null
        },
        {
          "id": "0313d351-10bd-4419-a593-ece163a67520",
          "measurementSetId": "0313d351-a094-4dc2-b632-23cd88bffb5e",
          "measureId": "IA_EPA_4",
          "value": true,
          "performanceStart": null,
          "performanceEnd": null
        }
      ]
    }
  }
}`}
          </pre>
        </TabPanel>
      </Tabs>
    );
  }
}

export default Advanced2;
