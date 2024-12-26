import IntroCard from "@/components/IntroCard"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Calendar, Hospital, Plus, Star, Verified } from "lucide-react"
import doc2 from "../assets/images/doc-2.jpg"
import { socialLinks, specs, reviews } from "../utils/data.ts"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx"
import { useEffect, useState } from "react"

const DocInfo = () => {
  const get7DateSlotArray = () => {
    const current = new Date()
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(current)
      date.setDate(current.getDate() + i)
      return {
        date: date.toLocaleString("en-us", {
          weekday: "short",
          month: "short",
          day: "2-digit",
        }),
        slots: (date.getDate() % 10) + 1,
      }
    })
  }

  const dailySlotTimes = [
    {
      label: "Morning",
      time: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"],
    },
    {
      label: "Evening",
      time: ["4:00 PM", "4:20 PM", "4:40 PM", "5:00 PM", "5:20 PM"],
    },
  ]

  const datesArray = get7DateSlotArray()
  const [sessionMode, setSessionMode] = useState('1-session-mode-Video')
  const [slotDay, setSlotDay] = useState('0-date-slot-'+datesArray[0].date)
  const [slotTime, setSlotTime] = useState('Morning011:00 AM4')

  useEffect(() => {
    console.log(sessionMode)
    console.log(slotDay)
    console.log(slotTime)
  }, [sessionMode, slotDay, slotTime])

  return (
    <>
      {/* Header */}
      <div className='w-3/4 mx-auto h-60 my-8 bg-[url(/src/assets/images/bg-29.jpg)] bg-no-repeat bg-contain flex flex-col justify-end rounded-t-md'>
        <Card className='h-1/2 bg-primary-foreground rounded-none'>
          <CardContent className='flex gap-4 items-center px-8'>
            <Avatar className='size-32 -translate-y-1/4 border-[3px] border-white'>
              <AvatarImage src={doc2} className='object-cover' />
            </Avatar>
            <span>
              <h4 className='text-xl tracking-wide flex items-center gap-2'>
                Dr. Bruce Willis <Verified color='blue' size={18} />{" "}
              </h4>
              <p className='text-primary text-sm font-semibold font-sans'>
                Gynecologist
              </p>
              <p className='flex items-center gap-0.5 text-primary'>
                4.2{" "}
                {Array.from({ length: Math.round(4.2) }).map((_, idx) => (
                  <Star key={"star-" + idx} color='orange' size={16} />
                ))}{" "}
              </p>
            </span>
            <span className='flex-grow flex justify-around items-center px-4'>
              <span className='flex flex-col justify-center items-center'>
                <small className='text-primary font-sans font-bold tracking-wide'>
                  Followers
                </small>
                <p className='font-semibold'>850</p>
              </span>
              <span className='flex flex-col justify-center items-center'>
                <small className='text-primary font-sans font-bold tracking-wide'>
                  Following
                </small>
                <p className='font-semibold'>18K</p>
              </span>
              <span className='flex flex-col justify-center items-center'>
                <small className='text-primary font-sans font-bold tracking-wide'>
                  Posts
                </small>
                <p className='font-semibold'>250</p>
              </span>
            </span>
            <Button className='h-12'>Book an appointment</Button>
          </CardContent>
        </Card>
      </div>
      <div className='flex gap-12 w-3/4 mx-auto mb-8'>
        {/* Intro, Specs & Reviews */}
        <div className='w-full flex flex-col gap-8'>
          <IntroCard
            header={
              <div className='flex items-center justify-between'>
                <CardTitle className='font-medium'>A Little About me</CardTitle>
                <Button
                  variant='outline'
                  size='sm'
                  className='text-base border border-primary'>
                  Follow <Plus />
                </Button>
              </div>
            }
            content={
              <CardDescription className='relative pt-2'>
                <p className='line-clamp-3 font-sans text-neutral-600'>
                  Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni
                  Hospital Surat. love to work with all my hospital staff and
                  senior doctors. Completed my graduation in Gynaecologist
                  Medicine from the
                </p>
                <span className='absolute text-neutral-700 -bottom-6 right-0 hover:underline cursor-pointer active:scale-90'>
                  Read More
                </span>
              </CardDescription>
            }
            footer={
              <div className='pt-4'>
                <p className='flex items-center gap-4'>
                  Language Spoken
                  <p className='icon-txt'>English</p>
                  <p className='icon-txt'>Hindi</p>
                  <p className='icon-txt'>Telugu</p>
                </p>
                <div className='pt-6 flex gap-2'>
                  {socialLinks.map((ele, idx) => (
                    <a
                      key={"social-links-" + idx}
                      href={ele.href}
                      target='_blank'
                      className='transition-transform hover:animate-bounce'>
                      <img
                        src={ele.icon}
                        alt={ele.href}
                        className='size-10 p-1 drop-shadow-md'
                      />
                    </a>
                  ))}
                </div>
              </div>
            }
          />
          <IntroCard
            header='I Specialize in'
            content={
              <div className='flex items-center gap-4'>
                {specs.map((s, idx) => (
                  <span
                    key={"specs-" + idx + s.name}
                    className='w-max flex flex-col gap-2 items-center scale-90'>
                    <img
                      src={s.icon}
                      className='size-20 border rounded-md shadow-md hover:scale-110'
                    />
                    <p className='font-sans text-sm'>{s.name}</p>
                  </span>
                ))}
              </div>
            }
          />
          <IntroCard
            header='The Concerns I Treat'
            content={
              <div className='flex items-center gap-2 flex-wrap pt-2 pb-4 -mx-2'>
                <span className='icon-txt'>Skin Treatment</span>
                <span className='icon-txt'>Pregnancy</span>
                <span className='icon-txt'>Period Doubts</span>
                <span className='icon-txt'>Endometriosis</span>
                <span className='icon-txt'>Pelvic Pain</span>
                <span className='icon-txt'>Ovarian Cysts</span>
                <span className='icon-txt'>+ 5 More</span>
              </div>
            }
          />
          <IntroCard
            header='My Work Experience'
            content={
              <p className='pt-2 text-primary uppercase text-[14px]'>
                I have been in practice for : 7+ Years
              </p>
            }
            footer={
              <div className='w-full flex flex-col gap-4 pt-4'>
                <div className='flex justify-between pr-4'>
                  <div className='flex items-center gap-4'>
                    <Hospital color='blue' size={32} />
                    <span>
                      <h4>Midtown Medical Clinic</h4>
                      <p className='font-mono font-bold text-neutral-500'>
                        Senior Doctor
                      </p>
                    </span>
                  </div>
                  <span className='w-[15ch] text-center uppercase font-mono font-semibold text-neutral-500 text-sm'>
                    2016 - present
                  </span>
                </div>
                <div className='flex justify-between pr-4'>
                  <div className='flex items-center gap-4'>
                    <Hospital color='blue' size={32} />
                    <span>
                      <h4>Midtown Medical Clinic</h4>
                      <p className='font-mono font-bold text-neutral-500'>
                        Senior Doctor
                      </p>
                    </span>
                  </div>
                  <span className='w-[15ch] text-center uppercase font-mono font-semibold text-neutral-500 text-sm'>
                    2010 - 2015
                  </span>
                </div>
              </div>
            }
          />
          <IntroCard
            header='Featured Reviews (102)'
            content={reviews.map((r, idx) => (
              <div
                key={"comment-" + idx}
                className='flex flex-col gap-2 my-4 p-3 rounded-md bg-neutral-50'>
                <div className='flex gap-4'>
                  <Avatar className='size-12'>
                    <AvatarImage
                      src={r.profileImg}
                      alt={r.name}
                      className='object-cover'
                    />
                  </Avatar>
                  <div>
                    <h1>{r.name}</h1>
                    <p className='text-neutral-500 font-sans text-sm'>
                      {r.type}
                    </p>
                  </div>
                  <p className='ml-auto text-neutral-400'>{r.date}</p>
                </div>
                <div className='flex gap-1 p-2'>
                  {Array.from({ length: Math.round(r.ratings) }).map(
                    (_, idx) => (
                      <Star key={"star-" + idx} color='orange' size={16} />
                    ),
                  )}
                </div>
                <p className='text-neutral-700 text-sm tracking-tight'>
                  {r.comment}
                </p>
              </div>
            ))}
          />
        </div>
        {/* Appointment Section */}
        <div className='w-full'>
          <Card className='pt-6'>
            <CardHeader>
              <div className='flex items-center justify-between px-4 py-2 border rounded-xl'>
                <p className='text-neutral-600'>Appointment Fee</p>
                <p className='text-primary'>500 Rs.</p>
              </div>
            </CardHeader>
            <CardContent>
              <span className='flex items-center gap-6'>
                <p>Select your mode of session</p>
                <hr className='flex-grow border border-neutral-400' />
              </span>
              <div className='flex items-center gap-4 py-4'>
                {[
                  {
                    name: "In-Clinic",
                    time: "45 mins",
                  },
                  {
                    name: "Video",
                    time: "45 mins",
                  },
                  {
                    name: "Chat",
                    time: "10 mins",
                  },
                ].map((e, idx) => (
                  <span
                    key={idx + "-session-mode-" + e.name}
                    onClick={() =>
                      setSessionMode(idx + "-session-mode-" + e.name)
                    }
                    className={`w-full border px-6 py-2 rounded-lg shadow-md text-center cursor-pointer transition-transform ease-linear duration-300 hover:-translate-y-2 hover:bg-secondary active:scale-90 ${
                      sessionMode === idx + "-session-mode-" + e.name &&
                      "bg-secondary text-primary border-2 border-primary"
                    }`}>
                    <p className='font-sans'>{e.name}</p>
                    <p className='text-sm text-neutral-600'>{e.time}</p>
                  </span>
                ))}
              </div>

              {/* Time Slot */}
              <span className='flex items-center gap-6'>
                <p>Pick a time slot</p>
                <hr className='flex-grow border border-neutral-400' />
                <span className='border p-2 rounded-full border-black'>
                  <Calendar size={20} />
                </span>
              </span>
              <div className='p-6 border rounded-xl shadow-md my-4 -mx-2'>
                <Carousel className='w-10/12 mx-auto'>
                  <CarouselContent className='-ml-1.5'>
                    {datesArray.map((ds, idx) => (
                      <CarouselItem
                        key={idx + "-date-slot-" + ds.date}
                        className={`text-center basis-1/3 border shadow-md rounded-xl p-2 scale-90 cursor-pointer active:scale-75 ${
                          slotDay === idx + "-date-slot-" + ds.date &&
                          "bg-secondary border-2 border-primary"
                        }`}
                        onClick={() =>
                          setSlotDay(idx + "-date-slot-" + ds.date)
                        }>
                        <p className='font-sans'>{ds.date}</p>
                        <p
                          className={
                            ds.slots > 7
                              ? "text-primary"
                              : ds.slots > 5
                              ? "text-yellow-500"
                              : "text-red-500"
                          }>
                          {ds.slots} slots
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
              {/* Daily Time Slots */}
              <div>
                {dailySlotTimes.map((daily, idx) => (
                  <div key={daily.label + idx} className='py-2'>
                    <h4>{daily.label}</h4>
                    <div className='flex items-center gap-4 flex-wrap py-4'>
                      {daily.time.map((t, ti) => (
                        <span
                          key={daily.label + idx + t + ti}
                          onClick={() =>
                            setSlotTime(daily.label + idx + t + ti)
                          }
                          className={`p-3 border-2 rounded-full shadow-md cursor-pointer transition-transform ease-in duration-200 hover:bg-primary/70 hover:-translate-y-1 active:scale-90 ${
                            slotTime === daily.label + idx + t + ti &&
                            "bg-primary text-primary-foreground"
                          }`}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className='justify-center'>
              <Button className='w-10/12'>Make An Appointment</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  )
}

export default DocInfo
