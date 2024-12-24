import IntroCard from "@/components/IntroCard"
import { Button } from "@/components/ui/button"
import { CardTitle } from "@/components/ui/card"
import { Plus } from "lucide-react"

const DocInfo = () => {
  return (
    <>
      <div className='flex p-4 w-10/12'>
        <div className='w-1/2 p-4 flex flex-col gap-8'>
          <IntroCard
            header={
              <div className="flex items-center justify-between">
                <CardTitle className="font-medium">A Little About me</CardTitle>
                <Button variant='outline' size="sm" className="text-base border border-primary">
                  Follow <Plus />
                </Button>
              </div>
            }
            content={<div>Hello World from content</div>}
          />
          <IntroCard
            header='I Specialize in'
            content={<div>Hello World from content</div>}
          />
          <IntroCard
            header='The Concerns I Treat'
            content={<div>Hello World from content</div>}
          />
          <IntroCard
            header='My Work Experience'
            content={<div>Hello World from content</div>}
          />
          <IntroCard
            header='Featured Reviews (102)'
            content={<div>Hello World from content</div>}
          />
        </div>
        <div className='w-1/2'></div>
      </div>
    </>
  )
}

export default DocInfo
