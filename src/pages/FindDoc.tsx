import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import DocImg from "../assets/images/doc-1.jpg"
import {
  GraduationCap,
  LucideMessageSquareText,
  MapPin,
  Pencil,
  Star,
} from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import SelectCombo from "@/components/SelectCombo"


const DocCard = () => {
  const navigate = useNavigate()
  return (
    <>
      <Card className='bg-primary-foreground cursor-pointer transition-all transform-gpu ease-linear duration-200 hover:-translate-y-2 hover:drop-shadow-xl'>
        <CardHeader className='relative justify-center items-center'>
          <Avatar className='size-[100px] hover:drop-shadow-lg hover:border'>
            <AvatarImage src={DocImg} alt='Doc-1' className='object-cover' />
          </Avatar>
          <span className='absolute bottom-2 flex gap-2 items-center py-1 px-2 rounded-full bg-neutral-900 text-white scale-75'>
            <Star size='20' color='yellow' /> 4.5
          </span>
        </CardHeader>
        <CardContent className='flex flex-col gap-2'>
          <CardTitle>
            <h1 className='text-2xl text-center hover:drop-shadow-md'>
              Dr. Prerna Narang
            </h1>
          </CardTitle>

          <CardDescription>
            {/* Specialities */}
            <div className='text-neutral-600 px-4 mb-4'>
              <div className='flex items-center gap-4'>
                <Pencil size={16} className='text-primary' />
                <p>Male-Female Infertility</p>
              </div>
              <div className='flex items-center gap-4'>
                <GraduationCap size={16} className='text-primary' />
                <p>7 years of Experience</p>
              </div>
              <div className='flex items-center gap-4'>
                <LucideMessageSquareText size={16} className='text-primary' />
                <p>Speaks: English, Hindi, Marathi</p>
              </div>
            </div>
            {/* Fees Charges */}
            <div className='flex gap-2 text-neutral-600'>
              <div className='border border-neutral-400 flex flex-col items-center rounded-md p-1.5'>
                <h3 className='font-sans text-sm'>Video Consultation</h3>
                <p className='text-primary text-sm'>Rs.800</p>
              </div>
              <div className='border border-neutral-400 flex flex-col items-center rounded-md p-1.5'>
                <h3 className='font-sans text-sm'>Chat Consultation</h3>
                <p className='text-primary text-sm'>Free</p>
              </div>
            </div>
          </CardDescription>
        </CardContent>
        <CardFooter className='flex-col items-stretch gap-2'>
          <Button
            variant='outline'
            className='border-primary'
            onClick={() => navigate("/findDoc/1")}>
            View Profile
          </Button>
          <Button>Book a consultation</Button>
        </CardFooter>
      </Card>
    </>
  )
}

function FindDoc() {
  return (
    <>
      <Card className='text-center rounded-none bg-secondary'>
        <CardHeader>
          <h1 className='capitalize font-mono font-semibold text-3xl'>
            Find expert Doctors for an In-clinic session here
          </h1>
        </CardHeader>
        <CardContent>
          <form className='flex gap-3 justify-center items-center w-1/2 mx-auto'>
            <SelectCombo
              trigger={<MapPin className='text-primary' />}
              label='Locations'
              options={[
                { name: "Delhi", value: "1" },
                { name: "Mumbai", value: "2" },
                { name: "Chennai", value: "3" },
                { name: "Kolkata", value: "4" },
              ]}
            />

            <Input
              placeholder='eg. Doctor, Specialisation, clinic Name'
              className='bg-white'
            />
          </form>
        </CardContent>
        <CardFooter className="bg-white flex justify-center gap-16 items-center py-4">
          <SelectCombo label="Expertise" options={
            [
              {name:'Hair Loss', value:'1'},
              {name:'Pelvic Pain', value:'2'},
              {name:'Pregnancy', value:'3'},
            ]
          }/>
          <SelectCombo label="Gender" options={
            [
              {name:'Male', value:'1'},
              {name:'Female', value:'2'},
              {name:'Transgender', value:'3'},
            ]
          }/>
          <SelectCombo label="Fees" options={
            [
              {name:'0-500 rs', value:'1'},
              {name:'500-1000 rs', value:'2'},
              {name:'1000+ rs', value:'3'},
            ]
          }/>
          <SelectCombo label="Language" options={
            [
              {name:'Hindi', value:'1'},
              {name:'English', value:'2'},
            ]
          }/>
        </CardFooter>
      </Card>
      <div className='flex justify-center items-center gap-6 w-3/4 my-8 mx-auto'>
        <DocCard />
        <DocCard />
        <DocCard />
      </div>
    </>
  )
}

export default FindDoc
