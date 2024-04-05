import Button from '@mui/material/Button'
import GroupsIcon from '@mui/icons-material/Groups'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(MNV, HVT, SDT, CV) {
  return {MNV, HVT, SDT, CV };
}

const rows = [
  createData('111', 'Nguyen Van A', '0666888', 'Nhan vien'),
  createData('112', 'Nguyen Van B', '0666888', 'Giam doc'),
  createData('113', 'Nguyen Van C', '0666888', 'Nhan vien'),
  createData('114', 'Nguyen Van D', '0666888', 'Nhan vien'),
  createData('115', 'Nguyen Van D', '0666888', 'Nhan vien'),
  createData('116', 'Nguyen Van D', '0666888', 'Nhan vien'),
  createData('117', 'Nguyen Van D', '0666888', 'Nhan vien'),
  createData('118', 'Nguyen Van D', '0666888', 'Nhan vien'),
  createData('119', 'Nguyen Van D', '0666888', 'Nhan vien'),
];

export default function Staff() {
  return (
    <div className='min-w-full pl-20 pr-20 pt-10'>
      <div className='flex items-center justify-between mb-5'>
        <div className='flex gap-3 font-bold text-xl items-center border-2 rounded-md p-3'>
          <div>Quản Lý Nhân Sự</div>
          <GroupsIcon sx={{ fontSize: 40}}/>
        </div>
        <div className='flex gap-3'>
          <Button sx={{borderRadius: 5}} variant="contained">Thêm mới</Button>
          <Button sx={{borderRadius: 5}} variant="contained">Xuất file</Button>
        </div>
      </div>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STT</StyledTableCell>
            <StyledTableCell>Mã nhân viên</StyledTableCell>
            <StyledTableCell >Họ và tên</StyledTableCell>
            <StyledTableCell >Số điện thoại</StyledTableCell>
            <StyledTableCell >Chức vụ</StyledTableCell>
            <StyledTableCell >Thao tác</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={row.MNV}>
              <StyledTableCell component="th" scope="row">
                {index + 1}
              </StyledTableCell>
              <StyledTableCell>{row.MNV}</StyledTableCell>
              <StyledTableCell>{row.HVT}</StyledTableCell>
              <StyledTableCell>{row.SDT}</StyledTableCell>
              <StyledTableCell>{row.CV}</StyledTableCell>
              <StyledTableCell>
                <div className='flex gap-2'>
                <button><EditIcon sx={{color: 'gray'}}/></button>
                  <button><DeleteForeverIcon sx={{color: 'red'}}/></button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
