'use client'
import MiniCanvas from './MiniCanvas';

import { ReactElement, useState } from 'react';


const makeTd = (data: any, dataType: string) => {
  if (data === null) {
    return '';
  }
  if (typeof data === 'number') {
    return <>{dataType === 'decimal' ? data.toFixed(2) : data}</>;
  }
  if (typeof data === 'string') {
    switch (dataType) {
      case 'dateTime':
        return <>{new Date(data).toLocaleDateString('en-GB')}</>;
      case 'string':
        return <>{data}</>;
      case 'email':
        return <a href={`mailto:${data} `} > {data}</a >;
      case 'url':
        return <a href={data}>{data}</a>;
      default:
        return <>{data}</>;
    }
  }
  if (dataType === 'canvas') {
    return <MiniCanvas {...data} />;
  }
};



function CecTable({ caption, fields, items }) {
  const makeHeader = (fields) => {
    if (!Array.isArray(fields)) {
      return null;
    } else {
      return fields.map(e => <th scope="col" key={e.id}>{e.name['en-GB']}</th>);
    }
  }

  const makeRows = (items) => {
    if (!Array.isArray(items)) {
      return null;
    } else {
      return items.map((row) => {
        return (
          <tr key={row.sys.id}>
            {fields.map(e => <td key={e.id}>{makeTd(row[e.id], e.dataFormat || e.dataType)}</td>)}
          </tr>
        );
      });
    }
  }

  const [ths, setThs] = useState(fields)
  const [rows, setRows] = useState(items)

  const sort = () => {
    setRows(prev => {
      if (!prev || prev.length < 2) {
        return prev
      } else {
        const op = prev[0].name.localeCompare(prev[prev.length - 1].name)
        return [...prev].sort((a, b) => op * a.name.localeCompare(b.name))
      }
    })
  }

  return (
    <>
      <button type="button" onClick={sort}>Sort</button>
      <div className="table-wrapper">
        <table>
          <caption className="sr-only">{caption} </caption>
          <thead>
            <tr>
              {makeHeader(ths)}
            </tr>
          </thead>
          <tbody>{makeRows(rows)}</tbody>
        </table>
      </div>
    </>
  );
}

export default CecTable;
