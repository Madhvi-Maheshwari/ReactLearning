import Section1 from './components/Section1/Section1'


const App = () => {
  const users = [{img:'https://media.istockphoto.com/id/2277251072/photo/modern-business-professionals-collaborating-during-office-meeting.webp?a=1&b=1&s=612x612&w=0&k=20&c=boNomochRSBA3Dc4wK7HsHl8Hliw7WOQczhWwpooRwg=',
    intro:'',
    tag:'Satisfied'
  },
    {img:' https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
      ,intro:'',
      tag:'UnderServed'
    },
    {img:'https://plus.unsplash.com/premium_photo-1661405547439-56b6b5245b64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'',
      tag:'UnderBanked'
    }
  ]
  return (
    <div >
      <Section1 users={users}/>
    </div>
  )
}

export default App