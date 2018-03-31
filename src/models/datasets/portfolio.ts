import { Portfolio } from '../';

export const PortfolioData: Portfolio = {
    firstName: 'Pierre',
    lastName: 'Gadea',
    subheading: '.NET Developer',
    socialMedia: [
        {
            icon: 'fa fa-linkedin fa-2x',
            link: 'https://www.linkedin.com/in/pierregadea',
            color: '#0077B5'
        },
        {
            icon: 'fa fa-github fa-2x',
            link: 'https://github.com/pgadea',
            color: '#6e5494'
        }
    ],
    introduction: 'Hi, I\'m Pierre Gadea, and I am a .NET Developer and Front End Freelancer in the Nashville area',
    changeLog: [
        {
            color: '#10A2F5',
            month: 'Febuary',
            year: 2017,
            highlight: 'Full Stack .NET Developer',
            details: 'ASP.NET Development.'
        },
        {
            color: '#24D05A',
            month: 'October',
            year: 2017,
            highlight: 'Big Sky Code Academy',
            details: 'Full Stack JavaScript Bootcamp.'
        },
        {
            color: '#EB4888',
            month: 'August',
            year: 2016,
            highlight: '.NET Developer',
            details: 'Application Developer.'
        },
        {
            color: '#10A2F5',
            month: 'January',
            year: 2016,
            highlight: 'Software Engineer',
            details: 'Java Developer and QA.'
        },
        {
            color: '#10A2F5',
            month: 'October',
            year: 2016,
            highlight: 'Bachelor in Computer Programming',
            details: 'Southwestern College'
        }
    ],
    updates: [
        {
            description: 'Project 1',
            link: 'www.project.com'
       },
        {
            description: 'Project 2',
            link: 'www.project.com'
        }
    ],
    // tslint:disable-next-line:max-line-length
    speakerBio: 'Pierre is a developer with full stack experience and currenlty working as a .NET Developer in the finance industry in Nashville, Tennessee. He enjoys learning about software development and is always working on at least one side project.'
}
