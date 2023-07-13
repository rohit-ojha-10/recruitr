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

export default function WExpForm() {
  const statusList = ["Currently Working","Unemployed","On Notice Period"]
  const employmentType = ["Full Time","Part Time","Internship"]
  const citiess = useMemo(() => cities,[])
  return (
    <div>
      <Typography variant="h4" color="blue-gray">
       Add Experience
      </Typography>

      <form style={{ overflowX: 'visible' }} className="mt-8 mb-2">
        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Job Title
            </Typography>

            <Input className="w-100" label="Job Title" />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Company Name
            </Typography>
            <Input size="lg" label="Company Name" />
          </div>
        </div>
        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Employment type
            </Typography>

            <Select label="Ex-Full-Time" menuProps={{ className: "h-48" }}>
                    {employmentType.map((status) => (
                      <Option key={status} value={status}>
                        {status}
                      </Option>
                    ))}
                  </Select>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Working Status
            </Typography>
            <Select label="Ex-Unemployed" menuProps={{ className: "h-48" }}>
                    {statusList.map((status) => (
                      <Option key={status} value={status}>
                        {status}
                      </Option>
                    ))}
                  </Select>
          </div>
        </div>

        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Work Location
            </Typography>

            <Select label="City" menuProps={{ className: "h-48" }}>
                    {citiess.map(({ name }) => (
                      <Option key={name} value={name}>
                        {name}
                      </Option>
                    ))}
                  </Select>
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Add CTC
            </Typography>
            <Input type="number" label="Add CTC" />
          </div>
        </div>
        <div className="mb-4 flex gap-2">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Starting Date
            </Typography>

            <Input type="date" className="w-100" label="Work Location" />
          </div>
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Ending Date
            </Typography>
            <Input type="date" size="lg" label="Add CTC" />
          </div>
        </div>
        <div className="mb-4 flex">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Description
            </Typography>

            <Input type="textarea" className="w-100 h-16" label="Description" />
          </div>

        </div>

      </form>
    </div>
  )
}
