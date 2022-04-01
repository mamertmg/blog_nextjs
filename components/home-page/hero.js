import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/BabyFuet.jpg'
          alt='An image showing Max'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Fuet</h1>
      <p>
        You might wonder how I arrived here!
      </p>
    </section>
  );
}

export default Hero;