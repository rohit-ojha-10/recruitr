import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
} from '@material-tailwind/react'
import { cities } from '../utils.js/cities'
import { useMemo } from 'react'

export default function Fileupload() {
  const statusList = ['Currently Working', 'Unemployed', 'On Notice Period']
  const employmentType = ['Full Time', 'Part Time', 'Internship']
  const citiess = useMemo(() => cities, [])
  return (
    <div>
      <Typography variant="h4" color="blue-gray">
        Upload your Resume
      </Typography>

      <form style={{ overflowX: 'visible' }} className="mt-8 mb-2">
        <div className="mb-4 flex">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Resume Video
            </Typography>

            <Input type="file" className="w-100 h-16" label="Video Here..." />
          </div>
        </div>
      </form>
    </div>
  )
}
