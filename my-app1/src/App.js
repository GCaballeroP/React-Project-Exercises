
import './App.css';
import Testimony from './components/Testimony';
function App() {
  return (
    <div className='App'>

      <div className='contenedor-principal'>
        <h1> Here is what our alumni say about freeCodeCamp: </h1>
        <Testimony
          name='Shawn Wang '
          country='Singapore'
          image='photo1'
          alt='photp 1'
          office='Software Engineer'
          company='Amazon'
          testimony='Its scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.' />
        <Testimony
          name='Sarah Chima'
          country='Nigeria'
          image='photo2'
          alt='photp 2'
          office='Software Engineer'
          company='ChatDesk'
          testimony='FreeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company..' />

        <Testimony
          name='Emma Bostian'
          country='Sweden'
          image='photo3'
          alt='photp 3'
          office='Software Engineer'
          company='Spotify'
          testimony='I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp is course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.' />
      </div>
    </div>
  );
}

export default App;
