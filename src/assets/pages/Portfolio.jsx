import logo from '../images/logo.jpg'
export default function Portfolio() {
    const projectData =[
        {
            title:"Project1",
            img :logo,
            link:"https://github.com/dashboard"
        },
        {
            title:"Project2",
            img :logo,
            link:"https://github.com/dashboard"
        },
        {
            title:"Project3",
            img :logo,
            link:"https://github.com/dashboard"
        }
    ]
    return (
        <div>
            <h2>Portfolio Page</h2>
            <div className ='projects'>
                {projectData.map(data=>(
                    <div>
                        <a href={data.link} target="_blank">
                            <img src={data.img} className='project'></img>
                            <h4> {data.title}</h4>

                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}