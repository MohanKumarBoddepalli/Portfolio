// const x = [1, 2]
import experience from './experience';
const Experience = () => {

  return (
    <>
      <div>
        <h3 className="flex items-center justify-center text-lg font-semibold tracking-[.45em] text-red-700/60" color="#ae5959">CODING JOURNEY</h3>
        <h2 className="flex items-center justify-center font-semibold">The Adventure of Learning Code</h2>
      </div>
      <div>
        {experience.map((data) =>
          <div className="grid-cols-3 size-full gap-2 items-center h-44 gap-x-10 justify-center w-auto flex">
            <div className=" flex items-center justify-center">
              {data.left}
            </div>
            <div className="w-px h-full bg-transparent justify-center items-center flex bg-gray-200">
              <div className="flex justify-center w-11 h-11 rounded-full bg-cyan-900 absolute items-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className=" flex items-center justify-center">
                  {data.year}
                </div>
              </div>
            </div>
            <div>
              {data.right}
            </div>
          </div>
        )
        }
      </div>
      <div className='flex items-center justify-center'>
      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="24"
  height="24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="M12 2L2 12 12 22 22 12l-2-2-4 4-4-4-2 2M2 12h4v4h4v-4h4L12 2z"></path>
</svg>
        Forever Coding
      </div>
    </>
  )

}

export default Experience