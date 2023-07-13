import React from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
  Input,
} from '@material-tailwind/react'
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from '@heroicons/react/24/outline'
import {
  applied_jobs,
  chat,
  dashboard,
  find_jobs,
  notifications,
} from '../images/svgs'

// profile menu component
const profileMenuItems = [
  {
    label: 'My Profile',
    icon: UserCircleIcon,
  },
  {
    label: 'Edit Profile',
    icon: Cog6ToothIcon,
  },
  {
    label: 'Inbox',
    icon: InboxArrowDownIcon,
  },
  {
    label: 'Help',
    icon: LifebuoyIcon,
  },
  {
    label: 'Sign Out',
    icon: PowerIcon,
  },
]

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src="https://media.licdn.com/dms/image/D4D35AQFmj2cPiWui_g/profile-framedphoto-shrink_400_400/0/1689003533127?e=1689854400&v=beta&t=wqvIHTX8w11bPNcFbdYdIEyaYZvyxdouihvNWYn26cU"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}
function NavList() {
  return (
    <>
      <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
        <Typography as="a" href="#" variant="small" className="font-normal">
          <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
            {dashboard} Pages{' '}
          </MenuItem>
        </Typography>
        <Typography
          key={'Jobs'}
          as="a"
          href="#"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {find_jobs} {'Find Jobs'}
          </MenuItem>
        </Typography>
        <Typography as="a" href="#" variant="small" className="font-normal">
          <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
            {applied_jobs} Applied Jobs{' '}
          </MenuItem>
        </Typography>

        <Typography as="a" href="#" variant="small" className="font-normal ">
          <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
            {chat}{' '}
          </MenuItem>
        </Typography>
        <Typography as="a" href="#" variant="small" className="font-normal">
          <MenuItem className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full">
            {notifications}{' '}
          </MenuItem>
        </Typography>
      </ul>
    </>
  )
}

export default function RecruitrNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur)

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    )
  }, [])
  return (
    <Navbar className="mx-auto max-w-screen-3xl p-2 lg:pl-6">
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-16 cursor-pointer py-1.5 font-medium"
        >
          <img src={require('../images/Recruitr.png')} />
          <img src={require('../images/navlogo.png')} />
        </Typography>
        <div className="absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>
        <div className="relative flex w-full gap-2 md:w-max mr-16">
          <Input
            type="search"
            label="Search Jobs..."
            className="pr-20 "
            containerProps={{
              className: 'min-w-[288px]',
            }}
          />
          <Button size="sm" className="!absolute right-1 top-1 rounded">
            Search
          </Button>
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        <ProfileMenu />
      </div>

      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </Navbar>
  )
}
