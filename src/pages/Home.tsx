import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"

function Home() {
  return (
    <>
      <Card>
        <h1 className="text-center text-4xl text-slate-500">Home</h1>
        <Button variant={"ghost"}>Click me</Button>
      </Card>
    </>
  )
}

export default Home
