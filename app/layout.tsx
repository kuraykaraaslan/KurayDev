import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'kuray karaaslan - kuray.dev',
  description: 'Full Stack Developer proficient in PHP, Java, Python, and React, I am dedicated to delivering advanced and efficient solutions. In back-end development, I specialize in crafting robust systems using PHP and Java, ensuring a seamless interplay of functionality and reliability. On the front end, I leverage React to create immersive interfaces for a compelling user experience.',
  keywords: "avaScript, Python, Java, Ruby, C#, PHP, HTML, CSS, React.js, Angular, Vue.js, Bootstrap, Sass, Node.js, Express.js, Django, Flask, Ruby on Rails, ASP.NET, PHP (e.g., Laravel), MySQL, PostgreSQL, MongoDB, SQLite, SQL Server, Git, GitHub, GitLab, Bitbucket, Webpack, Babel, npm, Yarn, REST, GraphQL, Postman, Docker, Kubernetes, AWS, Heroku, DigitalOcean, Jest, Mocha, Chai, Selenium, Cypress, Visual Studio Code, Atom, Sublime Text, IntelliJ IDEA, Agile, Scrum, Kanban, Jira, Trello, Slack, Mobile-First, Responsive Web Design (RWD), Problem Solving, Communication, Team Collaboration, Creativity, Certificates and Degrees"
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="lowercase min-h-screen antialiased bg-base-300">
        {children}</body>
    </html>
  )
}
