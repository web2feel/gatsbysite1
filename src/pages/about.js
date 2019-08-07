import React from 'react'
import{Link} from 'gatsby'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
       <div>
        <h1>About this website</h1>
        <p> Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
        <Link to='/'>Home</Link>
        </div>
        </Layout>
    )
}

export default About