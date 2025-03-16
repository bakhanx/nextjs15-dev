import Form from 'next/form'
import { redirect } from 'next/navigation'


const redirectPage = async ()=>{
  "use server"
  redirect("/page1")
}

export default function Home() {

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        {/* flex wrap */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex flex-wrap">
            <div className="w-1/3 bg-blue-500">Item 1</div>
            <div className="w-1/3 bg-green-500">Item 2</div>
            <div className="w-1/3 bg-red-500">Item 3</div>
            <div className="w-1/3 bg-yellow-500">Item 4</div>
          </div>
        </div>

        {/* Form components */}
        <Form action={redirectPage}>
          <input name="query" className='border p-2' />
          <button type="submit" className='border p-2'>Submit</button>
        </Form>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </div>
  )
}
