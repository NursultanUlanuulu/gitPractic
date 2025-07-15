import React from 'react'
import './Cards.css'

function Cards() {
  const cards = [
    {
      id: 1,
      name: "chevrolet camaro",
      title: "Chevrolet Camaro — спортивный автомобиль, впервые представленный в 1966 году.",
      img: "https://avatars.mds.yandex.net/i?id=0e5cbebc8e2c3e1eaf5aeaed0c58b173_l-13013568-images-thumbs&n=13"
    },
    {
      id: 2,
      name: "lamborghini centenario",
      title: "Lamborghini Centenario — среднемоторный полноприводный суперкар, выпущенный ограниченной серией в 40 экземпляров.",
      img: "https://avatars.mds.yandex.net/i?id=61d07636e759030955cd4820e6f8d0fc0ba7e2dd-5323959-images-thumbs&n=13"
    },
    {
      id: 3,
      name: "mercedes benz",
      title: "Mercedes-Benz — немецкая марка автомобилей, основанная в 1908 году в Германии.",
      img:"https://avatars.mds.yandex.net/i?id=3d08389472e3079c746aee489d5f1d90dcf1f68b-5141403-images-thumbs&n=13"
    }
  ]
  return (
    <div className='cards'>{
      cards.map((el) => (
        <div key={el.id} className="card">
          <img src={el.img} alt="" />
          <div className="card__content">
            <p className="card__title">{el.name}</p>
            <p className="card__description">
              {el.title}
            </p>
          </div>
        </div>

      ))
    }
    </div>
  )
}

export default Cards