import ActionButton from './components/ActionButton'
import ProfileImage from './components/ProfileImage'
import SkillsRound from './components/SkillsRound'
import Canvas from './components/Canvas'
import TextArea from './components/TextArea'

export default function page() {

  return (
    <>
    <Canvas />
    <main>
      <div className='flex flex-col items-center justify-center w-full h-full'>
        <div className="flex items-start justify-center w-full h-full p-3">
          <div className='home-textArea flex items-start p-5 justify-center w-full rounded-3xl bg-background'>
            <div className="flex flex-col items-start gap-5 justify-start w-full z-10">
              <TextArea />
              <ActionButton />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className='orbit rounded-full bg-tertiary'>
              <ProfileImage />
              <SkillsRound />
            </div>
          </div>
        </div>
        {/* <div className="flex w-full p-5 rounded-3xl bg-background">
              
        </div> */}
      </div>
    </main>
    </>
  )
}
