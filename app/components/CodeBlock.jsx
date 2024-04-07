import Json from '@/app/icons/tools/Json';
import { Divider } from '@nextui-org/divider';

export default function CodeBlock() {
    return (
        <div className='select-none flex w-full h-fit flex-col items-start justify-center bg-background/50 border-1 border-utils-outline/30 rounded-3xl'>
            <div className='w-full flex items-center justify-start p-3 gap-2'>
                <div className='w-[18px] h-[18px] bg-danger rounded-full'></div>
                <div className='w-[18px] h-[18px] bg-warning rounded-full'></div>
                <div className='w-[18px] h-[18px] bg-success rounded-full'></div>
            </div>
            <Divider />
            <div className='w-full h-[35px] items-center justify-start bg-secondary/5'>
                <div className='flex items-center justify-start px-2 gap-3 h-full w-[180px] bg-background/50 border-b-2 border-primary text-warning'>
                    <Json forButton={false} />
                    <Divider orientation='vertical' className='h-[60%]' />
                    <div className='text-small text-foreground'>
                        Myself.json
                    </div>
                </div>
            </div>
            <div className='h-full w-full flex items-start justify-start p-3'>
                <pre className='ml-2'>
                    {'{\n'} 
                        {'\t'}<span className='text-success'>&quot;name&quot;</span>: <span className='text-primary'>&quot;Pavitra Patel&quot;</span>,{'\n'}
                        {'\t'}<span className='text-success'>&quot;hardWorker&quot;</span>: <span className='text-warning'>true</span>,{'\n'}
                        {'\t'}<span className='text-success'>&quot;quickLearner&quot;</span>: <span className='text-warning'>true</span>,{'\n'}
                        {'\t'}<span className='text-success'>&quot;problemSolver&quot;</span>: <span className='text-warning'>true</span>,{'\n'}
                        {'\t'}<span className='text-success'>&quot;skills&quot;</span>: {'{\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;design&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;web-development&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;application-development&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;cross-platform-development&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;cloud-technologies&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;game-development&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'\t'}<span className='text-success'>&quot;other-technologies&quot;</span>: {'[...]'},{'\n'}
                        {'\t'}{'}'}
                    {'\n{'}
                </pre>
            </div>
        </div>
    )
}
