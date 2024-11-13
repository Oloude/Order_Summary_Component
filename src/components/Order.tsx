import Price from "./Price"

 

function Order() {
  return (
    <article className="p-6 flex flex-col">
      <h1 className="text-darkBlue font-bold text-2xl mb-5 text-center">Order Summary</h1>
      <p className="text-desaturatedBlue text-base font-medium mb-7 text-center max-w-xs mx-auto"> You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like! </p>
      <Price/>
      <button className="text-white font-bold text-sm bg-brightBlue rounded-md py-3 mb-3 shadow-md hover:bg-opacity-70">Proceed to Payment </button>
      <button className="text-desaturatedBlue font-bold text-sm py-3 hover:text-darkBlue">Cancel Order</button>
    </article>
  )
}

export default Order