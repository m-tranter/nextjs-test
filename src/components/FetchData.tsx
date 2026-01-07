
import { Client } from 'contensis-delivery-api';
import CecTable from './CecTable';
import type { TableDataProps } from '@/app/page';

const client = Client.create({
  rootUrl: `https://cms-${process.env.ALIAS}.cloud.contensis.com`,
  accessToken: process.env.ACCESS_TOKEN,
  projectId: process.env.PROJECT,
});

async function FetchData(tableData: TableDataProps) {
  const { caption } = tableData;
  const ct = tableData.contentType.id;

  const { fields } = await client.contentTypes.get(ct);
  const { items } = await client.entries
    .list({
      contentTypeId: ct,
    });
  return (
    <>
      {fields && items &&
        <div className="table-wrapper">
          <CecTable caption={caption} fields={fields.map(e => ({ name: e.name, id: e.id, dataFormat: e.dataFormat, dataType: e.dataType }))} items={items} />
        </div>}
    </>
  );
}

export default FetchData;
