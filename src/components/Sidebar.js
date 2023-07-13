import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
  Chip,
  Input,
  Typography,
  Textarea,
} from '@material-tailwind/react'
import ComplexNavbar from './ComplexNavbar'
import WExpForm from './WExpForm'
import { useState } from 'react'
import { plus } from '../images/svgs'
import Qualifications from './Qualifications'
import Fileupload from './Fileupload'

export default function Sidebar() {
  const [tabValue, setTabValue] = useState('wxp')
  const data = [
    {
      label: (
        <>
          <div className="flex flex-col justify-start">
            <h3 className="flex justify-start text-base grid-cols-4 focus:text-white">
              Work Experience and Skills
            </h3>
            <p className="grid-cols-2 text-sm">
              Add all your Internships, Work Details...
            </p>
          </div>
        </>
      ),
      value: 'wxp',
      desc: <WExpForm />,
    },
    {
      label: (
        <>
          <div className="flex flex-col justify-start">
            <h3 className="text-xl focus:text-white">Qualifications</h3>
            <p className="text-xs">
              Highlight your Education in the eye of recruiters...
            </p>
          </div>
        </>
      ),
      value: 'qualifications',
      desc: <Qualifications />,
    },
    {
      label: (
        <>
          <div className="flex flex-col justify-start">
            <h3 className="text-xl focus:text-white">Highlights, Sports...</h3>
            <p className="text-xs">
              Show your Highlights & Sports etc to recruiting te...
            </p>
          </div>
        </>
      ),
      value: 'sports',
      desc: (
        <div className="mb-4 flex">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Description
            </Typography>

            <div className="w-96">
              <Textarea label="Describe your extra curricular activities..." />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <>
          <div className="flex flex-col justify-start">
            <h3 className="text-xl focus:text-white">Recommendations.</h3>
            <p className="text-xs">
              Provide Recommendations, get Recommendation...
            </p>
          </div>
        </>
      ),
      value: 'angular',
      desc: (
        <div className=" flex">
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-4 font-medium"
            >
              Recommendations
            </Typography>

            <div className="w-96">
              <Textarea label="Mention your recommendations here" />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: (
        <>
          <div className="flex flex-col justify-start">
            <h3 className="text-xl focus:text-white">Upload Video Resume</h3>
            <p className="text-xs">
              Now share your details in video form to Employer...
            </p>
          </div>
        </>
      ),
      value: 'svelte',
      desc: <Fileupload />,
    },
  ]

  return (
    <div>
      <Tabs
        id="custom-animation"
        className="flex justify-around w-100"
        value="wxp"
        orientation="vertical"
      >
        <div>
          <div class="h-36 flex flex-col items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
            <Avatar
              variant="circular"
              size="lg"
              alt="tania andrew"
              className="border border-2 border-slate-50 p-0.5 mb-2 mt-2"
              src="https://media.licdn.com/dms/image/D4D35AQFmj2cPiWui_g/profile-framedphoto-shrink_400_400/0/1689003533127?e=1689854400&v=beta&t=wqvIHTX8w11bPNcFbdYdIEyaYZvyxdouihvNWYn26cU"
            />

            <div className="flex gap-2">
              <Chip className="bg-white" variant="ghost" value="React" />
              <Chip className="bg-white" variant="ghost" value="Node" />
              <Chip className="bg-white" variant="ghost" value="Express" />
              <Chip className="bg-white" variant="ghost" value="Django" />
            </div>
          </div>
          <hr className="mt-2 w-100 h-2 bg-grey"></hr>
          <TabsHeader
            className="w-96 h-128 mt-2 bg-white divide-y"
            indicatorProps={{
              className: 'bg-slate-900',
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                onClick={() => setTabValue(value)}
                className={
                  value === tabValue
                    ? `h-20 text-md text-white`
                    : `h-20 text-black`
                }
                key={value}
                value={value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </div>
        <div>
          <TabsBody className="w-100">
            {data.map(({ value, desc }) => (
              <TabPanel key={value} value={value}>
                {desc}
              </TabPanel>
            ))}
          </TabsBody>
        </div>
      </Tabs>
    </div>
  )
}
