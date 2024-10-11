import Input from '@/app/components/input'

export default function Page() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className='text-2xl font-bold text-gray-800 mt-4'>Create Post</h2>
      <form className='mt-4 space-y-4 flex flex-col'>
        <Input 
          type='text'
          name='title'
          labelName='Title'
          classname='px-3 py-2.5 rounded-2xl'
        />
        <Input 
          type='text'
          name='title'
          labelName='Url'
          classname='px-3 py-2.5 rounded-2xl'
        />
        <Input 
          type='file'
          name='image'
          labelName=''
          classname='border-none'
        />
        <button className='bg-orange-500 text-base text-white px-4 py-2 font-semibold rounded-3xl self-end'>Post</button>
      </form>
    </div>
  )
}