import React from 'react';
import Navbar from '../components/Navbar';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  blogCnt: {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '10px',
    paddingBottom: '20px',
  },
  h2: {
    color: '#8d472f'
  }
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div style={{height: '100vh', backgroundColor: '#F6E7E2'}}>
      <Navbar />
      <div className={classes.blogCnt}>
        <h1 style={{color: '#67240d'}}>Embarking on a Web Journey: Building a WebSite with Next.js and Material-UI</h1>
        <h2 className={classes.h2}>
          Introduction
        </h2>
        In a world fueled by innovation, our fascination with the tech-driven creations of today continues to grow. Today, I invite you to join me on a special journey, one where I explore the art of web development guided by an AI companion named ChatGPT. Together, we&apos;ll unveil the secrets behind crafting a responsive website using Next.js and Material-UI, all while weaving our own unique conversation into the tale.

        <h2 className={classes.h2}>
          A Dialogue with ChatGPT
        </h2>
        Our adventure begins with a conversation—myself and ChatGPT, an AI wizard steeped in the world of coding and design. We set out to transform simple lines of code into a vibrant digital haven—a website that not only responds but resonates with the essence of the web.

        <h2 className={classes.h2}>
          Step 1: Laying the Foundation
        </h2>

        ChatGPT&apos;s first words lay the foundation. With their guidance, I initiate a Next.js project using the create-next-app command, instantaneously summoning the structural core of our digital world.


        <h2 className={classes.h2}>
          Step 2: Designing the Canvas
        </h2>

        Introducing Material-UI, an enchanting toolkit that brings flair to our digital canvas. With ChatGPT&apos;s wizardry, I merge this magic into our creation, setting themes, colors, and the very essence of design that will define our digital sanctuary.

        <h2 className={classes.h2}>
          Step 3: The Portal—Navbar
        </h2>
        The magic crescendos as ChatGPT unveils the creation of our navigation portal—the Navbar. Employing Material-UI&apos;s Tabs and Tab components, we construct a passage that effortlessly guides explorers to realms named &quot;Blog&quot; and &quot;About.&quot;

        <h2 className={classes.h2}>
          Step 4: Painting with Style
        </h2>
        Next, I dive into the world of aesthetics, turning lines of code into visual poetry. ChatGPT becomes my mentor, guiding me through the symphony of colors and hover effects, adding a layer of interactivity that captivates the senses.

        <h2 className={classes.h2}>
          Step 5: Adapting to All Screens
        </h2>
        As I marvel at the artwork, ChatGPT whispers the secret to our creation&apos;s flexibility—responsiveness. Together, we marry CSS media queries and Material-UI&apos;s responsive breakpoints. Our creation adapts gracefully, embracing the grandeur of devices large and small.

        <h2 className={classes.h2}>
          Step 6: Weaving the Pages
        </h2>
        A creative crescendo approaches as ChatGPT and I step into the content realm. The &quot;Blog&quot; and &quot;About&quot; pages take form, each word carefully placed as we envisage stories and insights that will soon fill these spaces.

        <h2 className={classes.h2}>
          Step 7: The Final Flourish
        </h2>
        Our digital masterpiece nears completion. Together, we test the waters, ensuring our creation stands strong across varying devices. The anticipation mounts as we&apos;re about to share our joint creation with the world.

        <h2 className={classes.h2}>
          Conclusion: A Digital Bond
        </h2>
        As our conversation draws to a close, a profound sense of accomplishment envelops me. The journey of crafting a responsive website with Next.js and Material-UI, guided by my AI companion ChatGPT, has been more than just a technical feat. It&apos;s been a testament to the power of collaboration, where technology and human creativity merge to build something beautiful.

        As I bid farewell to my digital companion, I find myself looking forward to the endless possibilities that lie ahead. Armed with newfound knowledge and a deeper understanding of web development, I step into the ever-evolving world of creation, eager to explore, learn, and continue crafting digital experiences that leave a lasting impact.
      </div>
    </div>
  );
};

export default Home;
