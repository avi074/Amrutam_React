import { FC, ReactNode } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

interface IntroCardProps {
  header?: ReactNode
  content: ReactNode
  footer?: ReactNode
}

const IntroCard: FC<IntroCardProps> = ({ header, content, footer }) => {
  return (
    <>
      <Card className="overflow-hidden">
        {header && (
          <CardHeader className='rounded-none bg-neutral-200 py-4 px-6 mb-2 font-sans text-xl'>
            {header}
          </CardHeader>
        )}
        <CardContent className="pb-2">{content}</CardContent>
        {footer && (
          <>
            <hr className="text-neutral-500 border w-3/4 mx-4 my-2"/>
            <CardFooter>{footer}</CardFooter>
          </>
        )}
      </Card>
    </>
  )
}

export default IntroCard
