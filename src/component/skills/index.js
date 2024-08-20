import skills from './skills'

const pickedColors = ['border-green-500/60', 'border-orange-500/60',
  'border-purple-500/60', 'border-teal-200/60', 'border-amber-300/60'
]

let oldNumber = 0
function generateRandomColor() {
  let randomNumber;

  do {
    randomNumber = Math.floor(Math.random() * pickedColors.length) + 1;
  } while (randomNumber === oldNumber || !pickedColors[randomNumber]);

  oldNumber = randomNumber
  return pickedColors[randomNumber];
}


const Skills = () => {

  return (
    <div className='flex flex-1 flex-col'>
      <div className='flex flex-1 flex-col p-2 text-lg leading-9 font-bold'>Proficiencies</div>
      <div className='grid grid-cols-1 rounded-md sm:grid-cols-2 lg:grid-cols-4 gap-5 p-4 '>
        {Object.keys(skills).map((key, index) => (
          <div key={index} className='flex  flex-1 flex-col bg-slate-700 p-4 rounded-md'>
            <div className='p-2'>{key}</div>
            <div key={key} className='flex flex-wrap gap-2 p-4  '>
              {skills[key] && skills[key].map((data, index) => {
                return (
                  <div key={index} className={` flex bg-clip-text rounded-md
                  border px-4 py-1 ${generateRandomColor()}
                  font-medium
                  text-base 
                  leading-6
                  whitespace-nowrap
                  dark:text-sky-400/60`}>
                    {data}
                  </div>
                )
              }
              )}
            </div>
          </div>
        )
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills