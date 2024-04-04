import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };
  const handleClose = () => {
    setAnchorEl(null)
  };
  return (
    <div className='flex h-20 border-b-2 items-center justify-between pl-20 
    pr-20 bg-slate-700 text-white text-lg font-semibold'>
      <div className='border-r-4 p-2 border-orange-500'>
        Forge
      </div>
      <div className='flex gap-8'>
        <Link to='/staff'><button className='ph-header-item'>Nhân Sự</button></Link>
        <Link to='/material'><button className='ph-header-item'>Nguyên Liệu</button></Link>
        <Link to='/product'><button className='ph-header-item'>Sản Phẩm</button></Link>
        <Link to='/production'><button className='ph-header-item'>Sản Xuất</button></Link>
      </div>

      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
        <span className='text-orange-500 font-medium text-lg'>Admin</span>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Hồ sơ của bạn</MenuItem>
          <MenuItem onClick={handleClose}>Quản lý tài khoản</MenuItem>
          <MenuItem onClick={handleClose}>Đăng xuất</MenuItem>
        </Menu>
    </div>
    </div>
  )
}
