

const Footer = () => {
  return (
 <div 
 onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
 className="full-screen bg-black mt-15 px-4 sm:px-6 lg:px-0 cursor-pointer">
<div
    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 p-8 "
  >
    <div className="text-white space-y-4">
      <h1 className="text-red-700">BRAND</h1>
      <p 
      className='cursor-pointer'
        >History</p>
      <p>Innovation</p>
      <p>About MG</p>
      <p>Pillars</p>
      <p>Culture at MG</p>
      <p>Stories at MG</p>
      <p>Safety Fast</p>
      <p>Press Release</p>
       </div>
     <div className="text-white space-y-4">
      <h1 className="text-red-700">HELP</h1>
      <p>Dealership</p>
      <p>Contact Us</p>
      <p>Store Locator</p>
      <p>Careers</p>
      <p>FAQ</p>
        </div>

    <div className="text-white space-y-4">
      <h1 className="text-red-700">VEHICLES & PRICING</h1>

      {[
        "MG Astor",
        "MG Hector",
        "MG Hector Plus (6S)",
        "MG Hector Plus (7S)",
        "MG ZS EV",
        "MG GLOSTER",
        "MG Comet EV",
        "MG Windsor EV",
      ].map((item, i) => (
        <p key={i} className="flex items-center gap-2">
          {item}
          <img src="/src/assets/vector.png" className="w-2 h-2" alt="" />
        </p>
      ))}
        </div>

    <div className="text-white space-y-4">
      <h1 className="text-red-700">PRICING</h1>

      {[
        "Astor price",
        "Hector price",
        "MG Hector Plus (6S) price",
        "MG Hector Plus (7S) price",
        "ZS EV price",
        "GLOSTER price",
        "Hector CVT price",
        "Windsor EV price",
      ].map((item, i) => (
        <p key={i} className="flex items-center gap-2">
          {item}
          <img src="/src/assets/vector.png" className="w-2 h-2" alt="" />
        </p>
      ))}
    </div>

    <div className="text-white space-y-4">
      <h1 className="text-red-700">ADDITIONAL</h1>
      <p>Privacy policy</p>
      <p>
        End user Licence and <br /> Service Agreement
      </p>
      <p>Corporate</p>
    </div>

  </div>

  <hr className="border-white mt-12" />

 
  <p className="text-white text-center mt-8 text-sm sm:text-base">
    © 2025 - JSW MG Motor Bhutan Pvt. Ltd. All rights Reserved
  </p>

</div>
  )
}

export default Footer
