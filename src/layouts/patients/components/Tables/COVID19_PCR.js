import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'COVID-19 PCR', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'COVID-19 PCR': 'Positive',
    notes: 'Patient advised to quarantine',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    'COVID-19 PCR': 'Negative',
    notes: 'No further action required',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function COVID19_PCRTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default COVID19_PCRTable;