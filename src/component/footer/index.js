const Footer = () => {
  return (
    <>
      <div className="flex flex-col gap-2 h-24 bg-gradient-to-r from-cyan-500/60 to-blue-500/60 w-full justify-center place-items-center items-center ">
        <div>© 2023 Boddepalli Mohan Kumar. All rights reserved.</div>
        <div className=" flex flex-row gap-2">
          <a className="flex gap-2" target="_blank" href='https://www.instagram.com/__m_o_h_a_n__b/'>
            Instagram
          </a>
          <a className="flex gap-2" target="_blank" href='https://www.linkedin.com/in/mohan-kumar-boddepalli/'>
            LinkedIn
          </a>
          <a className="flex gap-2" target="_blank" href='https://github.com/MohanKumarBoddepalli'>
            Github
          </a>
        </div>
      </div>
    </>

  )
}

export default Footer