
import Card from './component/Card'
const App = () => {

const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR7g89GKSjpTNn0mQ7C-ZRkznlSWbuU9DL5mwy7KWkgQ&s=10",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    companyName: "Meta",
    datePosted: "2 days ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$115/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.com/image-cdn/images/kts928pd/production/4429bc095f6ddb190c0457f215d2d625959aae87-1600x900.png?w=1600&q=72&fm=webp",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI/UX Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR219NyRGtXLVUBJC_dNea7ZjYjhB-WxZfIo_khbnNCxA&s=10",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    companyName: "Adobe",
    datePosted: "8 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPJ4AloWM1QQ87KXsWm-3IklQDW0CUbUrvkAbugvnqFaWVJnWN0YIq7ec&s=10",
    companyName: "NVIDIA",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$140/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQDi3Lj499WiCiAn7PgmlLTrHt1NrKFX7fkfe8h5Vrsw&s=10",
    companyName: "OpenAI",
    datePosted: "2 weeks ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$150/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBYtbhelCze2StCuHjQmZayKFMLu74faF2RSk9ADFv7w&s=10",
    companyName: "Uber",
    datePosted: "9 days ago",
    post: "Software Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$100/hr",
    location: "Gurgaon, India"
  }
];



  return(
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        return <div key={idx}><Card company={elem.companyName} post={elem.post} logo={elem.brandLogo} date={elem.datePosted} tag1={elem.tag1} tag2={elem.tag2} salary={elem.pay} loc={elem.location}/>aaaa</div>

      })}

    </div>
  )
}
export default App