import IntroCard from "@/components/IntroCard"
import { Button } from "@/components/ui/button"
import { CardDescription, CardTitle } from "@/components/ui/card"
import { Hospital, Plus, Star } from "lucide-react"
import fb from "/fb.svg"
import ig from "/ig.svg"
import yt from "/yt.svg"
import x from "/x.svg"
import r1 from "../assets/images/r1.jpeg"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

const DocInfo = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/",
      icon: fb,
    },
    {
      href: "https://www.instagram.com/",
      icon: ig,
    },
    {
      href: "https://www.youtube.com/",
      icon: yt,
    },
    {
      href: "https://www.x.com/",
      icon: x,
    },
  ]

  const reviews = [
    {
      name: "Alicent Hightower",
      profileImg: r1,
      type: "Consulted for Skin care",
      date: "20 January 2023",
      ratings: 5,
      comment:
        "Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods",
    },
    {
      name: "Alicent Hightower",
      profileImg: r1,
      type: "Consulted for Pregnancy",
      date: "20 January 2023",
      ratings: 5,
      comment:
        "Might be bit early to confirm but yes I can see noticeable difference. will write again after using it for longer periods",
    },
  ]

  return (
    <>
      <div className='flex w-3/4 mx-auto'>
        <div className='w-1/2 p-4 flex flex-col gap-8'>
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
            content={<div>Hello World from content</div>}
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
              <div key={"comment-" + idx} className="flex flex-col gap-2 my-4 p-3 rounded-md bg-neutral-50">
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
                    <p className="text-neutral-500 font-sans text-sm">{r.type}</p>
                  </div>
                  <p className="ml-auto text-neutral-400">{r.date}</p>
                </div>
                <div className='flex gap-1 p-2'>
                  {Array.from({ length: Math.round(r.ratings) }).map(
                    (_, idx) => (
                      <Star key={"star-" + idx} color='orange' size={16} />
                    ),
                  )}
                </div>
                <p className="text-neutral-700 text-sm tracking-tight">{r.comment}</p>
              </div>
            ))}
          />
        </div>
        <div className='w-1/2'></div>
      </div>
    </>
  )
}

export default DocInfo
