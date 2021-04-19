import { Button, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined'
// import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft'
// import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter'
// import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight'
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import FilterListOutlinedIcon from '@material-ui/icons/FilterListOutlined'
import GetAppOutlinedIcon from '@material-ui/icons/GetAppOutlined'
// import { red } from '@material-ui/core/colors'

export const ActionBar: React.FC = () => {
  const [selectAll, setSelectAll] = useState(false)

  const [allFilter, setAllFilter] = React.useState<string>('all')

  const handleAllFilter = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAllFilter(newAlignment)
  }

  const [statusFilter, setStatusFilter] = React.useState<string>('all')

  const handleStatusFilter = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setStatusFilter(newAlignment)
  }

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <div>
        <IconButton
          aria-label="select-all"
          onClick={() => setSelectAll(!selectAll)}
          // style={selectAll ? { backgroundColor: red[500] } : {}}
        >
          {selectAll ? (
            <CheckBoxOutlinedIcon />
          ) : (
            <CheckBoxOutlineBlankOutlinedIcon />
          )}
        </IconButton>
      </div>

      <div style={{ marginLeft: '10px' }}>
        <ToggleButtonGroup
          value={allFilter}
          exclusive
          onChange={handleAllFilter}
          aria-label="All Filter"
        >
          <ToggleButton value="all" aria-label="left aligned">
            All
          </ToggleButton>
          <ToggleButton value="assigned-to-me" aria-label="centered">
            Assigned to me
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div style={{ marginLeft: '10px' }}>
        <ToggleButtonGroup
          value={statusFilter}
          exclusive
          onChange={handleStatusFilter}
          aria-label="Status Filter"
        >
          <ToggleButton value="all" aria-label="left aligned">
            All
          </ToggleButton>
          <ToggleButton value="on-time" aria-label="left aligned">
            On-Time
          </ToggleButton>
          <ToggleButton value="warn" aria-label="centered">
            Warning
          </ToggleButton>
          <ToggleButton value="late" aria-label="centered">
            Late
          </ToggleButton>
        </ToggleButtonGroup>
      </div>

      <div style={{ marginLeft: '10px' }}>
        <Button variant="outlined" color="primary" style={{ padding: '11px' }}>
          Assign Architect
        </Button>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <Button variant="outlined" color="primary" style={{ padding: '11px' }}>
          Assign Sub-Contractor
        </Button>
      </div>
      <div style={{ marginLeft: '10px' }}>
        <Button variant="outlined" color="primary" style={{ padding: '11px' }}>
          Assign Plan
        </Button>
      </div>
      <div style={{ marginLeft: 'auto' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '10px' }}>
            <Button
              variant="outlined"
              color="secondary"
              style={{ padding: '11px' }}
              startIcon={<FilterListOutlinedIcon />}
            >
              Filter
            </Button>
          </div>
          <div style={{ marginRight: '10px' }}>
            <Button
              variant="outlined"
              color="secondary"
              style={{ padding: '11px' }}
              startIcon={<GetAppOutlinedIcon />}
            >
              Export
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
