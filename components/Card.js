import Image from "next/image"


const Card = () => {

  const cardData = [
    { imageUrl :"/asset/CopyUrl.png"  , alt:"copy Youtube Url" , title:"Copy" , subTitle:"Youtube Video URL" },
    { imageUrl :"/asset/PasteUrl.webp"  , alt:"Paste Youtube Url" , title:"Paste" , subTitle:"In Search Bar & Click Download" },
    { imageUrl :"/asset/selecting_Files.png"  , alt:"select files" , title:"Select" , subTitle:"The format & Click Download" },
    { imageUrl :"/asset/download2.webp"  , alt:"Download Video" , title:"New Window Open" , subTitle:"Click on 3 Dot and Click Download" },
  ]
  return (
    <>
    <h2 className="text-center text-gradient font-poppins font-bold text-4xl m-10" >How To Download Youtube Video</h2>
    <div className="flex flex-wrap gap-6 justify-center mt-5">
      {
        cardData.map((card)=>{
          return(
            <div key={card.imageUrl} className=" w-4/5 h-[400px] sm:w-[350px] h-[440px] bg-gradient rounded-3xl flex flex-col gap-3 items-center  p-4 pt-6 font-poppins pl-7">
                  <div className="top self-start flex flex-col gap-3">
                    <span className="text-white font-semibold  text-2xl">{card.title}</span>
                    <span className="text-white font-semibold  text-xl">{card.subTitle}</span>
                  </div>
                  <div className="bottom mt-4">
                    <Image alt={card.alt} src={card.imageUrl} width={250} height={250}></Image>
                  </div>
                </div>
          )
        })
      }
    </div>
    </>
  )
}

export default Card
