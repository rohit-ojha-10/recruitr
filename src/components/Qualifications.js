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

export default function Qualifications() {
  const statusList = ['Currently Working', 'Unemployed', 'On Notice Period']
  const employmentType = ['Full Time', 'Part Time', 'Internship']
  const citiess = useMemo(() => cities, [])
  return (
    <div>
      <Typography variant="h4" color="blue-gray">
        Qualifications
      </Typography>

      <form style={{ overflowX: 'visible' }} className="mt-8 mb-2">
        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              10th Marks
            </Typography>

            <Input type="number" className="w-100" label="Enter Marks" />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              12th Marks
            </Typography>
            <Input type="number" className="w-100" label="Enter Marks" />
          </div>
        </div>
        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              College Starting Date
            </Typography>

            <Input type="date" className="w-100" label="Work Location" />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              College Ending Date
            </Typography>
            <Input type="date" size="lg" label="Add CTC" />
          </div>
        </div>
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-4 font-medium"
          >
            Current GPA
          </Typography>
          <Input type="number" className="w-100" label="Enter GPA" />
        </div>
        <div className="mb-4 flex">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Remarks
            </Typography>

            <Input type="textarea" className="w-100 h-16" label="Remarks..." />
          </div>
        </div>
      </form>
    </div>
  )
}
