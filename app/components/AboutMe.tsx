import Image from 'next/image'

const AboutMe = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/images/profile-picture.jpg"
              alt="Profile Picture"
              width={256}
              height={256}
              className="rounded-full object-cover mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              Hello! I'm a passionate web developer with 5 years of experience in creating
              beautiful and functional websites. I specialize in React, Next.js, and
              TypeScript.
            </p>
            <p className="text-lg mb-4">
              My goal is to build user-friendly and performant web applications that
              solve real-world problems. I'm always eager to learn new technologies
              and improve my skills.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading sci-fi novels, or
              experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe