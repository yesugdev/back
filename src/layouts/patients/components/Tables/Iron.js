import React from 'react';
import Table from 'examples/Tables/Table';

// Define columns for the table
const columns = [
  { name: 'date', align: 'left', width: '12.5%' },
  { name: 'Apolipoprotein B (substance)', align: 'left', width: '12.5%' },
  { name: 'Total iron binding capacity measurement', align: 'left', width: '12.5%' },
  { name: 'Transferrin saturation index', align: 'left', width: '12.5%' },
  { name: 'Transferrin', align: 'left', width: '12.5%' },
  { name: 'Plasma iron level', align: 'left', width: '12.5%' },
  { name: 'notes', align: 'left', width: '12.5%' },
  { name: 'hospital', align: 'left', width: '12.5%' },
];

// Define sample rows
const rows = [
  {
    date: '2024-03-20',
    'Apolipoprotein B (substance)': 'Normal',
    'Total iron binding capacity measurement': 'Normal',
    'Transferrin saturation index': 'Normal',
    'Transferrin': 'Normal',
    'Plasma iron level': 'Normal',
    notes: 'No comments',
    hospital: 'Hospital A',
    hasBorder: true,
  },
  {
    date: '2024-03-21',
    'Apolipoprotein B (substance)': 'High',
    'Total iron binding capacity measurement': 'Low',
    'Transferrin saturation index': 'Normal',
    'Transferrin': 'Normal',
    'Plasma iron level': 'Low',
    notes: 'Follow up required',
    hospital: 'Hospital B',
    hasBorder: true,
  },
];

function IronTable() {
  return (
    <div>
      <Table columns={columns} rows={rows} />
    </div>
  );
}

export default IronTable;