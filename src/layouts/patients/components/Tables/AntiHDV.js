import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '25%' },
  { name: 'Anti-HDV', align: 'left', width: '25%' },
  { name: 'notes', align: 'left', width: '25%' },
  { name: 'hospital', align: 'left', width: '25%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'Anti-HDV': 'Positive',
    notes: 'Follow up required',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    'Anti-HDV': 'Negative',
    notes: 'No comments',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function AntiHDVTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default AntiHDVTable;