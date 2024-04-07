import CodeBlock from './components/CodeBlock'
import ActionButton from './components/ActionButton'
import { WavingHand } from '@mui/icons-material'

export default function page() {

  return (
    <div className='flex items-center justify-center w-full h-full bg-background/60 backdrop-blur-sm p-3'>
      <div className='w-full h-full flex flex-col gap-3 items-start justify-center py-3 px-7'>
        <div className='flex items-center gap-2 textflow text-4xl text-foreground'>
          <div>
            Hello
          </div>
          <div className='text-warning'>
            <WavingHand /><span className='text-foreground'>,</span>
          </div>
        </div>
        <div className='textflow text-4xl text-foreground'>
          This is <span className='text-warning'>Pavitra Patel</span>,
          Welcome to my portfolio !
        </div>
        <div className='pt-2'>
          <ActionButton />
        </div>
      </div>
      <CodeBlock />
    </div>
    // <>
    // <Canvas />
    // <main>
    //   <div className='flex flex-col items-center justify-center w-full h-full'>
    //     <div className="flex items-start justify-center w-full h-full p-3">
    //       <div className='home-textArea flex items-start p-5 justify-center w-full rounded-3xl bg-background'>
    //         <div className="flex flex-col items-start gap-5 justify-start w-full z-10">
    //           <TextArea />
    //           <ActionButton />
    //         </div>
    //       </div>
    //       <div className="flex flex-col items-center justify-center h-full w-full">
    //         <div className='orbit rounded-full bg-tertiary'>
    //           <ProfileImage />
    //           <SkillsRound />
    //         </div>
    //       </div>
    //     </div>
    //     {/* <div className="flex w-full p-5 rounded-3xl bg-background">
              
    //     </div> */}
    //   </div>
    // </main>
    // </>
  )
}
