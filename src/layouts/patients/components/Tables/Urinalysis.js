import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '10%' },
  { name: 'BLD', align: 'left', width: '10%' },
  { name: 'BIL', align: 'left', width: '10%' },
  { name: 'URO (0.2 - 1)', align: 'left', width: '10%' },
  { name: 'KET', align: 'left', width: '10%' },
  { name: 'PRO', align: 'left', width: '10%' },
  { name: 'NIT', align: 'left', width: '10%' },
  { name: 'GLU', align: 'left', width: '10%' },
  { name: 'SG (1000 - 1030)', align: 'left', width: '10%' },
  { name: 'pH (5 - 8.5)', align: 'left', width: '10%' },
  { name: 'LEU', align: 'left', width: '10%' },
  { name: 'notes', align: 'left', width: '10%' },
  { name: 'hospital', align: 'left', width: '10%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    BLD: 'Negative',
    BIL: 'Negative',
    'URO (0.2 - 1)': '0.5',
    KET: 'Negative',
    PRO: 'Negative',
    NIT: 'Negative',
    GLU: 'Negative',
    'SG (1000 - 1030)': '1015',
    'pH (5 - 8.5)': '6.5',
    LEU: 'Negative',
    notes: 'Normal results',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    BLD: 'Positive',
    BIL: 'Negative',
    'URO (0.2 - 1)': '0.8',
    KET: 'Negative',
    PRO: 'Positive',
    NIT: 'Negative',
    GLU: 'Negative',
    'SG (1000 - 1030)': '1020',
    'pH (5 - 8.5)': '7.0',
    LEU: 'Positive',
    notes: 'Follow up required',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function UrinalysisTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default UrinalysisTable;