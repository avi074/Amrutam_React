import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function NotFound() {
  return (
    <>
      <Card className="w-1/3 mx-auto my-8 bg-red-200">
        <CardHeader className="text-red-700">
            <CardTitle className="font-bold font-mono text-2xl text-center">Error 404</CardTitle>
        </CardHeader>
        <CardContent>
            <CardDescription className="text-center text-lg text-neutral-800">
                Requested page does not exist yet !!!
            </CardDescription>
        </CardContent>
      </Card>
    </>
  )
}

export default NotFound
