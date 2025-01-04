import React from 'react';
import Table from 'examples/Tables/Table';

const columns = [
  { name: 'date', align: 'left', width: '10%' },
  { name: 'antiHCV', align: 'left', width: '10%' },
  { name: 'HBsAg', align: 'left', width: '10%' },
  { name: 'HIV', align: 'left', width: '10%' },
  { name: 'Syphills', align: 'left', width: '10%' },
  { name: 'Covid19', align: 'left', width: '10%' },
  { name: 'TPHA', align: 'left', width: '10%' },
  { name: 'RPR', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

const rows = [
  {
    date: '2024-03-20',
    antiHCV: 'Negative',
    HBsAg: 'Negative',
    HIV: 'Negative',
    Syphills: 'Negative',
    Covid19: 'Negative',
    TPHA: 'Negative',
    RPR: 'Negative',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    antiHCV: 'Positive',
    HBsAg: 'Negative',
    HIV: 'Negative',
    Syphills: 'Negative',
    Covid19: 'Positive',
    TPHA: 'Negative',
    RPR: 'Negative',
    notes: 'Follow up required',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function Rapid_test() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default Rapid_test;